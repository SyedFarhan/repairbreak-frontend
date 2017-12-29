import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SelectionLink extends Component {
  render() {
    return (
        <Link
          to={`${this.props.currentPathname}/${this.props.name}`}
          href={`${this.props.currentPathname}/${this.props.name}`}
          name={this.props.name}
          onClick={this.props.onSelect}
          selectiontype={this.props.selectiontype}
          class="button options">
          {this.props.name}
        </Link>
    );
  }
}

export default SelectionLink;
