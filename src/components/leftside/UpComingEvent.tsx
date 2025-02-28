"use client";
import React from "react";
import { Button } from "../ui/button";
import EventCard from "./EventCard";
import { useCalendarEventStore, useDateStore } from "@/lib/store";
import dayjs from "dayjs";

const UpComingEvent = () => {
  const { events } = useCalendarEventStore();

  const { userSelectedDate } = useDateStore();
  const filteredEvents = events.filter((event) => {
    return (
      dayjs(event.date).format("YYYY-MM-DD") ===
      userSelectedDate.format("YYYY-MM-DD")
    );
  });

  const isToday =
    userSelectedDate.format("DD-MM-YY") === dayjs().format("DD-MM-YY");

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-darkBlue">Upcoming Events</h3>
        <Button className="rounded-2xl bg-darkBlue px-4 py-3 text-white">
          View All
        </Button>
      </div>
      {filteredEvents?.length > 0 ? (
        <>
          <p className="font-bold text-gray-500">{`${isToday ? "Today ," : ""} ${userSelectedDate.format("DD MMM")}`}</p>
          <div className="mt-4 max-h-[40vh] overflow-y-scroll">
            {filteredEvents?.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>{" "}
        </>
      ) : (
        <div className="text-center text-gray-500">No events</div>
      )}
    </div>
  );
};

export default UpComingEvent;
