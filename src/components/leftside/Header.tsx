"use client";
import { useDateStore } from "@/lib/store";
import dayjs from "dayjs";
import React from "react";
import { SlArrowLeft } from "react-icons/sl";

const Header = () => {
  const { prevMonth, nextMonth, month, year } = useDateStore();

  return (
    <div className="flex justify-center gap-5">
      <div className="text-lightBlue flex items-center justify-center gap-5">
        <SlArrowLeft
          onClick={prevMonth}
          className="cursor-pointer font-bold"
        ></SlArrowLeft>
        <h3 className="text-darkBlue font-bold">
          {dayjs(new Date(year, month)).format("MMM YYYY")}
        </h3>
        <SlArrowLeft
          onClick={nextMonth}
          className="rotate-180 cursor-pointer"
        ></SlArrowLeft>
      </div>
    </div>
  );
};

export default Header;
