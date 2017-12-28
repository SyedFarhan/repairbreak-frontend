import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js'
import BannerContent from './components/BannerContent.js';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Banner>
            <BannerContent />
          </Banner>
        </div>
      </Router>
    );
  }
}

export default App;
