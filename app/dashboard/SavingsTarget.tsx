"use client";

import React, { useEffect } from "react";

const SavingsTarget = () => {
  const savingsTarget = 25000;
  const savingsTotal = 17250;

  const percent = Math.round((savingsTotal / savingsTarget) * 100);

  useEffect(() => {
    const percentBar = document.getElementById("percentBar") as HTMLDivElement;

    percentBar.style.width = percent.toLocaleString() + "%";
  });

  return (
    <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg bg-c9">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold text-c11">Savings Target</h1>
        <h1 className="p-1 text-[12px] px-2 rounded-full text-c9 bg-c1 ">
          {percent + "%"}
        </h1>
      </div>
      <div className="w-[100%] h-4 rounded-full bg-c10 relative">
        <div
          id="percentBar"
          className="relative left-0 w-0 h-4 rounded-full bg-c3 "
        ></div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-sm font-bold text-c11">
          {savingsTotal / 1000 + "k USD"}
        </h1>
        <h1 className="text-sm font-bold text-c12">
          {savingsTarget / 1000 + "k USD"}
        </h1>
      </div>
    </div>
  );
};

export default SavingsTarget;
