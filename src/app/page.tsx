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
    <div className="container mx-auto mt-10 flex justify-between gap-4">
      <div className="w-1/4 border border-dotted bg-white">
        <Leftside />
      </div>
      <div className="w-3/4 border border-dotted bg-white">
        <Rightside />
      </div>
    </div>
  );
}
