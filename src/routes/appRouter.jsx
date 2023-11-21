import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../views/home/index";
import { Proyectos } from "../views/Proyectos/index";
import { Contactar } from "../views/Contactar/index";
import { Login } from "../views/Auth/Login/index";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
