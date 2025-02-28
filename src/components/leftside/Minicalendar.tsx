"use client";

import { weekDays } from "@/data/data";
import { isDayInMonth } from "@/lib/getTime";
import { useDateStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import React, { Fragment } from "react";

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
              <div
                key={index}
                className={cn(
                  "flex h-8 w-8 items-center justify-center text-center text-xs font-semibold text-gray-500",
                  day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY") &&
                    "bg-darkBlue flex items-center justify-center rounded-full text-white",
                  !isDayInMonth(day, month) && "text-gray-300",
                )}
              >
                <div>{day?.format("D")}</div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
