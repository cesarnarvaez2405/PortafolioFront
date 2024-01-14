import React, { useState } from "react";
import { IconPerfil } from "./Icons/IconPerfil";
import { IconProyectos } from "./Icons/IconProyectos";
import { IconTrayectoria } from "./Icons/IconTrayectoria";
import { PerfilHv } from "./sections/perfilHv";
import { Proyectos } from "./sections/proyectos";
import { Trayectoria } from "./sections/trayectoria";

export const Dashboard = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className='w-full h-screen bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar'>
        <div className='w-64 h-full px-4'>
          <div className='px-2 pt-4 pb-8 border-r h-full border-gray-300'>
            <ul className='space-y-2 font-Inter'>
              <li>
                <a
                  onClick={() => setTab(0)}
                  className={` bg-opacity-30  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer ${
                    tab === 0 ? "bg-gray-500" : ""
                  } `}
                >
                  <span className='flex items-center space-x-2'>
                    <IconPerfil />
                    <span>Perfil HV</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTab(1)}
                  className={` bg-opacity-30 flex items-center py-1.5 px-4 rounded space-x-2 cursor-pointer   ${
                    tab === 1 ? "bg-gray-500" : ""
                  } `}
                >
                  <IconProyectos />
                  <span>Proyectos</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setTab(2)}
                  className={` bg-opacity-30 flex items-center  py-1.5 px-4 rounded space-x-2 cursor-pointer   ${
                    tab === 2 ? "bg-gray-500" : ""
                  } `}
                >
                  <IconTrayectoria />
                  <span>Trayectoria</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex-1 px-2'>
          {tab === 0 && <PerfilHv></PerfilHv>}
          {tab === 1 && <Proyectos></Proyectos>}
          {tab === 2 && <Trayectoria></Trayectoria>}
        </div>
      </div>
    </>
  );
};
