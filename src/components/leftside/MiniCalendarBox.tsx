import { isDayInMonth } from "@/lib/getTime";
import { useDateStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

const MiniCalendarBox = ({ day, month }: { day: Dayjs; month: number }) => {
  const { setDate, userSelectedDate } = useDateStore();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDate(day);
  };

  const isSelected =
    day?.format("DD-MM-YY") === userSelectedDate.format("DD-MM-YY");
  const isToday = day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full text-center text-xs font-semibold text-gray-500",
        isToday && "bg-darkBlue text-white",
        !isDayInMonth(day, month) && "text-gray-300",
        isSelected && !isToday && "bg-[#7bb0e1] text-white",
      )}
    >
      <div>{day?.format("D")}</div>
    </button>
  );
};

export default MiniCalendarBox;
