import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SelectionLink from '../../misc/SelectionLink.js';

class ProblemList extends Component {
  currentPathname = this.props.history.location.pathname;

  onSelect = (evt) => {
    const selection = evt.target;
    const selectionType = selection.getAttribute('selectiontype');
    const selectionName = selection.name;
    console.log(selection);
    this.props.onSelection(selectionType, selectionName);
  };

  render() {
    return (
      <div class="inner" id="RepairContainer">
        <Link to="/repair/iphone" href="/repair/iphone" class="backbutton">Back</Link>
        <h2>Whats the problem?</h2>
        <hr />
        <SelectionLink
          currentPathname={this.currentPathname}
          name="Cracked Screen"
          onSelect={this.onSelect}
          selectiontype="problem"
        />
        <SelectionLink
          currentPathname={this.currentPathname}
          name="Charging Port"
          onSelect={this.onSelect}
          selectiontype="problem"
        />
        <SelectionLink
          currentPathname={this.currentPathname}
          name="Water Damage"
          onSelect={this.onSelect}
          selectiontype="problem"
        />

        <SelectionLink
          currentPathname={this.currentPathname}
          name="Other"
          onSelect={this.onSelect}
          selectiontype="problem"
        />
      </div>
    );
  }
}

export default withRouter(ProblemList);
