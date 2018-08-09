import React, { Component } from 'react';
import logo from './logo.svg'; // import from logo.svg and allows us to insert in src={logo}
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       
          <Header />
          <Content />
          <Footer />
        
      </div>
    );
  }
}

export default App;