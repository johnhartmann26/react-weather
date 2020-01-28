import React from "react";

import WeatherBarDaily from "./WeatherBarDaily";
function Daily(props) {
  return (
    <div className="Daily">
      <h1>Next few days</h1>
      <p className="summary">{props.weatherData.summary}</p>
      <div className="graph">
        <div className="maxBar">
          <div className="realBar"></div>
        </div>
        <WeatherBarDaily weatherData={props.weatherData} />
      </div>
    </div>
  );
}
export default Daily;
