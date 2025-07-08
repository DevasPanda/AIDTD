import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import Internships from './Internships';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/internships" element={<Internships />} />
    </Routes>
  );
}

export default App;
