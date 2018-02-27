import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import PhoneList from './repair/PhoneList.js';
import ModelList from './repair/modelpicker/ModelList.js';
import ProblemList from './repair/problempicker/ProblemList.js';



const RepairScheduler = () => {
  return (
    <div className="inner" id="RepairContainer">
      <Route exact path="/repair" component={PhoneList} />
      <Route exact path="/repair/iphone" component={ModelList} />
      <Route exact path="/repair/galaxy" component={() => <div className="inner" id="RepairContainer"><h1>Galaxy</h1></div>} />
      <Route path="/repair/iphone/*" component={ProblemList} />
    </div>
  );
};

export default RepairScheduler;
