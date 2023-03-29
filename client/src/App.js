// Imports react functionality
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Imports styling
import './App.css';

//Imports components
import AboutMe from './components/pages/aboutMe';
import ContactMe from './components/pages/contactMe';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Navbar from './components/Navbar';

// Sends entire application to index.js where application is loaded and rendered
export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* AboutMe page is the default page */}
            <Route exact path="/" element={<AboutMe />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/contactMe' element={<ContactMe />} />
          </Routes>
        </div>
    </Router>
    </div>
  );
};
