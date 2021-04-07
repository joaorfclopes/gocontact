import React, { useEffect, useState } from "react";
import {
  Paper,
  Table as MaterialUiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { calcTime, getDate, getOffset } from "../utils";

export default function Table(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    if (props.data.length === props.selectedCountryCities.length) {
      setIsLoaded(true);
    }
  }, [props]);

  return (
    <>
      {isLoaded && (
        <div style={{ height: 400, width: "100%" }}>
          <Paper className="paper">
            <TableContainer>
              <MaterialUiTable>
                <TableHead>
                  <TableRow>
                    <TableCell>City</TableCell>
                    <TableCell align="center">Temperature (ºC)</TableCell>
                    <TableCell align="center">Sunrise (Hour)</TableCell>
                    <TableCell align="center">Sunset (Hour)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.data.map((city) => (
                    <TableRow key={city.name}>
                      <TableCell>{city.name}</TableCell>
                      <TableCell align="center">{city.main.temp} ºC</TableCell>
                      <TableCell align="center">
                        {calcTime(
                          getDate(city.sys.sunrise),
                          getOffset(city.timezone)
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {calcTime(
                          getDate(city.sys.sunset),
                          getOffset(city.timezone)
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </MaterialUiTable>
            </TableContainer>
          </Paper>
        </div>
      )}
    </>
  );
}
