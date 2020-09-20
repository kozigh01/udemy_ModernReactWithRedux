import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: 42, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.error("===Error: ", err);
        this.setState({ errorMessage: err.message });
      } 
    );
  }

  // React requirement
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: { this.state.lat }</div>;
    }

    return <div>Loading...</div>;
    // return (
    //   <div>
    //     Latitude: { this.state.lat }
    //     <br/>
    //     Longitude: { this.state.long }
    //     <br/>
    //     if (this.state.errorMessage) {
    //       <div>{this.state.errorMessage}</div>
    //     }
    //   </div>
    // );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));