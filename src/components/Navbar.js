import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="inner">
            <a href="index.html" className="logo"><strong><span id='repairlogo'>repair</span><span id='breaklogo'>break</span></strong></a>
            <nav id="nav">
              <Link to='/warranty'href="repair">repair</Link>
              <Link to='/mobile'href="repair">sell</Link>
              <a href="prices.html">prices</a>
            </nav>
            <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
          </div>
        </header>
      </div>
    );
  }
}
