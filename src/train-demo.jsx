import { useRef, useState, useEffect } from "react";

/* Short XP pop sound (base64 WAV) */
const XP_SOUND_SRC =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";

export default function TrainDemo() {
  const videoRef = useRef(null);

  // Calibration & tracking
  const calibrationXsRef = useRef([]);
  const neutralXRef = useRef(null);

  // Intent tracking
  const intentTimeRef = useRef(null);
  const intentDirRef = useRef(null);
  const intentActiveRef = useRef(false);

  // Trial state
  const trialActiveRef = useRef(false); // Moved inside the component

  // Audio
  const xpAudioRef = useRef(null);

  // State
  const [started, setStarted] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibProgress, setCalibProgress] = useState(0);

  const [direction, setDirection] = useState("CENTER");
  const [prompt, setPrompt] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);

  const [xp, setXp] = useState(0);
  const [lastXpGain, setLastXpGain] = useState(null);
  const level = Math.floor(xp / 100) + 1;

  const [audioUnlocked, setAudioUnlocked] = useState(false);

  // ---------------- AUDIO UNLOCK ----------------
  const unlockAudio = async () => {
    if (audioUnlocked) return;

    try {
      const silent = new Audio(XP_SOUND_SRC);
      silent.volume = 0;
      await silent.play();
      silent.pause();
      silent.currentTime = 0;

      xpAudioRef.current = new Audio(XP_SOUND_SRC);
      xpAudioRef.current.volume = 0.8;

      setAudioUnlocked(true);
    } catch (e) {
      console.warn("Audio unlock failed", e);
    }
  };

  // ---------------- START CAMERA ----------------
  const startCamera = async () => {
    unlockAudio();

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });

    videoRef.current.srcObject = stream;
    setStarted(true);
  };

  // ---------------- CALIBRATION ----------------
  const startCalibration = () => {
    calibrationXsRef.current = [];
    neutralXRef.current = null;
    setCalibProgress(0);
    setIsCalibrating(true);
  };

  // ---------------- START REACTION ----------------
  const startTrial = () => {
    setReactionTime(null);
    setPrompt(Math.random() > 0.5 ? "LEFT" : "RIGHT");

    intentTimeRef.current = null;
    intentDirRef.current = null;
    intentActiveRef.current = false;

    trialActiveRef.current = true; // 🔒 OPEN TRIAL

    // Set a timeout to fail the trial after 30 seconds
    setTimeout(() => {
      if (trialActiveRef.current) {
        trialActiveRef.current = false; // 🔒 CLOSE TRIAL
        setPrompt(null);
        alert("You failed this goal"); // Display failure message
      }
    }, 30000);
  };

  // ---------------- XP CALC ----------------
  const calculateXp = (rt) => {
    let gain = 10;
    if (rt < 250) gain += 10;
    else if (rt < 400) gain += 5;
    else if (rt < 600) gain += 2;

    setXp((prev) => prev + gain);
    setLastXpGain(gain);

    if (xpAudioRef.current) {
      xpAudioRef.current.currentTime = 0;
      xpAudioRef.current
        .play()
        .then(() => {
          console.log("XP sound played successfully"); // Debugging log
        })
        .catch((err) => {
          console.error("Failed to play XP sound", err); // Error handling
        });
    } else {
      console.warn("XP audio is not initialized"); // Debugging log
    }

    setTimeout(() => setLastXpGain(null), 900);
  };

  // ---------------- FACEMESH (INVISIBLE) ----------------
  useEffect(() => {
    if (!started) return;

    const faceMesh = new window.FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    faceMesh.onResults((results) => {
      if (!results.multiFaceLandmarks?.length) return;

      const cx = results.multiFaceLandmarks[0][1].x;

      // ---- CALIBRATION ----
      if (isCalibrating) {
        calibrationXsRef.current.push(cx);
        const p = Math.min(
          (calibrationXsRef.current.length / 60) * 100,
          100
        );
        setCalibProgress(Math.round(p));

        if (calibrationXsRef.current.length >= 60) {
          neutralXRef.current =
            calibrationXsRef.current.reduce((a, b) => a + b, 0) /
            calibrationXsRef.current.length;
          setIsCalibrating(false);
        }
        return;
      }

      if (neutralXRef.current === null) return;

      const delta = neutralXRef.current - cx;

      if (delta > 0.03) setDirection("RIGHT");
      else if (delta < -0.03) setDirection("LEFT");
      else setDirection("CENTER");

      // ---- INTENT / CONFIRM ----
      if (prompt && trialActiveRef.current) {
        if (!intentActiveRef.current) {
          if (delta > 0.02) {
            intentActiveRef.current = true;
            intentDirRef.current = "RIGHT";
            intentTimeRef.current = performance.now();
          } else if (delta < -0.02) {
            intentActiveRef.current = true;
            intentDirRef.current = "LEFT";
            intentTimeRef.current = performance.now();
          }
        }

        // Ignore incorrect movement
        if (
          intentActiveRef.current &&
          intentDirRef.current !== prompt &&
          ((prompt === "RIGHT" && delta < -0.06) ||
            (prompt === "LEFT" && delta > 0.06))
        ) {
          console.warn("Incorrect movement detected, ignoring");
          return; // Ignore this movement
        }

        // Process correct movement
        if (
          intentActiveRef.current &&
          intentDirRef.current === prompt &&
          ((prompt === "RIGHT" && delta > 0.06) ||
            (prompt === "LEFT" && delta < -0.06))
        ) {
          const rt = Math.round(
            performance.now() - intentTimeRef.current
          );
          setReactionTime(rt);
          calculateXp(rt);

          setPrompt(null);
          intentActiveRef.current = false;
          trialActiveRef.current = false; // 🔒 CLOSE TRIAL
        }
      }
    });

    const camera = new window.Camera(videoRef.current, {
      onFrame: async () => {
        await faceMesh.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();

    // Cleanup function to release WebGL resources
    return () => {
      camera.stop(); // Stop the camera
      faceMesh.close(); // Release FaceMesh resources
    };
  }, [started, isCalibrating, prompt]);

  // ---------------- UI ----------------
  return (
    <div style={{ background: "black", height: "100vh", position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scaleX(-1)",
        }}
      />

      {!started && (
        <button
          onClick={startCamera}
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            height: 60,
            width: 220,
            fontSize: 18,
            borderRadius: 12,
            background: "#00ff99",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Start Camera
        </button>
      )}

      {started && (
        <>
          {/* HUD */}
          <div style={{ position: "absolute", top: 16, left: 16, color: "#aaa" }}>
            {direction}
          </div>

          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              textAlign: "right",
            }}
          >
            <div>Lv {level}</div>
            <div>{xp} XP</div>
          </div>

          {lastXpGain && (
            <div
              style={{
                position: "absolute",
                top: 60,
                right: 16,
                color: "#00ff99",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              +{lastXpGain} XP
            </div>
          )}

          {!neutralXRef.current && !isCalibrating && (
            <button
              onClick={startCalibration}
              style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: "translateX(-50%)",
                padding: "12px 20px",
                fontSize: 16,
                borderRadius: 10,
                background: "#00aaff",
                border: "none",
                fontWeight: "bold",
              }}
            >
              Calibrate
            </button>
          )}

          {isCalibrating && (
            <div
              style={{
                position: "absolute",
                top: "40%",
                width: "100%",
                textAlign: "center",
                color: "cyan",
                fontSize: 22,
              }}
            >
              Hold your head straight<br />
              Calibrating… {calibProgress}%
            </div>
          )}

          {neutralXRef.current && !prompt && !isCalibrating && (
            <button
              onClick={startTrial}
              style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: "translateX(-50%)",
                padding: "12px 20px",
                fontSize: 16,
                borderRadius: 10,
                background: "#ffaa00",
                border: "none",
                fontWeight: "bold",
              }}
            >
              Start
            </button>
          )}

          {prompt && (
            <div
              style={{
                position: "absolute",
                top: "40%",
                width: "100%",
                textAlign: "center",
                color: "yellow",
                fontSize: 48,
                fontWeight: "bold",
              }}
            >
              {prompt}
            </div>
          )}

          {reactionTime && (
            <div
              style={{
                position: "absolute",
                bottom: 80,
                width: "100%",
                textAlign: "center",
                color: "#00ff99",
                fontSize: 18,
              }}
            >
              {reactionTime} ms
            </div>
          )}
        </>
      )}
    </div>
  );
}
