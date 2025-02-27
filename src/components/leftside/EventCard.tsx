import Image from "next/image";
import React from "react";
import { BsCameraVideo } from "react-icons/bs";

const EventCard = () => {
  return (
    <div className="border-darkBlue bg-lightOrange flex justify-between rounded-md border-l-4 p-4">
      <div>
        <h5 className="text-darkBlue font-base text-xl">First Session</h5>
        <p className="text-sm text-gray-400">9:00 AM</p>
        <div className="mt-2 flex items-center justify-between gap-5">
          <Image
            src="/img/khabanh.jpg"
            alt=""
            width={50}
            height={50}
            className="h-[40px] w-[40px] rounded-full"
          />
          <p className="text-lightBlue text-sm underline">
            View Client Profile
          </p>
        </div>
      </div>
      <div>
        <div className="bg-darkBlue flex h-[40px] w-[40px] items-center justify-center rounded-full">
          <BsCameraVideo className="h-[25px] w-[25px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
