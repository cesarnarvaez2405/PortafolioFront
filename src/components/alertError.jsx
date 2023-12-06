import React from "react";
import { IconWarning } from "./icons/IconWarning";

export const AlertError = ({ children }) => {
  return (
    <>
      <div className=" flex flex-row pt-1 text-red-500 text-sm font-AltoneNormal">
        <IconWarning />
        <span className=" p-1"> {children} </span>
      </div>
    </>
  );
};
