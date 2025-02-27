import { cn } from "@/lib/utils";
import React from "react";

export const Event = ({ index }: { index: number }) => {
  console.log("index: ", index);
  return (
    <div
      className={cn(
        "line-clamp-1 cursor-pointer overflow-hidden rounded-md border-l-4 p-2 text-sm",
        "overflow-ellipsis whitespace-nowrap",
        index === 5 && "border-darkBlue bg-lightOrange text-darkBlue",
        index === 7 && "border-darkBlue bg-darkOrange text-darkBlue",
        index === 12 && "border-darkOrange bg-lightBlue text-white",
      )}
    >
      Hello
    </div>
  );
};
