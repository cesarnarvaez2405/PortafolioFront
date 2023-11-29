import React, { useEffect, useState } from "react";
import { linksRutas } from "../routes/rutas";
import { IconDev } from "./icons/IconDev";
import { IconLogin } from "./icons/IconLogin";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useAuthUtils } from "../hooks/utils/useAuthUtils";

export const Menu = (props) => {
  const { status } = useAuthUtils();

  return (
    <>
      <div className=" w-screen grid grid-cols-8  border-b-2">
        <div className=" col-start-1 col-span-2 flex justify-center items-center text-sky-900">
          <span className=" text-xl font-AltoneBold text-sky-900 pr-4">
            Cesar Narvaez Dev
          </span>
          <IconDev clases={"h-6 w-6"} />
        </div>
        <div className=" col-start-4 col-span-4 flex justify-end items-center ">
          <div className=" flex flex-row gap-3 ">
            {linksRutas.map((ruta) => (
              <Link
                to={ruta.path}
                className=" ease-in-out duration-150 cursor-pointer p-3 py-5 font-AltoneNormal rounded-md hover:text-sky-900"
                key={ruta.name}
              >
                <h4>{ruta.title}</h4>
              </Link>
            ))}
          </div>
        </div>
        <div className=" font-AltoneBold col-start-8 flex justify-end pr-10 items-center cursor-pointer">
          {status === "checking" && props.onLoading()}
          {status === "no autenticado" && props.onLogin()}
          {status === "autenticado" && props.onPerfil()}
        </div>
      </div>
    </>
  );
};
