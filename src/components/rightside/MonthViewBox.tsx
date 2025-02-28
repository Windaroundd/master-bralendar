import React from "react";
// import { Event } from "../event/Event";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const MonthViewBox = ({ day }: { day: dayjs.Dayjs | null }) => {
  console.log("day: ", day);
  const isToday = day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  return (
    <div>
      <div className="flex h-36 w-full flex-col items-center border border-dotted py-4 text-center font-semibold text-gray-500">
        <div
          className={cn(
            "text-center",
            isToday &&
              "bg-darkBlue flex h-8 w-8 items-center justify-center rounded-full text-white",
          )}
        >
          {day?.format("D")}
        </div>
      </div>
    </div>
  );
};

export default MonthViewBox;
