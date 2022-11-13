"use client";

import Document from "next/document";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type subCategory = {
  title: string;
  link: string;
};

type menuItemProps = {
  title: string;
  dropDown: boolean;
  icon: React.ReactNode;
  subCategory?: subCategory[] | null;
};

const MenuItem = (props: menuItemProps) => {
  const [dropDownStatus, setDropDownStatus] = useState(false);

  const clickMenuItem = () => {
    const icon = document.getElementById(
      props.title + "icon"
    ) as HTMLDivElement;
    icon.classList.toggle("rotate-180");
    const elem = document.getElementById(props.title) as HTMLDivElement;
    elem.classList.toggle("text-white");

    setDropDownStatus((dropDownStatus) => !dropDownStatus);
  };

  return (
    <>
      {(() => {
        if (props.dropDown) {
          return (
            <div>
              <button
                id={props.title}
                onClick={clickMenuItem}
                className="flex flex-row items-center w-full px-4 py-2 cursor-pointer hover:text-c11 hover:fill-c11 text-c12 fill-c12 "
              >
                <div className="mr-6">{props.icon}</div>
                <h1 className="w-full text-sm text-left">{props.title}</h1>

                <MdOutlineKeyboardArrowDown
                  id={props.title + "icon"}
                  className="w-8 h-6 "
                />
              </button>

              {(() => {
                if (dropDownStatus) {
                  return (
                    <div className="flex flex-col w-full">
                      {props.subCategory!.map((item, i) => {
                        return (
                          <a
                            href={item.link}
                            key={i}
                            className="w-full py-4 pl-4 text-sm capitalize h-fit bg-c10 hover:bg-c3 hover:text-c11 hover:fill-c11 text-c12 fill-c12"
                          >
                            {item.title}
                          </a>
                        );
                      })}
                    </div>
                  );
                }
              })()}
            </div>
          );
        } else {
          return (
            <Link
              // href={"/" + props.title}
              href={"/dashboard"}
              // onClick={clickMenuItem}
              className="flex flex-row items-center w-full px-4 py-2 cursor-pointer hover:text-c11 hover:fill-c11 text-c12 fill-c12 "
            >
              <div className="mr-6">{props.icon}</div>
              <h1 className="w-full text-sm text-left">{props.title}</h1>
            </Link>
          );
        }
      })()}
    </>
  );
};

export default MenuItem;
