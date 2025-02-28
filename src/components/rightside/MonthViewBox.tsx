import React from "react";
// import { Event } from "../event/Event";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { useDateStore, useEventStore } from "@/lib/store";
import { isDayInMonth } from "@/lib/getTime";

const MonthViewBox = ({ day }: { day: dayjs.Dayjs | null }) => {
  const { openPopover } = useEventStore();

  const { setDate, month } = useDateStore();

  if (!day) {
    return (
      <div className="h-12 w-full border md:h-28 md:w-full lg:h-full"></div>
    );
  }

  const isToday = day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDate(day);
    openPopover();
  };
  return (
    <div>
      <div
        className={cn(
          "flex h-36 w-full flex-col items-center border border-dotted py-4 text-center font-semibold text-gray-500",
          !isDayInMonth(day, month) && "text-gray-300",
        )}
        onClick={handleClick}
      >
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
