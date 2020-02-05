import React from "react";
import Daily from "./Daily";
import Hourly from "./Hourly";
import Currently from "./Currently";
import Footer from "./Footer";

class TodayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark_sky_data: false,
      userLocation: {
        city: "Houston",
        latitude: 29.7604,
        longitude: -95.3698
      }
    };
    let url_to_fetch =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4481ccfc88e1d8ef38fbf0e0b3a91dcf/" +
      this.state.userLocation.latitude +
      "," +
      this.state.userLocation.longitude;
    fetch(url_to_fetch)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState(() => ({ dark_sky_data: data })));
  }
  render() {
    if (!this.state.dark_sky_data) {
      // loading
      return (
        <div className="TodayView">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="TodayView">
          <Currently
            minutelySummary={this.state.dark_sky_data.minutely.summary}
            weatherData={this.state.dark_sky_data.currently}
          />
          <Hourly weatherData={this.state.dark_sky_data.hourly} />
          <Daily weatherData={this.state.dark_sky_data.daily} />
          <Footer />
        </div>
      );
    }
  }
}

export default TodayView;
