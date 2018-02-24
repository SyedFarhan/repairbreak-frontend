import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import PhoneList from './PhoneList.js';
import ModelList from './ModelList.js';
import ProblemList from './ProblemList.js';
import SelectionsList from './SelectionsList.js';
import TextField from './TextField.js';



class RepairMenu extends Component {
  render() {
    return (
        <div class="inner">
          <Route exact path="/repair" component={() => <PhoneList onSelection={this.props.onSelection} /> } />
          <Route exact path="/repair/iphone" component={() => <ModelList onSelection={this.props.onSelection} /> } />
          <Route exact path="/repair/galaxy" component={() => <div class="inner" id="RepairContainer"><h1>Galaxy</h1></div>} />
          <Switch>
            <Route path="/repair/iphone/*/*/*" component={() => <SelectionsList selections={this.props.selections} /> } />
            <Route path="/repair/iphone/*/*" component={TextField} />
            <Route path="/repair/iphone/*" component={() => <ProblemList onSelection={this.props.onSelection} /> } />
          </Switch>
          <Route exact path="/repair/overview" component={() => <h1>Overview</h1>} />
        </div>
    );
  }
}

export default RepairMenu;
