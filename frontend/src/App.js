import React, { useState, useEffect } from "react";
import {
  CountryDropdown,
  RegionDropdown as CityDropdown,
  CountryRegionData as countryRegionData,
} from "react-country-region-selector";
import axios from "axios";
import { countryWhiteList, toArray, formatArrayValues } from "./utils.js";

function App() {
  const [country, setCountry] = useState("PT");
  const [cityArray, setCityArray] = useState(
    formatArrayValues(
      toArray(countryRegionData.find((obj) => obj[1] === country)[2])
    )
  );
  const [city, setCity] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [cityData, setCityData] = useState(null);

  const selectCountry = (country) => {
    setCountry(country);
    setCountryData([]);
    countryRegionData.map(
      (countryRegion) =>
        countryRegion[1] === country &&
        setCityArray(formatArrayValues(toArray(countryRegion[2])))
    );
  };

  const selectCity = (city) => {
    setCity(city);
    axios.get(`/api/weather/${country}/${city}`).then(function (response) {
      setCityData(response.data.body);
    });
  };

  useEffect(() => {
    cityArray.map((city) =>
      axios.get(`/api/weather/${country}/${city}`).then(function (response) {
        setCountryData((countryData) => [...countryData, response.data.body]);
      })
    );
  }, [cityArray, country]);

  return (
    <div className="App">
      <CountryDropdown
        value={country}
        valueType="short"
        whitelist={countryWhiteList}
        onChange={(val) => selectCountry(val)}
        defaultOptionLabel="Select Country"
      />
      <CityDropdown
        id="cityDropdown"
        country={country}
        countryValueType="short"
        value={city}
        onChange={(val) => selectCity(val)}
        defaultOptionLabel="Select City"
        disableWhenEmpty
      />
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
