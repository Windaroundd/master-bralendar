import React from "react";
import { Event } from "../event/Event";

const MonthView = () => {
  return (
    <div>
      <div className="grid grid-cols-7">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="text-center font-semibold text-gray-500">
            Mon
          </div>
        ))}
      </div>
      <div className="grid-row-6 mt-5 grid grid-cols-7">
        {Array.from({ length: 42 }).map((_, index) => (
          <div
            key={index}
            className="h-24 w-full border border-dotted text-center font-semibold text-gray-500"
          >
            <div>{index + 1}</div>
            {[5, 7, 12].includes(index + 1) && <Event index={index + 1} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
