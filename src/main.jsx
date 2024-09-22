import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


// //add bootstrap for the navbar and footers
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import './App.css';

import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
