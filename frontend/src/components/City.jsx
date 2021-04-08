import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { calcTime, getDate, getOffset } from "../utils";

export default function City(props) {
  return (
    <div className="city container">
      {props.data && (
        <>
          <div className={props.classes.root}>
            <Paper className={props.classes.paper}>
              <h1>Currently in {props.data.name}:</h1>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Temperature (ºC)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.data.main.temp}º
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Max (ºC)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.data.main.temp_max}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Min (ºC)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.data.main.temp_min}º
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Description
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.data.weather[0].description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Thermal Sensation (ºC)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.data.main.feels_like}º
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Humidity (%)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.data.main.humidity}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Sunrise (Hours)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {calcTime(
                          getDate(props.data.sys.sunrise),
                          getOffset(props.data.timezone)
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Card className={props.classes.root}>
                    <CardContent>
                      <Typography
                        className={props.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Sunset (Hours)
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {calcTime(
                          getDate(props.data.sys.sunset),
                          getOffset(props.data.timezone)
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </>
      )}
    </div>
  );
}
