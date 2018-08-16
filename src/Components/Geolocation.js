import React, {Component} from 'react';
import Geolocation from 'react-geolocation';

class Location extends Component {
  render() {
    return(
      <div>
        <Geolocation
    render={({
      fetchingPosition,
      position: { coords: { latitude, longitude } = {} } = {},
      error,
      getCurrentPosition
    }) =>
      <div>
        {error &&
          <div>
            {error.message}
          </div>}
        <pre>
          latitude: {latitude}
          longitude: {longitude}
        </pre>
      </div>}
        />
      </div>
    )
  }
}

export default Location;