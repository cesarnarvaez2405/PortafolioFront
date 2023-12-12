import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Title } from "../../../components/title";
import { lenguajes } from "../../../data/lenguajesPrograming";

export const PerfilHv = () => {
  const animatedComponents = makeAnimated();

  return (
    <>
      <div className=" w-full h-full flex flex-col overflow-y-hidden">
        <Title>
          <span className=" font-Inter font-semibold text-2xl">Perfil HV</span>
        </Title>
        <div className=" w-full h-full  flex justify-start">
          <div className="  h-full w-[80%] flex flex-col mt-8">
            <form action="">
              <div className=" grid grid-cols-3 w-full border-b border-slate-500 border-opacity-10 pb-4 ">
                <div className=" flex flex-col font-Inter">
                  <span className=" font-semibold">Tu foto</span>
                  <span className=" text-sm">
                    Puedes cargar tu foto favorita para tu HV
                  </span>
                </div>
                <div className=" flex flex-row justify-center">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ring-1 ring-slate-400 dark:bg-gray-600">
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
                </div>
              </div>
              <div className=" flex flex-col border-b border-slate-500 border-opacity-10 py-4 gap-4 ">
                <div className=" grid grid-cols-3 w-full ">
                  <div className=" font-Inter flex justify-start items-center">
                    <span className=" font-semibold">Titulo portafolio</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      className=" w-full border-opacity-40 border-gray-400 rounded-lg"
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-3 w-full ">
                  <div className=" font-Inter flex justify-start items-start">
                    <span className=" font-semibold">Tu descripcion</span>
                  </div>
                  <div>
                    <textarea
                      name="descripcion"
                      id=""
                      cols="44"
                      rows="10"
                      className=" w-full border-opacity-40 border-gray-400 rounded-lg"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-3 w-full border-b border-slate-500 border-opacity-10 py-4 ">
                <div className=" flex font-Inter">
                  <span className=" font-semibold">Tus skills</span>
                </div>
                <div className=" flex flex-row justify-center">
                  <Select
                    components={animatedComponents}
                    closeMenuOnSelect={false}
                    isMulti
                    options={lenguajes}
                    className=" w-full"
                  />
                </div>
              </div>
              <div className=" py-4">
                <button className="bg-sky-900 px-2 py-1 rounded-md font-Inter text-white hover:bg-sky-800 duration-150 ease-in-out">
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
