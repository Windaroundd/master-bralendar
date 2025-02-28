"use client";
import Leftside from "@/components/leftside/Leftside";
import Rightside from "@/components/rightside/Rightside";

import { useCalendarEventStore } from "@/lib/store";
import { useEffect } from "react";

export default function Home() {
  const { fectEvent } = useCalendarEventStore();

  useEffect(() => {
    fectEvent();
  }, []);

  return (
    <div className="container mx-auto mt-10 flex flex-col-reverse flex-wrap justify-between gap-4 md:flex-row md:flex-nowrap">
      <div className="w-full border border-dotted bg-white md:w-1/4">
        <Leftside />
      </div>
      <div className="w-full border border-dotted bg-white md:w-3/4">
        <Rightside />
      </div>
    </div>
  );
}
