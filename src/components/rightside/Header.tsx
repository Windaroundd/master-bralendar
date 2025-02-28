"use client";
import React from "react";
import { Button } from "../ui/button";
import { SlArrowLeft } from "react-icons/sl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import dayjs from "dayjs";
import { useDateStore } from "@/lib/store";

export const Header = () => {
  const { nextMonth, prevMonth, setMonthYear, month, year } = useDateStore();

  const handleTodayClick = () => {
    setMonthYear(dayjs().month(), dayjs().year());
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-6">
        <Button
          onClick={handleTodayClick}
          className="border-darkBlue text-darkBlue hover:bg-lightBlue rounded-2xl border border-solid bg-white py-5 text-lg hover:text-white"
        >
          Today
        </Button>
        <div className="text-lightBlue flex items-center justify-center gap-5">
          <SlArrowLeft
            onClick={prevMonth}
            className="cursor-pointer font-bold"
          ></SlArrowLeft>

          <SlArrowLeft
            onClick={nextMonth}
            className="rotate-180 cursor-pointer"
          ></SlArrowLeft>
        </div>

        <h3 className="text-darkBlue text-2xl font-bold">
          {" "}
          {dayjs(new Date(year, month)).format("MMMM YYYY")}
        </h3>
      </div>
      <div>
        <Select>
          <SelectTrigger className="bg-lightBlue w-[130px] rounded-2xl py-5 text-lg !text-white">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Week</SelectItem>
            <SelectItem value="dark">Day</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
