// I am going to use routes so I needed to install react-router-dom to get that functionality. Then I need to use parts of this: I need the BrowserRouter (calling it router), needed the Routes to manage all the routes and needed Route for the paths.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import all the pages
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import './App.css'
//added

import JSXVariables from "./components/JSXVariables";
function App() {
 
  return (
    <Router>
      <div>
        {/* NavBar Component */}
        <NavBar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>© 2024 My Portfolio</p>
        </footer>
      </div>
    </Router>
  );
}



export default App
