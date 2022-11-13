"use client";

import { MdOutlineCalendarToday, MdSwapHoriz } from "react-icons/md";
import React, { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// When using TypeScript 4.x and above
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-date-pickers-pro/themeAugmentation";

const DateRange = () => {
  const [value, setValue] = useState("Aug, 1 2022");
  const [value2, setValue2] = useState("Oct, 17 2022");

  const color = "#787878";

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color,
          },
        },
      },

      MuiDatePicker: {
        styleOverrides: {
          root: {
            color,
            backgroundColor: "red",
          },
        },
      },
    },
  });

  return (
    <div className="relative flex flex-row items-center gap-2">
      <div
        onClick={() => {
          var cal1 = document.getElementById("cal1") as HTMLDivElement;
          cal1.classList.toggle("hidden");
        }}
        className="hover:text-c11 p-2 border border-c10 rounded-md text-c12 text-[12px] flex flex-row items-center w-[150px] gap-2 relative cursor-pointer"
      >
        <MdOutlineCalendarToday className="w-4 h-4 " />
        {value}
      </div>

      <MdSwapHoriz className="w-5 h-5 fill-c11" />
      <div
        onClick={() => {
          var cal2 = document.getElementById("cal2") as HTMLDivElement;
          cal2.classList.toggle("hidden");
        }}
        className="p-2 border hover:text-c11 border-c10 rounded-md text-c12 text-[12px] flex flex-row items-center w-[150px] gap-2 cursor-pointer"
      >
        <MdOutlineCalendarToday className="w-4 h-4 " />
        {value2}
      </div>
      <div
        id="cal1"
        className="h-[100px] w-[100px] absolute top-full z-40   hidden"
      >
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              className="text-c11"
              views={["day"]}
              displayStaticWrapperAs="desktop"
              value={value}
              onChange={(newValue: any | null) => {
                // setValue(newValue.$d);
                // setValue(newDate);

                let newDate = new Date(newValue!.$d).toLocaleDateString("en", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });
                var cal1 = document.getElementById("cal1") as HTMLDivElement;
                cal1.classList.add("hidden");
                setValue(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
      <div
        id="cal2"
        className="h-[100px] w-[100px] absolute top-full z-40 hidden"
      >
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              className="text-c11"
              views={["day"]}
              displayStaticWrapperAs="desktop"
              value={value2}
              onChange={(newValue: any | null) => {
                let newDate = new Date(newValue!.$d).toLocaleDateString("en", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });
                setValue2(newDate);
                var cal2 = document.getElementById("cal2") as HTMLDivElement;
                cal2.classList.add("hidden");
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default DateRange;
