import React from "react";
import Header from "./Header";
import MiniCalendar from "./Minicalendar";
import UpComingEvent from "./UpComingEvent";

const Leftside = () => {
  return (
    <div>
      <div className="border border-dotted p-5 pt-10">
        <Header />
        <div className="mt-4">
          <MiniCalendar />
        </div>
      </div>
      <div className="p-5">
        <UpComingEvent />
      </div>
    </div>
  );
};

export default Leftside;
