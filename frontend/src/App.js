import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [chosenCity, setChosenCity] = useState("Aveiro");
  const [city, setCity] = useState("Aveiro");
  const [data, setData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setCity(chosenCity);
  };

  useEffect(() => {
    axios.get(`/api/weather/${city}`).then(function (response) {
      setData(JSON.stringify(response.data.body));
    });
  }, [city]);

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={chosenCity}
          onChange={(e) => setChosenCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
