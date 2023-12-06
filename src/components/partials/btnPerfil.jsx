import React, { useState } from "react";
import { useAuthUtils } from "../../hooks/utils/useAuthUtils";

export const BtnPerfil = () => {
  const [muestraSubMenu, setSubMenu] = useState(false);

  const { cerrarSeccion } = useAuthUtils();

  return (
    <>
      <div className=" relative cursor-pointer">
        <div
          className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ring-1 ring-slate-400 dark:bg-gray-600"
          onClick={() => {
            muestraSubMenu ? setSubMenu(false) : setSubMenu(true);
          }}
        >
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>

      {muestraSubMenu && (
        <div className="absolute top-[7%] w-[8%] h-[13%] rounded-xl bg-slate-200 border-1 shadow-md">
          <div className=" flex flex-col justify-center items-start py-2 px-3 w-full">
            <div className=" flex flex-row p-1 my-2 border-b border-black border-opacity-5 w-full hover:bg-slate-300 rounded-sm cursor-pointer">
              <span className=" font-AltoneNormal">Mi perfil</span>
            </div>
            <div
              className=" flex flex-row p-1  my-2 border-b border-black border-opacity-5 w-full hover:bg-slate-300 rounded-sm cursor-pointer"
              onClick={cerrarSeccion()}
            >
              <span className="font-AltoneNormal">Salir</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
