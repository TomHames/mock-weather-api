import React from 'react';
import axios from 'axios';

export default class WeatherData extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    weather: []
  }
}

// declare "lat" and "lon"

componentDidMount() {
  axios.get(`api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}`)
  .then(res => {
    console.log(res.status);
    // set state with response data e.g. this.setState
  })
}

  render() {
    return (
      <div>
        <p>[LOAD WEATHER API DATA]</p>
      </div>
    );
  }
}
