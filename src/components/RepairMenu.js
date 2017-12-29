import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js'
import BannerContent from './components/BannerContent.js';
import RepairScheduler from './components/RepairScheduler.js';
import Warranty from './components/Warranty.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Banner>
            <Route exact path="/" component={BannerContent} />
            <Route path ="/repair" component={RepairScheduler}/>
          </Banner>
        </div>
      </Router>
    );
  }
}

export default App;
