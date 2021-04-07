import React from "react";
import axios from "axios";

export default function Form(props) {
  const selectCountry = (e) => {
    props.setCountry(e.target.value);
    props.setCountryData([]);
    props.setCityData(null);
  };

  const selectCity = (e) => {
    props.setCity(e.target.value);
    axios
      .get(`/api/weather/${props.country}/${e.target.value}`)
      .then(function (response) {
        props.setCityData(response.data.body);
      });
  };

  return (
    <div className="form">
      <select value={props.country} onChange={(e) => selectCountry(e)}>
        {props.data.map((country) => (
          <option key={country.label} value={country.code}>
            {country.label}
          </option>
        ))}
      </select>
      <select value={props.city} onChange={(e) => selectCity(e)}>
        <option>Select City</option>
        {props.selectedCountryCities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
