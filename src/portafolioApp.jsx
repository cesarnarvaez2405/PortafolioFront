import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";
import { Menu } from "./components/menu";

export const PortafolioApp = () => {
  return (
    <BrowserRouter>
      <Menu />
      <AppRouter />
    </BrowserRouter>
  );
};
