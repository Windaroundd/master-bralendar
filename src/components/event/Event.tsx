import { CalendarEventType } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Event = ({ event }: { event: CalendarEventType }) => {
  return (
    <div
      className={cn(
        "line-clamp-1 cursor-pointer overflow-hidden rounded-md border-l-4 p-2 text-xs md:text-sm",
        "mb-1 w-full overflow-ellipsis whitespace-nowrap",
        event.event_type === "Appointment" &&
          "border-darkBlue bg-lightOrange text-darkBlue",
        event.event_type === "webinar" &&
          "border-darkBlue bg-darkOrange text-darkBlue",
        // index === 12 && "border-darkOrange bg-lightBlue text-white",
      )}
    >
      {event.video_call_link ? (
        <Link target="_blank" href={event.video_call_link}>
          {event.title}
        </Link>
      ) : (
        <span>{event.title}</span>
      )}
    </div>
  );
};
