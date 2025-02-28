import { CalendarEventType } from "@/data/data";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCameraVideo } from "react-icons/bs";

const EventCard = ({ event }: { event: CalendarEventType }) => {
  const startTime = dayjs(event.time_start);
  const timeFormatted = startTime.format("h:mm A");
  const offset = startTime.format("Z"); // => "+08:00"
  const gmtFormatted = `GMT${offset.startsWith("-") ? "" : ""}${offset.replace(":00", "")}`;
  return (
    <div
      className={cn(
        "mb-3 flex justify-between rounded-md border-l-4 border-darkBlue p-4",
        event.event_type === "Appointment" ? "bg-lightOrange" : "bg-darkOrange",
      )}
    >
      <div>
        <h5 className="font-base text-lg text-darkBlue">{event?.title}</h5>
        <p className="text-sm text-gray-400">{`${timeFormatted} ${gmtFormatted}`}</p>
        {event.event_type === "Appointment" && (
          <div className="mt-2 flex items-center justify-start gap-5">
            <Image
              src="/img/khabanh.jpg"
              alt=""
              width={50}
              height={50}
              className="h-[40px] w-[40px] rounded-full"
            />
            {event.client?.profile_url && (
              <Link
                href={event.client.profile_url}
                className="text-sm text-lightBlue underline"
              >
                View Client Profile
              </Link>
            )}
          </div>
        )}
      </div>
      <div>
        {event.event_type === "Appointment" && (
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-darkBlue">
            <BsCameraVideo className="h-[25px] w-[25px] text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
