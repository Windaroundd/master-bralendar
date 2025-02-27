import React from "react";
import { SlArrowLeft } from "react-icons/sl";

const Header = () => {
  return (
    <div className="flex justify-center gap-5">
      <div className="text-lightBlue flex items-center justify-center gap-5">
        <SlArrowLeft className="cursor-pointer font-bold"></SlArrowLeft>
        <h3 className="text-darkBlue font-bold">Apr 2020</h3>
        <SlArrowLeft className="rotate-180 cursor-pointer"></SlArrowLeft>
      </div>
    </div>
  );
};

export default Header;
