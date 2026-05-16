import { Routes, Route } from 'react-router-dom';

// View Imports (To be built in Phase 3)
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import ProjectDetails from './views/ProjectDetails/ProjectDetails';
import About from './views/About/About';
import Resume from './views/Resume/Resume';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
