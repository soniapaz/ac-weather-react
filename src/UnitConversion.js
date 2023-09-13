import React, { useContext } from "react";
import "./UnitConversion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import UnitConversionContext from "./UnitConversionContext";

export default function UnitConversion(props) {
  const { unit, toggleUnit } = useContext(UnitConversionContext);

  function convertToFahrenheit(event) {
    event.preventDefault();
    toggleUnit();
  }

  function convertToCelsius(event) {
    event.preventDefault();
    toggleUnit();
  }

  function convertTemperature(temperature) {
    if (unit === "fahrenheit") {
      return Math.round((temperature * 9) / 5 + 32);
    } else {
      return Math.round(temperature);
    }
  }

  function convertToMph(speed) {
    if (unit === "fahrenheit") {
      return Math.round(speed * 0.621371);
    } else {
      return Math.round(speed);
    }
  }

  return (
    <div>
      <div className="row">
        <span className="col-6 current-max-temp">
          Max.: {convertTemperature(props.data.maxTemp)}{" "}
          {unit === "fahrenheit" ? "ºF" : "ºC"} ↑
        </span>
        <span className="col-6 current-min-temp">
          Min.: {convertTemperature(props.data.minTemp)}{" "}
          {unit === "fahrenheit" ? "ºF" : "ºC"} ↓
        </span>
      </div>
      <h1 className="current-temp">
        {convertTemperature(props.data.currentTemp)}
      </h1>
      <span className="unit-current-temp-chosen">
        {unit === "fahrenheit" ? " ºF" : " ºC"}
      </span>
      <span class="pipe"></span>
      <button
        className="unit-conversion-button"
        type="button"
        title="Change the temperature unit"
        onClick={unit === "celsius" ? convertToFahrenheit : convertToCelsius}
      >
        <span>{unit === "celsius" ? " ºF" : " ºC"}</span>
      </button>
      <p className="current-feels-like">
        Feels like {convertTemperature(props.data.feelsLike)}{" "}
        {unit === "fahrenheit" ? " ºF" : " ºC"}
      </p>
      <div className="row">
        <span className="col-6 humidity">
          <FontAwesomeIcon icon={faDroplet} className="humidity-icon" />
          <span>
            <span className="current-humidity">
              {" "}
              {Math.round(props.data.humidity)}
            </span>{" "}
            %
          </span>
        </span>
        <span className="col-6 wind">
          <FontAwesomeIcon icon={faWind} className="wind-icon" />
          <span>
            <span className="current-wind"> </span>
            {unit === "fahrenheit"
              ? `${convertToMph(props.data.wind)} mph`
              : `${Math.round(props.data.wind)} km/h`}
          </span>
        </span>
      </div>
    </div>
  );
}
