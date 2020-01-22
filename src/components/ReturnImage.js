import React from "react";

function returnImage(props) {
  if (props.icon === "rain") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/rain.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "clear-day") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/sunny.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "clear-night") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/full-moon.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "snow") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/snow.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "sleet") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/sleet.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "wind") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/wind.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "fog") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/fog.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "cloudy") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/cloudy.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "partly-cloudy-day") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/pcd.png")}
        alt={props.icon}
      />
    );
  } else if (props.icon === "partly-cloudy-night") {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/pcn.png")}
        alt={props.icon}
      />
    );
  } else {
    return (
      <img
        className="weather-icon"
        src={require("./weather-icons/default.png")}
        alt={props.icon}
      />
    );
  }
}

export default returnImage;
