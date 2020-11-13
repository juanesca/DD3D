import React from "react";

import Layout from '../Components/layout';

import Cotizador from './Cotizador';
import Nosotros from './Nosotros';
import CEO from './CEO';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
          <Route path="/CEO" component={CEO} />
          <Route path="/Nosotros" component={Nosotros} />
          <Route path="/Cotizador" component={Cotizador} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
