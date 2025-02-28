"use client";

import React from "react";
// import { Event } from "../event/Event";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import {
  useCalendarEventStore,
  useDateStore,
  // useEventStore,
} from "@/lib/store";
import { isDayInMonth } from "@/lib/getTime";
import { Event } from "../event/Event";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const MonthViewBox = ({ day }: { day: dayjs.Dayjs | null }) => {
  // const { openPopover } = useEventStore();

  const {
    // setDate,
    month,
  } = useDateStore();

  const { events } = useCalendarEventStore();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const dayEvents = events.filter((event) => {
    return day?.format("DD-MM-YY") === dayjs(event.date).format("DD-MM-YY");
  });

  if (!day) {
    return (
      <div className="h-12 w-full border md:h-28 md:w-full lg:h-full"></div>
    );
  }

  const isToday = day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  // const handleClick = (e: React.MouseEvent) => {
  //   if (dialogOpen) {
  //     // Dialog was open — skip handling the click
  //     return;
  //   }
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setDate(day);
  //   openPopover();
  // };
  return (
    <div>
      <div
        className={cn(
          "flex h-36 w-full flex-col items-center border border-dotted py-4 text-center font-semibold text-gray-500",
          !isDayInMonth(day, month) && "text-gray-300",
        )}
        // onClick={handleClick}
      >
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-center",
            isToday && "bg-darkBlue text-white",
          )}
        >
          {day?.format("D")}
        </div>
        {dayEvents.slice(0, 2).map((item) => (
          <Event key={item.id} event={item} />
        ))}
        {dayEvents.length > 2 && (
          <Dialog
            open={dialogOpen}
            onOpenChange={(e) => {
              console.log("e: ", e);
              setDialogOpen(e);
            }}
          >
            <DialogTrigger
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full cursor-pointer overflow-hidden rounded-md py-1 pl-5 text-left text-xs text-lightBlue hover:bg-gray-200"
            >
              {dayEvents.length - 2} more
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription>
                  {dayEvents.map((item) => (
                    <div key={item.id} className="my-4">
                      <Event event={item} />
                    </div>
                  ))}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default MonthViewBox;
