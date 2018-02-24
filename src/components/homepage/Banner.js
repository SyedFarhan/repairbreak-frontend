import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Icon from '../misc/Icon.js';

export default class Banner extends Component {
  render() {
    return (
      <div>
        <section id="banner">
          {this.props.children}
  			</section>
      </div>
    );
  }
}
