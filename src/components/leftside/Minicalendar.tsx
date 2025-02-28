"use client";

import { weekDays } from "@/data/data";

import { useDateStore } from "@/lib/store";

import React, { Fragment } from "react";
import MiniCalendarBox from "./MiniCalendarBox";

const MiniCalendar = () => {
  const { calendar, month } = useDateStore();

  return (
    <div>
      <div className="grid grid-cols-7">
        {weekDays.map((item) => (
          <div
            key={item}
            className="text-center text-sm font-semibold text-gray-500"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid-row-6 mt-5 grid grid-cols-7">
        {calendar?.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, index) => (
              <MiniCalendarBox key={index} day={day} month={month} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
