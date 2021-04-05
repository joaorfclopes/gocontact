import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api").then(function (response) {
      setData(response.data.message);
    });
  }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
