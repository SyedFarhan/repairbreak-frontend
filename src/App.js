import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/misc/Navbar.js';
import Banner from './components/homepage/Banner.js'
import BannerContent from './components/homepage/BannerContent.js';
import RepairScheduler from './components/RepairScheduler.js';
import RepairContainer from './components/repair/RepairContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Banner>
            <Route exact path="/" component={BannerContent} />
            <Route path ="/repair" component={RepairContainer}/>
          </Banner>
        </div>
      </Router>
    );
  }
}

export default App;
