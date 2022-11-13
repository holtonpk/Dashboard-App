"use client";

import React from "react";
import "../globals.css";
import { TiLeaf } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";

const PricingPage = () => {
  return (
    <div className="relative h-screen ">
      <div className="z-40 flex flex-col items-center w-full h-screen gap-10 p-10 ">
        <div className="flex flex-col items-center gap-2">
          <div className="relative pb-6 text-5xl text-c11">
            <img
              src="/assets/underline.svg"
              className="absolute  w-[50%] bottom-0 left-full -translate-x-full"
            />
            Ready to get started?
          </div>
          <h2 className="text-xl text-c12 w-fit">
            Choose a plan tailored for your needs
          </h2>
        </div>
        {/* <div className="flex flex-row items-center gap-3 mt-6">
          <h1 className="text-2xl text-c12">Monthly</h1>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <h1 className="text-2xl text-c11">Yearly</h1>
        </div> */}
        <div className="grid grid-cols-3 gap-8 w-[85%] h-fit ">
          <div className="relative flex flex-col justify-between w-full h-full gap-6 p-6 pb-10 cursor-pointer bg-c9 rounded-xl hover:bg-c10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <TiLeaf className="w-6 h-6 fill-c3" />
                <h1 className="text-2xl font-bold text-c11">Lite</h1>
              </div>
              <h1 className="text-sm text-c12">Perfect to get started</h1>
            </div>
            <div className="flex flex-row items-end ">
              <h1 className="bottom text-7xl text-c12 ">$</h1>
              <h1 className="bottom text-7xl text-c11">11</h1>
              <h1 className="pb-2 text-sm bottom text-c12">/Month</h1>
            </div>
            <button className="w-full p-3 px-10 text-sm text-center rounded-lg bg-c3 text-c11">
              Try 7 days for free
            </button>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-bold text-c11">Lite includes:</h1>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between w-full h-full gap-6 p-6 pb-10 cursor-pointer bg-c9 rounded-xl hover:bg-c10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <TiLeaf className="w-6 h-6 fill-c3" />
                <h1 className="text-2xl font-bold text-c11">Lite</h1>
              </div>
              <h1 className="text-sm text-c12">Perfect to get started</h1>
            </div>
            <div className="flex flex-row items-end ">
              <h1 className="bottom text-7xl text-c12 ">$</h1>
              <h1 className="bottom text-7xl text-c11">11</h1>
              <h1 className="pb-2 text-sm bottom text-c12">/Month</h1>
            </div>
            <button className="w-full p-3 px-10 text-sm text-center rounded-lg bg-c3 text-c11">
              Try 7 days for free
            </button>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-bold text-c11">Lite includes:</h1>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between w-full h-full gap-6 p-6 pb-10 cursor-pointer bg-c9 rounded-xl hover:bg-c10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <TiLeaf className="w-6 h-6 fill-c3" />
                <h1 className="text-2xl font-bold text-c11">Lite</h1>
              </div>
              <h1 className="text-sm text-c12">Perfect to get started</h1>
            </div>
            <div className="flex flex-row items-end ">
              <h1 className="bottom text-7xl text-c12 ">$</h1>
              <h1 className="bottom text-7xl text-c11">11</h1>
              <h1 className="pb-2 text-sm bottom text-c12">/Month</h1>
            </div>
            <button className="w-full p-3 px-10 text-sm text-center rounded-lg bg-c3 text-c11">
              Try 7 days for free
            </button>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-bold text-c11">Lite includes:</h1>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>

              <div className="flex flex-row items-center gap-2 text-sm text-c12">
                <BsCheck className="w-8 h-8 fill-c3" />
                CMS integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
