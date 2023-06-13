// Imports react functionality
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Imports components
import AboutMe from './components/pages/aboutMe';
import Portfolio from './components/pages/portfolio';
import Navbar from './components/Navbar';

// Sends entire application to index.js where application is loaded and rendered
export default function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
            {/* AboutMe page is the default page */}
            <Route exact path="/" element={<AboutMe />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
