import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PhoneList from './PhoneList.js';
import ModelList from './modelpicker/ModelList.js';
import ProblemList from './problempicker/ProblemList.js';
import SelectionsList from '../SelectionsList.js';
import TextField from './TextField.js';



class RepairRouter extends Component {
  render() {
    return (
        <div>
          <Route exact path="/repair" component={() => <PhoneList onSelection={this.props.onSelection} /> } />
          <Route exact path="/repair/iphone" component={() => <ModelList onSelection={this.props.onSelection} /> } />
          <Route exact path="/repair/galaxy" component={() => <div class="inner" id="RepairContainer"><h1>Galaxy</h1></div>} />
          <Switch>
            <Route path="/repair/iphone/*/*/*" component={() => <SelectionsList selections={this.props.selections} /> } />
            <Route path="/repair/iphone/*/*" component={() => <TextField onSelection={this.props.onSelection} /> } />
            <Route path="/repair/iphone/*" component={() => <ProblemList onSelection={this.props.onSelection} /> } />
          </Switch>
          <Route exact path="/repair/overview" component={() => <h1>Overview</h1>} />
        </div>
    );
  }
}

export default RepairRouter;
