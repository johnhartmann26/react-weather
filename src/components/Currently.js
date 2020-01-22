import React from "react";
import ReturnImage from "./ReturnImage";

function Currently(props) {
  return (
    <div className="Currently">
      <h1>Right now</h1>
      <p id="summary">{props.minutelySummary}</p>
      <div className="temperatureContainer">
        <ReturnImage icon={props.weatherData.icon} />
        <div className="smallerTempCon">
          <p className="realTemp">
            {Math.round(props.weatherData.temperature)}°F
          </p>
          <p className="feelsLike">
            Feels like {Math.round(props.weatherData.apparentTemperature)}°F
          </p>
        </div>
      </div>
    </div>
  );
}
export default Currently;
