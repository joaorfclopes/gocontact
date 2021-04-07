import React from "react";
import { calcTime, getDate, getOffset } from "../utils";

export default function City(props) {
  return (
    <div id="city">
      {props.data && (
        <>
          <h1>{props.data.name}</h1>
          <p>Temperature: {props.data.main.temp} ºC</p>
          <p>Description: {props.data.weather[0].description}</p>
          <p>Max Temperature: {props.data.main.temp_max} ºC</p>
          <p>Min Temperature: {props.data.main.temp_min} ºC</p>
          <p>Thermal Sensation: {props.data.main.feels_like} ºC</p>
          <p>Humidity: {props.data.main.humidity}%</p>
          <p>
            Sunrise:{" "}
            {calcTime(
              getDate(props.data.sys.sunrise),
              getOffset(props.data.timezone)
            )}
          </p>
          <p>
            Sunset:{" "}
            {calcTime(
              getDate(props.data.sys.sunset),
              getOffset(props.data.timezone)
            )}
          </p>
        </>
      )}
    </div>
  );
}
