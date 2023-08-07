import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Jan", "Feb", "March", "Apr", "May", "June", "Jully", "Aug", "Sept","Oct", "Nov", "Dec"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Users Visited",
      backgroundColor: "#f3ba2f",
      
      data: [0, 10, 5, 2, 20, 30, 15, 52 ,66, 45,69,98],
      borderColor: "#50AF95",
      borderWidth: 2,
    },
  ],
};

const bdata = {
    labels: labels,
    datasets: [
      {
        label: "Booked Data",
        backgroundColor: "rgba(75,192,192,1)",
        // "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        // "#f3ba2f",
        // "#2a71d0",
        data: [15, 4, 13, 35, 20, 20, 15, 32 ,66, 25,59,88],
        borderColor:"#f3ba2f",
        borderWidth: 2,
      },
    ],
  };

const LineChart = () => {
  return (
    <div class="flex">
    <div class="m-5" style={{ width: 600 }} >
      <Line data={data} />
    </div>
    <div class="m-5" style={{ width: 600 }}>
    <Line data={bdata} />
  </div>
  </div>
  );
};

export default LineChart;