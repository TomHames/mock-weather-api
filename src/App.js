import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    setTimeout( () => this.setState({ loading: false }), 2000); 
  }

  render() {
    if (this.state.loading) {
      return <ReactLoading />
    }
    return (
      <div className="App">   
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;