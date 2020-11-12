import React from "react";

import dd3d from '../Images/dd3d.png';

import { withRouter } from 'react-router-dom'

function Header(props) {
  
  const { history } = props;

  return (
    <div>
      <header>
        <div >
          <figure className="mx-auto">
            <img src={dd3d} alt="..." className="mx-auto" />
          </figure>
        </div>
        <div>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={()=> history.push('/CEO')}
              >
                CEO
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={()=> history.push('/Nosotros')}
              >
                Nuestra Empresa
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                onClick={()=> history.push('/Cotizador')}
              >
                Cotizador
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default withRouter(Header);
