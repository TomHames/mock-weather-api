import React, { Component } from 'react';
import logo from './logo.svg'; // import from logo.svg and allows us to insert in src={logo}
import './App.css';
import Header from './Components/Header.js';
import WeatherData from './Components/WeatherData.js';
import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       
          <Header />
          <WeatherData />
          <Footer />
        
      </div>
    );
  }
}

export default App;