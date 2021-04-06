import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "./data.json";

function App() {
  const [country, setCountry] = useState("PT");
  const [city, setCity] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [cityData, setCityData] = useState(null);

  const selectedCountryCities = data.find((element) => element.code === country)
    .cities;

  const selectCountry = (e) => {
    setCountry(e.target.value);
    setCountryData([]);
    setCityData(null);
  };

  const selectCity = (e) => {
    setCity(e.target.value);
    axios
      .get(`/api/weather/${country}/${e.target.value}`)
      .then(function (response) {
        setCityData(response.data.body);
      });
  };

  useEffect(() => {
    selectedCountryCities.map((city) =>
      axios
        .get(`/api/weather/${country}/${city.name}`)
        .then(function (response) {
          setCountryData((countryData) => [...countryData, response.data.body]);
        })
    );
  }, [selectedCountryCities, country]);

  return (
    <div className="App">
      <select value={country} onChange={(e) => selectCountry(e)}>
        {data.map((country) => (
          <option key={country.label} value={country.code}>
            {country.label}
          </option>
        ))}
      </select>
      <select value={city} onChange={(e) => selectCity(e)}>
        <option>Select City</option>
        {selectedCountryCities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <h1>Country</h1>
      <p>
        {!countryData
          ? "Loading..."
          : countryData.map((countryCity) => JSON.stringify(countryCity))}
      </p>
      <h1>City</h1>
      <p>{!cityData ? "Select a city..." : JSON.stringify(cityData)}</p>
    </div>
  );
}

export default App;
