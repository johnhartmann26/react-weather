import React from "react";
import ReturnImage from "./ReturnImage";
function WeatherBarDaily(props) {
  let tempLimits = [1000, -1000]; // min, max
  for (let i = 1; i < 7; i++) {
    if (props.weatherData.data[i].temperatureHigh < tempLimits[0]) {
      tempLimits[0] = props.weatherData.data[i].temperatureHigh;
    }
    if (props.weatherData.data[i].temperatureHigh > tempLimits[1]) {
      tempLimits[1] = props.weatherData.data[i].temperatureHigh;
    }
  }
  let tempLimitsLow = [1000, -1000];
  for (let i = 1; i < 7; i++) {
    if (props.weatherData.data[i].temperatureLow < tempLimitsLow[0]) {
      tempLimitsLow[0] = props.weatherData.data[i].temperatureLow;
    }
    if (props.weatherData.data[i].temperatureLow > tempLimitsLow[1]) {
      tempLimitsLow[1] = props.weatherData.data[i].temperatureLow;
    }
  }
  function returnBar(data, high) {
    function prettyDay() {
      var date = new Date(data.time * 1000);
      let day = date.getDate();
      let dayDictionary = {
        1: "1st",
        2: "2nd",
        3: "3rd",
        4: "4th",
        5: "5th",
        6: "6th",
        7: "7th",
        8: "8th",
        9: "9th",
        10: "10th",
        11: "11th",
        12: "12th",
        13: "13th",
        14: "14th",
        15: "15th",
        16: "16th",
        17: "17th",
        18: "18th",
        19: "19th",
        20: "20th",
        21: "21st",
        22: "22nd",
        23: "23rd",
        24: "24th",
        25: "25th",
        26: "26th",
        27: "27th",
        28: "28th",
        29: "29th",
        30: "30th",
        31: "31st"
      };
      return dayDictionary[day];
    }
    let range = Math.round(tempLimits[1]) - Math.round(tempLimits[0]);
    let difference =
      Math.round(data.temperatureHigh) - Math.round(tempLimits[0]);
    let percentOfBar = (difference / range) * 60 + 40;

    let rangeLow = Math.round(tempLimitsLow[1]) - Math.round(tempLimitsLow[0]);
    let differenceLow =
      Math.round(data.temperatureLow) - Math.round(tempLimitsLow[0]);
    let percentOfBarLow = (differenceLow / rangeLow) * -60 + 100;
    return (
      <div className="temperatureBar">
        <div className="emptyBar">
          <div className="filledBar" style={{ height: percentOfBar + "%" }}>
            {Math.round(data.temperatureHigh)}°
          </div>
        </div>
        <div className="emptyBarLow">
          <div
            className="filledBarLow"
            style={{ height: percentOfBarLow + "%" }}
          >
            {Math.round(data.temperatureLow)}°
          </div>
        </div>
        <div className="text-and-icon-wrapper">
          {prettyDay()}
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

export default WeatherBarDaily;
