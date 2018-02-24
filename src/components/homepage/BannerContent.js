import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Icon from '../misc/Icon.js';

export default class BannerContent extends Component {
  render() {
    return (
        <div class="inner">
            <header>
              <h1>Metro Detroit iPhone Repair</h1>
              <h2>Relax. We'll fix it.</h2>
            </header>

            <div class="flex">
              <Icon
                iconType="icon fa-car"
                title="Mobile Repairs"
                description="We come to you!"
              />

              <Icon
                iconType="icon fa-plus"
                title="Certified"
                description="All Techs Certified"
              />

              <Icon
                iconType="icon fa-shield"
                title="Warranty"
                description="30 Day Warranty"
              />
            </div>

            <footer>
                <Link to="/repair" href="/repair" class="button">schedule a repair</Link> <Link to="/sell" href="/sell" class="button">sell a device</Link>
            </footer>
        </div>
    );
  }
}
