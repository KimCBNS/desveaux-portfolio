// I am going to use routes so I needed to install react-router-dom to get that functionality. Then I need to use parts of this: I need the BrowserRouter (calling it router), needed the Routes to manage all the routes and needed Route for the paths.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import all the pages
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';




//add bootstrap for the navbar and footers
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//custom css
import './App.css'

import JSXVariables from "./components/JSXVariables";
function App() {
 
  return (
    <Router>
      <div className="app-container">
        {/* NavBar Component */}
        <NavBar />
<div className='content'>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
</div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}



export default App
