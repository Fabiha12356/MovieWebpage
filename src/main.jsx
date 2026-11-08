import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import Home from './assets/Components/Home.jsx';
import Navbaar from './assets/Components/Navbaar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Navbaar/>
   </BrowserRouter>
  </StrictMode>,
)
