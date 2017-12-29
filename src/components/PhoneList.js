import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';


const PhoneList = () => {
  return (
    <div class="inner" id="RepairContainer">
      <h2>Do you have a...</h2>
      <hr />
      <Link to="/repair/iphone" href="/repair" class="button">iPhone</Link> <Link to="repair/galaxy" href="/sell" class="button">Galaxy</Link>
    </div>
  );
};

export default PhoneList;
