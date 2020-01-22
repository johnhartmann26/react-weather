import React from "react";
import WeatherBar from "./WeatherBar";
function Hourly(props) {
  function returnImage(icon) {
    if (icon === "rain") {
      return (
        <img
          className="weather-icon"
          src={require("./weather-icons/rain.png")}
          alt={icon}
        />
      );
    }
  }

  return (
    <div className="Hourly">
      <h1>Later today</h1>
      <p className="summary">{props.weatherData.summary}</p>
      <div className="graph">
        <div className="maxBar">
          <div className="realBar"></div>
        </div>
        <WeatherBar weatherData={props.weatherData} />
      </div>
    </div>
  );
}
export default Hourly;
