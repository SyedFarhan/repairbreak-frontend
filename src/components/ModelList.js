import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';


const ModelList = () => {
  return (
    <div class="inner" id="RepairContainer">
      <Link to="/repair" href="/repair" class="fa-arrow backbutton">Back</Link>
      <h2>Which model iPhone?</h2>
      <hr />
      <Link to="/repair/iphone/x" href="/repair" class="button options">X</Link>
      <Link to="/repair/iphone/8plus" href="/sell" class="button options">8 Plus</Link>
      <Link to="/repair/iphone/8" href="/sell" class="button options">8</Link>
      <Link to="/repair/iphone/7plus" href="/sell" class="button options">7 Plus</Link>
      <Link to="/repair/iphone/7" href="/sell" class="button options">7</Link>
      <Link to="/repair/iphone/6splus" href="/sell" class="button options">6S Plus</Link>
      <Link to="/repair/iphone/6s" href="/sell" class="button options">6S</Link>
      <Link to="/repair/iphone/6plus" href="/sell" class="button options">6 Plus</Link>
      <Link to="/repair/iphone/6" href="/sell" class="button options">6</Link>
    </div>
  );
};

export default ModelList;
