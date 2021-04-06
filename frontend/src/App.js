import React, { useState, useEffect } from "react";
import {
  CountryDropdown,
  RegionDropdown as CityDropdown,
} from "react-country-region-selector";
import axios from "axios";
import { countryWhiteList } from "./utils.js";

function App() {
  const [country, setCountry] = useState("PT");
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/api/weather/${country}/${city}`).then(function (response) {
      setData(JSON.stringify(response.data.body));
    });
  }, [country, city]);

  return (
    <div className="App">
      <CountryDropdown
        value={country}
        valueType="short"
        whitelist={countryWhiteList}
        onChange={(val) => setCountry(val)}
        defaultOptionLabel="Select Country"
      />
      <CityDropdown
        country={country}
        countryValueType="short"
        value={city}
        onChange={(val) => setCity(val)}
        defaultOptionLabel="Select City"
      />
      <p>{!data ? "Select a city..." : data}</p>
    </div>
  );
}

export default App;
