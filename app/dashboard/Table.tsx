"use client";

import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type menuItemProps = {
  transactions: any[];
};

const Table = (props: menuItemProps) => {
  const [filterType, setFilterType] = useState("Newest Transactions");
  const [sortedTransactions, setSortedTransactions] = useState(
    props.transactions
  );

  const selectDropdown = (item: string) => {
    const filterDropDown = document.getElementById(
      "filterDropDown"
    ) as HTMLDivElement;
    filterDropDown.classList.toggle("hidden");

    const dropDownIcon = document.getElementById(
      "dropDownIcon"
    ) as HTMLDivElement;
    dropDownIcon.classList.toggle("rotate-180");

    setFilterType(item);
  };

  const sortData = (attribute: string, ascending: boolean) => {
    var unsortedArray = props.transactions;

    let sortedArray = [];
    if (ascending) {
      sortedArray = [...unsortedArray].sort((a, b) =>
        a[attribute] < b[attribute] ? -1 : 1
      );
    } else {
      sortedArray = [...unsortedArray].sort((a, b) =>
        a[attribute] > b[attribute] ? -1 : 1
      );
    }

    setSortedTransactions(sortedArray);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl text-c11 ">Recent Transactions</h1>
        <div className=" h-fit w-[225px] ">
          <button
            onClick={() => {
              const filterDropDown = document.getElementById(
                "filterDropDown"
              ) as HTMLDivElement;

              filterDropDown.classList.toggle("hidden");
              const dropDownIcon = document.getElementById(
                "dropDownIcon"
              ) as HTMLDivElement;
              dropDownIcon.classList.toggle("rotate-180");
            }}
            className="flex flex-row justify-between w-[225px] border-[1px] border-c12 rounded-md p-1 bg-c8 text-c12 text-sm gap-10 items-center px-3"
          >
            {filterType}
            <MdOutlineKeyboardArrowDown
              id="dropDownIcon"
              className="w-6 h-6 fill-c11"
            />
          </button>
          <div
            id="filterDropDown"
            className="absolute fade-in flex flex-col w-[225px] h-fit z-40 hidden border-[2px] border-c8"
          >
            <button
              onClick={() => {
                selectDropdown("Low to High");
                sortData("amount", true);
              }}
              className="flex flex-row items-center gap-10 p-1 px-3 text-sm bg-c8 text-c11 hover:bg-c9"
            >
              Low to High
            </button>
            <button
              onClick={() => {
                selectDropdown("High to Low");
                sortData("amount", false);
              }}
              className="flex flex-row items-center gap-10 p-1 px-3 text-sm bg-c8 text-c11 hover:bg-c9"
            >
              High to Low
            </button>
            <button
              onClick={() => {
                selectDropdown("Newest Transactions");
                sortData("date", false);
              }}
              className="flex flex-row items-center gap-10 p-1 px-3 text-sm bg-c8 text-c11 hover:bg-c9"
            >
              Newest Transactions
            </button>
            <button
              onClick={() => {
                selectDropdown("Oldest Transactions");
                sortData("date", true);
              }}
              className="flex flex-row items-center gap-10 p-1 px-3 text-sm bg-c8 text-c11 hover:bg-c9"
            >
              Oldest Transactions
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-2 pb-2 mt-4 bg-c9 rounded-xl h-fit">
        <div className="w-full px-3 py-2 table-grid border-b-[1px] border-b-c12">
          <label className="container relative block text-sm cursor-pointer ">
            <input
              type="checkbox"
              className="optionCheckbox"
              id="mainCheck"
              onClick={() => {
                const checkMarks = document.getElementsByClassName(
                  "optionCheckbox"
                ) as HTMLCollectionOf<HTMLInputElement> | null;

                const mainCheck = document.getElementById(
                  "mainCheck"
                ) as HTMLInputElement | null;

                if (mainCheck != null && checkMarks != null) {
                  if (!mainCheck.checked) {
                    for (let i: number = 0; i < checkMarks.length; i++) {
                      checkMarks[i].checked = false;
                    }
                  } else {
                    for (let i: number = 0; i < checkMarks.length; i++) {
                      checkMarks[i].checked = true;
                    }
                  }
                }
              }}
            />
            <span className="absolute w-6 h-6 -translate-y-1/2 border-2 rounded-md checkmark top-1/2 bg-c9 border-c12"></span>
          </label>

          <div className="table-grid-mid">
            <h1 className="w-full text-base text-left text-c11">Date</h1>
            <h1 className="w-full text-base text-left text-c11">Description</h1>
            <h1 className="w-full text-base text-left text-c11">Amount</h1>
            <h1 className="w-full text-base text-left text-c11">To/From</h1>
            <h1 className="w-full text-base text-left text-c11">Status</h1>
          </div>
          <h1 className="w-full text-base text-left text-c11">Action</h1>
        </div>
        {sortedTransactions.map((transaction, i) => {
          return (
            <div key={i}>
              <TableRow id={i} data={transaction} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
