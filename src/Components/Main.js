import React, {Component} from 'react';
import axios from 'axios';
import Location from "./Geolocation.js";

export default class Main extends Component {
constructor(props) {
  super(props)
  this.state = {
    weather: []
  }
} 

// const APIkey = "459193db15e68da839614648fced9f9c";

componentDidMount() {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=94040,us`)
  .then(res => {
    console.log(res);
    // set state with response data e.g. this.setState
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
