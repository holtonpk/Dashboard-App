"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: ["Income", "Outcome", "Savings"],
    datasets: [
      {
        data: [33, 33, 33],
        backgroundColor: ["#D255D1", "#2F66EE", "#FFC35A"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    // animation: {
    //   duration: 0,
    // },
  };
  return (
    <div className="relative grid items-center w-full h-full max-h-[100%] grid-cols-2 p-4 mx-auto overflow-hidden rounded-lg bg-c9">
      <div className="relative h-[100px] ">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-3">
          <div className="w-4 h-4 rounded-sm bg-c6 "></div>
          <h1 className="text-sm text-c11 ">Income</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-4 h-4 rounded-sm bg-c3 "></div>
          <h1 className="text-sm text-c11 ">Outcome</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-4 h-4 rounded-sm bg-c7 "></div>
          <h1 className="text-sm text-c11 ">Savings</h1>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
