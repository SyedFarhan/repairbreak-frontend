import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import PhoneList from './PhoneList.js';
import ModelList from './ModelList.js';
import ProblemList from './ProblemList.js';



class RepairMenu extends Component {
  render() {
    return (
      <div id="RepairContainer">
        <h1>{this.props.selectedDevice}</h1> <h1>{this.props.selectedModel}</h1>
        <Route exact path="/repair" component={() => <PhoneList onSelection={this.props.onSelection} /> } />
        <Route exact path="/repair/iphone" component={() => <ModelList onSelection={this.props.onSelection} /> } />
        <Route exact path="/repair/galaxy" component={() => <div class="inner" id="RepairContainer"><h1>Galaxy</h1></div>} />
        <Route path="/repair/iphone/*" component={ProblemList} />
      </div>
    );
  }
}

export default RepairMenu;
