import React from "react";
import { linksRutas } from "../routes/rutas";

export const Menu = () => {
  return (
    <>
      <div className=" w-screen grid grid-cols-8">
        <div className=" col-start-1 col-span-2 flex justify-center items-center">
          <span className=" text-lg font-jost text-emerald-500 font-semibold">
            Cesar Narvaez Dev
          </span>
        </div>
        <div className=" col-start-4 col-span-5 flex justify-center items-center ">
          <div className=" flex flex-row gap-3">
            {linksRutas.map((ruta) => (
              <div className=" p-3 py-5 font-walton " key={ruta.name}>
                {ruta.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
