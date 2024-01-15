import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/appRouter";
import { Menu } from "./components/menu";
import { Provider } from "react-redux";
import { store } from "./store";
import { BtnLogin } from "./components/partials/btnLogin";
import { IconLoading } from "./components/icons/IconLoading";
import { BtnPerfil } from "./components/partials/btnPerfil";

export const PortafolioApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu onLoading={() => <IconLoading />} onLogin={() => <BtnLogin />} onPerfil={() => <BtnPerfil/>} />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
