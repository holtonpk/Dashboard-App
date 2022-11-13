"use client";

import React, { useEffect, ChangeEvent } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

type transactionData = {
  date: string;
  description: string;
  amount: number;
  to_from: string;
  status: string;
};

type menuItemProps = {
  id: number;
  data: transactionData;
};

const TableRow = (props: menuItemProps) => {
  const clickRow = () => {
    const input = document.getElementById(
      "row" + props.id + "input"
    ) as HTMLDivElement;
    input.click();
  };

  const formatDate = () => {
    var d = new Date(props.data.date);

    var month: number = d.getMonth();
    var day: string = d.getDate().toString().padStart(2, "0");
    var year: string = d.getFullYear().toString().substr(-2);
  };
  formatDate();

  return (
    <div
      key={props.id}
      id={"row" + props.id}
      className="w-full px-3 py-2 text-sm cursor-pointer table-grid items-center hover:bg-c10 text-c12 hover:text-c11 border-b-[1px] border-c10"
    >
      <label className="container relative block text-sm cursor-pointer ">
        <input
          id={"row" + props.id + "input"}
          type="checkbox"
          className="optionCheckbox"
        />
        <span className="absolute w-6 h-6 -translate-y-1/2 border-2 rounded-md checkmark top-1/2 bg-c9 border-c12"></span>
      </label>
      <div
        id={"row" + props.id + "mid"}
        onClick={clickRow}
        className="table-grid-mid"
      >
        {(() => {
          var d = new Date(props.data.date);
          var month: number = d.getMonth();
          var day: string = d.getDate().toString().padStart(2, "0");
          var year: string = d.getFullYear().toString().substr(-2);
          var date = day + "/" + month + "/" + year;
          return <h1 className="w-full text-left">{date}</h1>;
        })()}
        <h1 className="w-full text-left">{props.data.description}</h1>
        <h1 className="w-full text-left">
          {props.data.amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) + " USD"}
        </h1>
        <h1 className="w-full text-left">{props.data.to_from}</h1>
        <div className="w-full">
          {(() => {
            let status = props.data.status;

            if (status == "hold") {
              status = "On Hold";
            }

            return (
              <div
                className={
                  "px-2 mx-auto text-left rounded-full capitalize w-fit float-left " +
                  props.data.status
                }
              >
                {status}
              </div>
            );
          })()}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <button
          className="relative"
          onClick={() => {
            const row = document.getElementById(
              "row" + props.id + "mid"
            ) as HTMLDivElement;
            row.classList.toggle("opacity-0");

            const hiddenIcon = document.getElementById(
              "row" + props.id + "Hidden"
            ) as HTMLDivElement;
            hiddenIcon.classList.toggle("hidden");
            const input = document.getElementById(
              "row" + props.id + "input"
            ) as HTMLInputElement | null;
            if (input != null) {
              input.checked = false;
              input.disabled = !input.disabled;
            }
          }}
        >
          <div
            id={"row" + props.id + "Hidden"}
            className="absolute w-full h-[2px] rotate-45 -translate-x-1/2 -translate-y-1/2 bg-c12 top-1/2 left-1/2 hidden"
          ></div>
          <AiOutlineEye className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            const row = document.getElementById(
              "row" + props.id
            ) as HTMLDivElement;
            row.classList.toggle("hide");
          }}
        >
          <BiTrashAlt className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            const moreMenu = document.getElementById(
              "moreMenu" + props.id
            ) as HTMLDivElement;
            moreMenu.classList.toggle("hidden");
          }}
          className="relative w-fit h-fit "
        >
          <MdMoreHoriz className="w-6 h-6" />
          <div
            id={"moreMenu" + props.id}
            className="fade-in absolute hidden  p-1 text-[10px] px-2  bg-c9 border-[1px] border-c12 z-40 w-fit h-fit text-c12 whitespace-nowrap right-0 top-full"
          >
            This button does nothing
          </div>
        </button>
      </div>
    </div>
  );
};

export default TableRow;
