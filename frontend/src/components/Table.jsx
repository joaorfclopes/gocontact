import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { calcTime, getDate, getOffset } from "../utils";

export default function Table(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const columns = [
    { field: "city", headerName: "City", flex: 1 },
    { field: "temperature", headerName: "Temperature (ºC)", flex: 1 },
    { field: "sunrise", headerName: "Sunrise (Hours)", flex: 1 },
    { field: "sunset", headerName: "Sunset (Hours)", flex: 1 },
  ];

  const rows = props.data.map((city, index) => {
    return {
      id: index,
      city: city.name,
      temperature: city.main.temp,
      sunrise: calcTime(getDate(city.sys.sunrise), getOffset(city.timezone)),
      sunset: calcTime(getDate(city.sys.sunset), getOffset(city.timezone)),
    };
  });

  useEffect(() => {
    setIsLoaded(false);
    if (props.data.length === props.selectedCountryCities.length) {
      setIsLoaded(true);
    }
  }, [props]);

  return (
    <>
      {isLoaded && (
        <DataGrid rows={rows} columns={columns} hideFooter autoHeight />
      )}
    </>
  );
}
