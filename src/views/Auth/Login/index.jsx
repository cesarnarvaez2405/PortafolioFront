import React from "react";
import background from "./Style/bg-login.svg";
import { IconDev } from "../../../components/icons/IconDev";

export const Login = () => {
  return (
    <>
      <div className="  min-h-screen h-full bg-slate-100 flex justify-center items-center">
        <div className=" w-[30%] h-full bg-sky-900 flex flex-col px-8 py-7 rounded-xl shadow-xl shadow-gray-800">
          <div className=" flex justify-center text-white h">
            <IconDev clases={'h-[20%] w-[20%]'}/>
            
          </div>
          <div className=" p-1 my-2">
            <label className=" font-AltoneNormal text-white">Correo</label>
            <input
              type="email"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </div>
          <div className=" p-1 my-2">
            <label className=" font-AltoneNormal text-white">Password</label>
            <input
              type="password"
              name="password"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div className=" flex justify-end pt-3">
            <button className=" bg-white py-1.5 px-5 rounded-md font-AltoneNormal hover:bg-gray-200 ease-in-out duration-150 hover:scale-105 ">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
