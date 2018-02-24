import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SelectionLink from './SelectionLink.js';


class ModelList extends Component {
  currentPathname = this.props.history.location.pathname;

  onSelect = (evt) => {
    const selection = evt.target;
    const selectionType = selection.getAttribute('selectiontype');
    const selectionName = selection.name;
    this.props.onSelection(selectionType, selectionName);
  }

  render() {
    return (
      <div>
        <div class="headergrid">
          <Link to="/repair" href="/repair" class="fa-arrow backbutton">Back</Link>
          <h2 class="menutitle">Which model iPhone?</h2>
        </div>
        <hr />
        <div class="grid">
          <SelectionLink
            currentPathname={this.currentPathname}
            name="x"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="8plus"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="8"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="7plus"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="7"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="6splus"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="6s"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="6plus"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="6"
            onSelect={this.onSelect}
            selectiontype="model"
          />

          <SelectionLink
            currentPathname={this.currentPathname}
            name="5s"
            onSelect={this.onSelect}
            selectiontype="model"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ModelList);
