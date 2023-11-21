import React from "react";
import { linksRutas } from "../routes/rutas";
import { IconDev } from "./icons/IconDev";
import { IconLogin } from "./icons/IconLogin";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export const Menu = () => {
  return (
    <>
      <div className=" w-screen grid grid-cols-8  border-b-2">
        <div className=" col-start-1 col-span-2 flex justify-center items-center">
          <span className=" text-xl font-AltoneBold text-sky-900 pr-4">
            Cesar Narvaez Dev
          </span>
          <IconDev />
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
          <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Iniciar sección"
            to='/login'
          >
            <IconLogin />
          </Link>
          <Tooltip id="my-tooltip" />
        </div>
      </div>
    </>
  );
};
