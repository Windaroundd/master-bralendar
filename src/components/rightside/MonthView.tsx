"use client";
import React, { Fragment } from "react";

import MonthViewBox from "./MonthViewBox";
import { useDateStore } from "@/lib/store";

const MonthView = () => {
  const { twoDMonthArray } = useDateStore();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <div className="mb-5 grid grid-cols-7">
        {weekDays.map((item) => (
          <div key={item} className="text-center font-semibold text-gray-500">
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-6">
        {twoDMonthArray?.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, index) => (
              <MonthViewBox key={index} day={day} />
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default MonthView;
