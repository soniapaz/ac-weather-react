import React, { useContext } from "react";
import WeatherIcons from "./WeatherIcons";
import "./CityForecastWeekday.css";
import UnitConversionContext from "./UnitConversionContext";

export default function CityForecastWeekday(props) {
  const { unit } = useContext(UnitConversionContext);

  function showForecastMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    if (unit === "fahrenheit") {
      maxTemp = Math.round((maxTemp * 9) / 5 + 32);
    }

    return maxTemp;
  }

  function showForecastMinTemp() {
    let minTemp = Math.round(props.data.temp.min);
    if (unit === "fahrenheit") {
      minTemp = Math.round((minTemp * 9) / 5 + 32);
    }

    return minTemp;
  }

  function showForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let showForecastDay = date.getDay();
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    return days[showForecastDay];
  }

  return (
    <div>
      <div className="row">
        <p className="forecast-weekday">{showForecastDay()}</p>
      </div>
      <div className="row forecast-day">
        <WeatherIcons code={props.data.weather[0].icon} />
        <span className="thu-forecast">
          {showForecastMaxTemp()} {unit === "fahrenheit" ? " º" : " º"}{" "}
          |&nbsp;&nbsp;
          {showForecastMinTemp()} {unit === "fahrenheit" ? " º" : " º"}
        </span>
      </div>
    </div>
  );
}
