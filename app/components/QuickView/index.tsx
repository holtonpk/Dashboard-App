import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";
import { FaRegMoneyBillAlt, FaBitcoin, FaRegChartBar } from "react-icons/fa";
import { GiPadlockOpen } from "react-icons/gi";
const QuickView = () => {
  return (
    <div className="right-0 h-screen pb-20 bg-c9 w-[20%] sticky top-16 flex flex-col p-4 justify-between">
      <div className="w-full border-c10 border-[1px] rounded-lg p-1 flex flex-row h-fit gap-3 items-center">
        <div className="w-8 h-8 rounded-lg bg-c10"></div>
        <div className="flex flex-col">
          <h1 className="text-base text-c11">Patrick Holton</h1>
          <h1 className="text-[12px] text-c12">Full Stack Developer</h1>
        </div>
      </div>
      <div>
        <h1 className="text-base text-c11 whitespace-nowrap ">Total Assets</h1>
        <div className="w-full border-c10 border-[1px] rounded-lg p-2 flex flex-col h-fit gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-c3">
            <BiDollarCircle className="w-7 h-7 fill-c11" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h1 className="text-xl text-c11">3,512k USD</h1>
            <h2 className=" px-2 text-[12px] h-fit w-fit  bg-c1 text-c8 rounded-full">
              +7%
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-[10%] flex flex-row items-center justify-between mb-4">
          <h1 className="text-base text-c11 whitespace-nowrap ">Assets</h1>
          <button className="text-[12px] text-c12 whitespace-nowrap">
            View More
          </button>
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="w-full border-c10 border-[1px] rounded-lg p-1 flex flex-row h-fit gap-3 items-center hover:bg-c10 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-c10">
              <AiOutlineBank className="w-5 h-5 fill-c11" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[12px] text-c12">Bank</h1>

              <h1 className="text-base text-c11">1,523k USD</h1>
            </div>
          </div>
          <div className="w-full border-c10 border-[1px] rounded-lg p-1 flex flex-row h-fit gap-3 items-center hover:bg-c10 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-c10">
              <FaRegMoneyBillAlt className="w-5 h-5 fill-c11" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[12px] text-c12">Cash</h1>

              <h1 className="text-base text-c11">473k USD</h1>
            </div>
          </div>
          <div className="w-full border-c10 border-[1px] rounded-lg p-1 flex flex-row h-fit gap-3 items-center hover:bg-c10 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-c10">
              <FaRegChartBar className="w-5 h-5 fill-c11" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[12px] text-c12">Investments</h1>

              <h1 className="text-base text-c11">812k USD</h1>
            </div>
          </div>
          <div className="w-full border-c10 border-[1px] rounded-lg p-1 flex flex-row h-fit gap-3 items-center hover:bg-c10 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-c10">
              <FaBitcoin className="w-5 h-5 fill-c11" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[12px] text-c12">Crypto</h1>

              <h1 className="text-base text-c11">473k USD</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 rounded-lg bg-c10">
        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-c3">
          <GiPadlockOpen className="w-7 h-7 fill-c11" />
        </div>
        <h1 className="mb-1 text-base text-c11 whitespace-nowrap">
          Unlock All Features
        </h1>

        <h1 className="text-[12px] text-c12  whitespace-nowrap mb-3">
          Manage your assets like a pro
        </h1>
        <button className="p-2 px-6 text-[12px] whitespace-nowrap rounded-lg bg-c3 text-c11">
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
};
export default QuickView;
