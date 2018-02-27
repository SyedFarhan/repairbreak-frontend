import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../../api.js';
import Icon from '../misc/Icon.js';

export default class BannerContent extends Component {
  render() {
    return (
        <div className="inner">
            <header>
              <h1>Metro Detroit iPhone Repair</h1>
              <h2>Relax. We'll fix it.</h2>
            </header>

            <div className="flex">
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
                <Link to="/repair" href="/repair" className="button">schedule a repair</Link> <Link to="/sell" href="/sell" className="button">sell a device</Link>
                <button onClick={Client.getCustomers} />
                <button onClick={Client.getOneCustomer} />
            </footer>
        </div>
    );
  }
}
