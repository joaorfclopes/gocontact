import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api/weather/lisbon").then(function (response) {
      setData(JSON.stringify(response.data.body));
    });
  }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
