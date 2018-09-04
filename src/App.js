import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AwesomeComponent from './Components/Spinner'

class App extends Component {
  render() {
    return (
      <div className="App">  
          <AwesomeComponent />  
          <Header />
          <Main />
          <Footer /> 
      </div>
    );
  }
}

export default App;