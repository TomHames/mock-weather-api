import React, {Component} from 'react';
import axios from 'axios';
import Location from "./Geolocation";

class Main extends Component {
constructor(props) {
  super(props)
  this.state = {
    weather: []
  }
} 
componentDidMount() {
  axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=52.878007600000004&lon=-1.4446345999999999`)
  .then(res => {
    console.log(res.data.name);
    // set state with response data e.g. this.setState()
  })
} 
  render() {
    return (
      <div>
        <Location />
      </div>
    );
  }
}

export default Main;