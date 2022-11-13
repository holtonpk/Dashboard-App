import Link from "next/link";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
const Header = () => {
  return (
    <div className="sticky top-0 flex flex-row items-center justify-between w-full px-6 py-2 h-16 bg-c9 text-c10 z-[50]">
      <div className="flex flex-row gap-6 py-4 w-fit">
        <Link href="/" className="text-sm uppercase text-c12 hover:text-c11">
          Homepage
        </Link>
        <Link href="/" className="text-sm uppercase text-c12 hover:text-c11">
          Dashboard
        </Link>

        <Link href="/" className="text-sm uppercase text-c12 hover:text-c11">
          Pricing
        </Link>
        <Link href="/" className="text-sm uppercase text-c12 hover:text-c11">
          Contact
        </Link>
      </div>
      <div className="flex flex-row gap-4 w-fit">
        <div className="flex flex-row items-center p-2 px-4 rounded-md bg-c10">
          <input
            type="text"
            placeholder="Search"
            className="text-sm w-[200px] bg-c10 text-c12 searchBar"
          />
          <button>
            <RiSearchLine className="w-4 h-4 fill-c11" />
          </button>
        </div>
        <button className="p-1 rounded-md bg-c10">
          <MdOutlinePersonOutline className="w-5 h-5 fill-c11" />
        </button>
      </div>
    </div>
  );
};

export default Header;
