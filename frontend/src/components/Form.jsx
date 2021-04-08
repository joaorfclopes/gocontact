import React from "react";
import axios from "axios";
import $ from "jquery";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Form(props) {
  const selectCountry = (country) => {
    if (country.target.value !== props.country) {
      props.setCountry(country.target.value);
      props.setCountryData([]);
      props.setCity("");
      props.setCityData(null);
    }
  };

  const selectCity = (city) => {
    try {
      props.setCity(city.name);
      axios
        .get(`/api/weather/${props.country}/${city.name}`)
        .then((response) => {
          props.setCityData(response.data.body);
        })
        .then(() => {
          $("html, body").animate(
            {
              scrollTop: $(".city").offset().top,
            },
            800
          );
        });
    } catch {}
  };

  return (
    <div className="form">
      <div className={props.classes.root}>
        <Paper className={props.classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl
                variant="outlined"
                className={props.classes.formControl}
              >
                <InputLabel id="country-select-label">
                  Select a Country
                </InputLabel>
                <Select
                  style={{ textAlign: "left" }}
                  labelId="country-select"
                  id="country-select"
                  label="Select a Country"
                  value={props.country}
                  onChange={(country) => selectCountry(country)}
                >
                  {props.data.map((country) => (
                    <MenuItem key={country.label} value={country.code}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                style={{ textAlign: "left" }}
                onChange={(event, city) => selectCity(city)}
                options={props.selectedCountryCities}
                getOptionLabel={(city) => city.name}
                noOptionsText="No city found"
                autoHighlight
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type a City"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
