import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="inner">
            <Link to="/" href="/" className="logo"><strong><span id='repairlogo'>repair</span><span id='breaklogo'>break</span></strong></Link>
            <nav id="nav">
              <Link to='/repair'href="repair">repair</Link>
              <Link to='/sell'href="repair">sell</Link>
              <Link to='/prices'href="prices">prices</Link>
            </nav>
            <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
          </div>
        </header>
      </div>
    );
  }
}
