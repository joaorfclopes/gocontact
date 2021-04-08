import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BarChart from "./BarChart";
import Table from "./Table";
import Loading from "./Loading";

export default function Country(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    if (props.data.length === props.selectedCountryCities.length) {
      setIsLoaded(true);
    }
  }, [props]);

  return (
    <div className="country container">
      <div className={props.classes.root}>
        <Paper className={props.classes.paper}>
          <h1>Currently in {props.countryLabel}:</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={props.classes.paper}>
                {!isLoaded ? (
                  <Loading />
                ) : (
                  <>
                    <h3 style={{ textAlign: "left" }}>Temperature Chart</h3>
                    <BarChart
                      data={props.data}
                      selectedCountryCities={props.selectedCountryCities}
                    />
                  </>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={props.classes.paper}>
                {!isLoaded ? (
                  <Loading />
                ) : (
                  <>
                    <h3 style={{ textAlign: "left" }}>More Info</h3>
                    <Table
                      data={props.data}
                      selectedCountryCities={props.selectedCountryCities}
                    />
                  </>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
