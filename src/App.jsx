import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import Internships from './Internships';
import About from './About';
import TrainDemo from './train-demo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/about" element={<About />} />
      <Route path="/train-demo" element={<TrainDemo />} />
      {/* Add a fallback route */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
