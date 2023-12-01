import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../views/home/index";
import { Proyectos } from "../views/Proyectos/index";
import { Contactar } from "../views/Contactar/index";
import { Login } from "../views/Auth/Login/index";
import { Dashboard } from "../views/dashboard";
import { useAuthUtils } from "../hooks/utils/useAuthUtils";

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthUtils();
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>cargando...</h3>;
  }

  return (
    <>
      <Routes>
        {status === "no autenticado" ? (
          <>
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </>
  );
};
