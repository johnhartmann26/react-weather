import React from "react";
import ReturnImage from "./ReturnImage";
function WeatherBar(props) {
  let tempLimits = [1000, -1000]; // min, max
  for (let i = 1; i < 7; i++) {
    if (props.weatherData.data[i].temperature < tempLimits[0]) {
      tempLimits[0] = props.weatherData.data[i].temperature;
    }
    if (props.weatherData.data[i].temperature > tempLimits[1]) {
      tempLimits[1] = props.weatherData.data[i].temperature;
    }
  }
  function returnBar(data, high) {
    function prettyHour() {
      var date = new Date(data.time * 1000);
      let hour = date.getHours();
      let timeDictionary = {
        0: "12am",
        1: "1am",
        2: "2am",
        3: "3am",
        4: "4am",
        5: "5am",
        6: "6am",
        7: "7am",
        8: "8am",
        9: "9am",
        10: "10am",
        11: "11am",
        12: "12pm",
        13: "1pm",
        14: "2pm",
        15: "3pm",
        16: "4pm",
        17: "5pm",
        18: "6pm",
        19: "7pm",
        20: "8pm",
        21: "9pm",
        22: "10pm",
        23: "11pm"
      };

      return <div className="timeBar">{timeDictionary[hour]}</div>;
    }
    let range = Math.round(tempLimits[1]) - Math.round(tempLimits[0]);
    let difference = Math.round(data.temperature) - Math.round(tempLimits[0]);
    let percentOfBar = (difference / range) * 0.6 * 100 + 40;
    return (
      <div className="temperatureBar">
        <div className="emptyBar">
          <div
            className="filledBar"
            id="hourly"
            style={{ height: percentOfBar + "%" }}
          >
            {Math.round(data.temperature)}°
          </div>
        </div>
        <div className="text-and-icon-wrapper">
          {prettyHour()}
          <ReturnImage icon={data.icon} />
        </div>
      </div>
    );
  }
  return (
    <div className="temperatureBarChart">
      {returnBar(props.weatherData.data[1], tempLimits)}
      {returnBar(props.weatherData.data[2], tempLimits)}
      {returnBar(props.weatherData.data[3], tempLimits)}
      {returnBar(props.weatherData.data[4], tempLimits)}
      {returnBar(props.weatherData.data[5], tempLimits)}
      {returnBar(props.weatherData.data[6], tempLimits)}
    </div>
  );
}

export default WeatherBar;
