import React from "react";
import Chart from "react-apexcharts";

export default function BarChart(props) {
  const cities = props.data.map((city) => city.name);
  const temperatures = props.data.map((city) => city.main.temp.toFixed());

  const options = {
    chart: {
      width: "100%",
      height: 380,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: cities,
    },
    yaxis: {
      max: 40,
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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
