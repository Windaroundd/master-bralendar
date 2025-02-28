import { CalendarEventType } from "@/data/data";
import { cn } from "@/lib/utils";
import React from "react";

export const Event = ({ event }: { event: CalendarEventType }) => {
  return (
    <div
      className={cn(
        "line-clamp-1 cursor-pointer overflow-hidden rounded-md border-l-4 p-2 text-sm",
        "mb-1 w-full overflow-ellipsis whitespace-nowrap",
        event.event_type === "Appointment" &&
          "border-darkBlue bg-lightOrange text-darkBlue",
        event.event_type === "webinar" &&
          "border-darkBlue bg-darkOrange text-darkBlue",
        // index === 12 && "border-darkOrange bg-lightBlue text-white",
      )}
    >
      {event.title}
    </div>
  );
};
