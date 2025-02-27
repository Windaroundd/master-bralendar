import React from "react";
import { Button } from "../ui/button";
import EventCard from "./EventCard";

const UpComingEvent = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-darkBlue text-lg font-bold">Upcoming Events</h3>
        <Button className="bg-darkBlue rounded-2xl px-4 py-3 text-white">
          View All
        </Button>
      </div>
      <p className="font-bold text-gray-500">Today, 4 Apr</p>
      <EventCard />
    </div>
  );
};

export default UpComingEvent;
