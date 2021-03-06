import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data.json";
import Form from "./components/Form";
import City from "./components/City";
import Country from "./components/Country";

function App() {
  const [country, setCountry] = useState("PT");
  const [city, setCity] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [cityData, setCityData] = useState(null);

  const selectedCountryCities = data.find((element) => element.code === country)
    .cities;
  const countryLabel = data.find((element) => element.code === country).label;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginBottom: 20,
    },
    formControl: {
      width: "100%",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

  const materialUiClasses = useStyles();

  useEffect(() => {
    selectedCountryCities.map((city) =>
      axios.get(`/api/weather/${country}/${city.name}`).then((response) => {
        setCountryData((countryData) => [...countryData, response.data.body]);
      })
    );
  }, [selectedCountryCities, country]);

  return (
    <div className="App">
      <Form
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        setCountryData={setCountryData}
        setCityData={setCityData}
        selectedCountryCities={selectedCountryCities}
        data={data}
        classes={materialUiClasses}
      />
      <Country
        countryLabel={countryLabel}
        data={countryData}
        selectedCountryCities={selectedCountryCities}
        classes={materialUiClasses}
      />
      <City data={cityData} classes={materialUiClasses} />
    </div>
  );
}

export default App;
