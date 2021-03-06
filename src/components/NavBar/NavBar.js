import React, { Component } from 'react';
import CartWidget from './cartWidget.js';

import './NavBar.css';
export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-responsive" aria-controls="#navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar-responsive">
              <ul className="nav navbar-nav">
                  <li className="nav-item"><a className="nav-link active" href="index.html">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/productos.html">Productos</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/nosotros.html">Nosotros</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/puntos-venta.html">Puntos de Venta</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/contacto.html">Contacto</a></li>
                  <CartWidget/>
              </ul>
              </div>
            </nav>
            </React.Fragment>
        )
    }
}
