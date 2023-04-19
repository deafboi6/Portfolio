// Imports react functionality
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Imports styling
import "./styles/App.css";

//Imports components
import AboutMe from './components/pages/aboutMe';
import ContactMe from './components/pages/contactMe';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Footer from './components/footer';
import Navbar from './components/Navbar';

// Sends entire application to index.js where application is loaded and rendered
export default function App() {
  const Styles = {
    mainStyles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    routeStyles: {
      width: "80%"
    },
    navStyles: {
      width: "15%"
    },
    footerStyles: {
      position: "absolute",
      bottom: "0%",
      width: "100%"
    },
    headerStyles: {
      textAlign: "center"
    }
};

  return (
    <div>
      <Router>
        <h1 style={Styles.headerStyles}>Jayden Chapman</h1>
        <div style={Styles.mainStyles}>
        <div style={Styles.routeStyles}>
          <Routes>
            {/* AboutMe page is the default page */}
            <Route exact path="/" element={<AboutMe />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/contactMe' element={<ContactMe />} />
          </Routes>
        </div>
        <div style={Styles.navStyles}>
          <Navbar />
        </div>
        </div>
    </Router>
    <div style={Styles.footerStyles}>
    <Footer />
    </div>
    </div>
  );
};
