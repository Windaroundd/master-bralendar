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
  const { setMonth, selectedMonthIndex } = useDateStore();

  const handleTodayClick = () => {
    setMonth(dayjs().month());
  };

  const handlePrevClick = () => {
    setMonth(selectedMonthIndex - 1);
  };

  const handleNextClick = () => {
    setMonth(selectedMonthIndex + 1);
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
            onClick={handlePrevClick}
            className="cursor-pointer font-bold"
          ></SlArrowLeft>

          <SlArrowLeft
            onClick={handleNextClick}
            className="rotate-180 cursor-pointer"
          ></SlArrowLeft>
        </div>
        <h3 className="text-darkBlue text-2xl font-bold">April 2021</h3>
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
