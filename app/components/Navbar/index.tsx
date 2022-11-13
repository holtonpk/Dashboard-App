import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  MdOutlineSpaceDashboard,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiTrendingUp, BiHelpCircle, BiTransfer } from "react-icons/bi";
import { SlPieChart, SlDrawer } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="sticky top-0 max-w-[250px] items-center flex flex-col w-1/5 h-screen bg-c9 text-c11 border-r-[1px] border-r-c12">
      <div className="relative w-full h-20 pt-3 pl-4 text-2xl">
        <div className="flex flex-row ">
          <h1 className="text-2xl font-bold text-c3">On</h1>

          <h1 className="text-2xl font-bold text-c11">point</h1>
        </div>
      </div>
      <div className="relative flex flex-col w-full gap-2 h-fit ">
        <MenuItem
          title="Dashboard"
          dropDown={false}
          icon={<MdOutlineSpaceDashboard className="w-6 h-6" />}
          // subCategory={[
          //   { title: "income", link: "/" },
          //   { title: "outcome", link: "/" },
          //   { title: "savings", link: "/savings" },
          // ]}
        />
        <MenuItem
          title="Analytics"
          dropDown={false}
          icon={<BiTrendingUp className="w-6 h-6" />}
          // subCategory={[
          //   { title: "option one", link: "/" },
          //   { title: "option two", link: "/" },
          //   { title: "option three", link: "/" },
          // ]}
        />
        <MenuItem
          title="Transfers"
          dropDown={true}
          icon={<BiTransfer className="w-6 h-6 rotate-90" />}
          subCategory={[
            { title: "Send Money", link: "/" },
            { title: "Deposit Money", link: "/" },
          ]}
        />
        <MenuItem
          title="Notifications"
          dropDown={false}
          icon={<MdOutlineNotificationsNone className="w-6 h-6" />}
        />
      </div>
      <div className="absolute bottom-0 flex flex-col justify-between w-full px-4 py-3 h-fit">
        <div>
          <h1 className="text-sm uppercase text-c11"> Account</h1>
          <div className="flex flex-col gap-6 w-[80%] mt-6 ml-4">
            <Link
              href="/"
              className="flex flex-row items-center gap-3 text-sm cursor-pointer text-c12 fill-c12 hover:text-c11 hover:fill-c11"
            >
              <BiHelpCircle className="w-6 h-6" />
              Help
            </Link>
            <Link
              href="/"
              className="flex flex-row items-center gap-3 text-sm cursor-pointer text-c12 fill-c12 hover:text-c11 hover:fill-c11"
            >
              <FiSettings className="w-6 h-6" />
              Settings
            </Link>
          </div>
        </div>
        <Link
          href="/"
          className="flex flex-row items-center gap-4 mt-8 text-sm cursor-pointer text-c12 fill-c12 hover:text-c11 hover:fill-c11"
        >
          <FiLogOut className="w-6 h-6" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
