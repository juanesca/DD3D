import React from 'react';
import ReactDOM from 'react-dom';

import App from './Pages/App';
import App from './Pages/CEO';
import App from './Pages/Cotizador';
import App from './Pages/Nosotros';
import App from './Pages/Detalles';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
