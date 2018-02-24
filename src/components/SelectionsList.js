import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class SelectionsList extends Component {
  render() {
    return (
      <div id="RepairContainer">
      <h1>Review your selections</h1>
      <h2>Device: {this.props.selections.device}</h2>
      <hr />
      <h2>Model: {this.props.selections.model}</h2>
      <hr />
      <h2>Problem: {this.props.selections.problem}</h2>
      </div>
    );
  }
}

export default SelectionsList;
