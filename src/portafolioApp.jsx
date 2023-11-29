import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";
import { Menu } from "./components/menu";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAuthUtils } from "./hooks/utils/useAuthUtils";

export const PortafolioApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
