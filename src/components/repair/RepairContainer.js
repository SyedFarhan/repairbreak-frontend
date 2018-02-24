import React, { Component } from 'react';

import RepairMenu from './RepairRouter.js';
import { Route, Link } from 'react-router-dom';


class RepairContainer extends Component {
  state = {
    selections: {
      device: "",
      model: "",
      problem: "",
    },
  };

  onSelection = (selectionType, selectionName) => {
    const selections = this.state.selections;
    selections[selectionType] = selectionName;
    this.setState({ selections: selections });
    console.log(this.state.selections);
  };

  render() {
      return (
        <div class="inner" id="RepairContainer">
          <RepairMenu onSelection={this.onSelection} selections={this.state.selections} />
        </div>
      );
  }
}

export default RepairContainer;
