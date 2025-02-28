"use client";
import React from "react";
import { Header } from "./Header";
import MonthView from "./MonthView";
import { useDateStore, useEventStore } from "@/lib/store";
import EventPopover from "../EventPopover";

const Rightside = () => {
  const { isPopoverOpen, closePopover } = useEventStore();
  const { userSelectedDate } = useDateStore();
  return (
    <div>
      <div className="p-5">
        <Header />
      </div>
      <div className="mt-5">
        <MonthView />
      </div>
      {isPopoverOpen && (
        <EventPopover
          isOpen={isPopoverOpen}
          onClose={closePopover}
          date={userSelectedDate.format("YYYY-MM-DD")}
        />
      )}
    </div>
  );
};

export default Rightside;
