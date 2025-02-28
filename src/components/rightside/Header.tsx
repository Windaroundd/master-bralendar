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
  const { nextMonth, prevMonth, setMonthYear, month, year, setDate } =
    useDateStore();

  const handleTodayClick = () => {
    setMonthYear(dayjs().month(), dayjs().year());
    setDate(dayjs());
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-6">
        <Button
          onClick={handleTodayClick}
          className="rounded-2xl border border-solid border-darkBlue bg-white py-5 text-lg text-darkBlue hover:bg-lightBlue hover:text-white"
        >
          Today
        </Button>
        <div className="flex items-center justify-center gap-5 text-lightBlue">
          <SlArrowLeft
            onClick={prevMonth}
            className="cursor-pointer font-bold"
          ></SlArrowLeft>

          <SlArrowLeft
            onClick={nextMonth}
            className="rotate-180 cursor-pointer"
          ></SlArrowLeft>
        </div>

        <h3 className="text-2xl font-bold text-darkBlue">
          {" "}
          {dayjs(new Date(year, month)).format("MMMM YYYY")}
        </h3>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[130px] rounded-2xl bg-lightBlue py-5 text-lg !text-white">
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
