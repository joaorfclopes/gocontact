import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { calcTime, getDate, getOffset } from "../utils";

export default function Table(props) {
  const columns = [
    { field: "city", headerName: "City", width: 200 },
    { field: "temperature", headerName: "Temperature (ºC)", width: 200 },
    { field: "sunrise", headerName: "Sunrise (Hours)", width: 200 },
    { field: "sunset", headerName: "Sunset (Hours)", width: 200 },
  ];

  const rows = props.data.map((city, index) => {
    return {
      id: index,
      city: city.name,
      temperature: Math.round(city.main.temp),
      sunrise: calcTime(getDate(city.sys.sunrise), getOffset(city.timezone)),
      sunset: calcTime(getDate(city.sys.sunset), getOffset(city.timezone)),
    };
  });

  return (
    <DataGrid
      className="weather-table"
      rows={rows}
      columns={columns}
      hideFooter
      autoHeight
    />
  );
}
