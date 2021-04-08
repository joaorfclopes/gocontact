import React from "react";
import Chart from "react-apexcharts";

export default function BarChart(props) {
  const cities = props.data.map((city) => city.name);
  const temperatures = props.data.map((city) => Math.round(city.main.temp));

  const options = {
    chart: {
      width: "100%",
      height: 380,
      type: "bar",
    },
    dataLabels: {
      enabled: true,
      formatter: function (value) {
        return value + "º";
      },
    },
    xaxis: {
      categories: cities,
    },
    yaxis: {
      max: 40,
      labels: {
        formatter: function (value) {
          return value + "º";
        },
      },
    },
  };

  const series = [
    {
      name: "Temperature (ºC)",
      data: temperatures,
    },
  ];

  return (
    <div className="bar-chart">
      <Chart options={options} series={series} type="bar" />
    </div>
  );
}
