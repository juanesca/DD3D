import React from "react";

import Layout from '../Components/layout';

import Cotizador from './Cotizador';
import Nosotros from './Nosotros';
import CEO from './CEO';
import DetallesC from './Detalles';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
          <Route path="/CEO" component={CEO} />
          <Route path="/Nosotros" component={Nosotros} />
          <Route exact path="/Cotizador" component={Cotizador} />
          <Route exact path="/Cotizador/Detalles" component={DetallesC} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
