import React from "react";
import WeatherBar from "./WeatherBar";
function Hourly(props) {
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
