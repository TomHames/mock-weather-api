import React, {Component} from 'react';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      icon: [],
      temperature: []
    }
  } 
    componentDidMount() {
      if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    }
    showPosition = (position) => {
  
          axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then(res => {
          const location = res.data.name;
          const icon = res.data.weather[0].icon;
          const temperature = Math.round(res.data.main.temp);

          this.setState({ location });
          this.setState({ icon });
          this.setState({ temperature });

        })
      }
  
    showError = (error) => {
      console.warn("Error", error);
    }
  
    render() {
      return (
        <div> 
          <p>
            {this.state.location}
            <img src={this.state.icon}/>
            {this.state.temperature}
          </p>
        </div>
      );
    }
  }

  export default Main;