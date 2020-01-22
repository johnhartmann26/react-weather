import React from "react";
function Daily(props) {
  // function returnImage(icon) {
  //   if (icon === "rain") {
  //     return (
  //       <img
  //         className="weather-icon"
  //         src={require("./weather-icons/rain.png")}
  //         alt={icon}
  //       />
  //     );
  //   }
  // }
  return (
    <div className="Daily">
      <h1>Later this week</h1>
      <p className="summary">{props.weatherData.summary}</p>
      {
        props.weatherData.data[0].temperatureHigh // can do tempHigh or tempLow
      }
    </div>
  );
}
export default Daily;
