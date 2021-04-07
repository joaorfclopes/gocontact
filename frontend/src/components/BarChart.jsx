import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function BarChart(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const cities = props.data.map((city) => city.name);
  const temperatures = props.data.map((city) => city.main.temp);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: cities,
    },
  };

  const series = [
    {
      name: "Weather",
      data: temperatures,
    },
  ];

  useEffect(() => {
    setIsLoaded(false);
    if (props.data.length === props.selectedCountryCities.length) {
      setIsLoaded(true);
    }
  }, [props]);

  return (
    <>
      {isLoaded && (
        <Chart options={options} series={series} type="bar" width="500" />
      )}
    </>
  );
}
