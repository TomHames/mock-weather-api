import React, {Component} from 'react';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    }
      } 
      componentDidMount() {
       if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
  
  }
    showPosition = (position) => {
  
          axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then(res => {
          const weather = res.data.name;
          this.setState({ weather });
        })
      }
  
    showError = (error) => {
      console.warn("Error", error);
    }
  
    render() {
      return (
        <div>
          <p>
            {this.state.weather}
          </p>
        </div>
      );
    }
  }

  export default Main;