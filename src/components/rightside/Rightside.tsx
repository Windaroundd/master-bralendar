import React from "react";
import { Header } from "./Header";
import MonthView from "./MonthView";

const Rightside = () => {
  return (
    <div>
      <div className="p-5">
        <Header />
      </div>

      <div className="mt-5">
        <MonthView />
      </div>
    </div>
  );
};

export default Rightside;
