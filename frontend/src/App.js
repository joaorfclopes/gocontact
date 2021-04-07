import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "./data.json";
import Form from "./components/Form";

function App() {
  const [country, setCountry] = useState("PT");
  const [city, setCity] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [cityData, setCityData] = useState(null);

  const selectedCountryCities = data.find((element) => element.code === country)
    .cities;

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
      <Form
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        setCountryData={setCountryData}
        setCityData={setCityData}
        selectedCountryCities={selectedCountryCities}
        data={data}
      />
      <h1>Weather in your country ({country})</h1>
      <p>
        {!countryData
          ? "Loading..."
          : countryData.map((countryCity) => JSON.stringify(countryCity))}
      </p>
      <h1>Weather in your city ({!cityData ? "select a city" : city})</h1>
      <p>{!cityData ? "Select a city..." : JSON.stringify(cityData)}</p>
    </div>
  );
}

export default App;
