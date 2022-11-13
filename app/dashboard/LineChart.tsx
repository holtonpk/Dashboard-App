"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);
const LineChart = () => {
  const data = {
    labels: [10, 20, 30, 40, 50, 60, 70, 80],

    datasets: [
      {
        label: "Income",
        data: [1, 22, 33, 14, 15, 26, 73, 18, 34, 12, 42, 142],
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgb(47, 102, 238, .06)",
        borderColor: "#2F66EE",
      },
      {
        label: "Outcome",
        data: [41, 22, 33, 74, 54, 63, 72, 28, 39, 102, 113, 122],
        fill: true,
        backgroundColor: "rgb(210, 85, 209, .06)",
        borderColor: "#D255D1",
        lineTension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },

    animation: {
      duration: 0,
    },
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-between w-full h-[50px] ">
        <h1 className="text-2xl text-c11 ">Cash Flow</h1>
        <div className="w-fit h-fit border-c12 p-2 border-[1px] rounded-lg flex flex-row gap-2 items-center ">
          <div className="w-4 h-4 rounded-sm bg-c6 "></div>
          <h1 className="text-[10px] text-c12 ">Income</h1>
          <div className="w-[1px] h-4 bg-c12"></div>
          <div className="w-4 h-4 rounded-sm bg-c3"></div>
          <h1 className="text-[10px] text-c12 ">Outcome</h1>
        </div>
      </div>
      <div className="h-[225px] overflow-hidden ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
