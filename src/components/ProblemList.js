import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SelectionLink from './SelectionLink.js';

const ProblemList = () => {
  return (
    <div class="inner" id="RepairContainer">
      <Link to="/repair/iphone" href="/repair/iphone" class="backbutton">Back</Link>
      <h2>Whats the problem?</h2>
      <hr />
      <Link to="/repair/iphone/screen" href="/repair" class="button options">Cracked Screen</Link>
      <Link to="/repair/iphone/chargingport" href="/sell" class="button options">Charging Port</Link>
      <Link to="/repair/iphone/battery" href="/sell" class="button options">Battery</Link>
      <Link to="/repair/iphone/homebutton" href="/sell" class="button options">Home Button</Link>
      <Link to="/repair/iphone/other" href="/sell" class="button options">Other</Link>
    </div>
  );
};

export default ProblemList;
