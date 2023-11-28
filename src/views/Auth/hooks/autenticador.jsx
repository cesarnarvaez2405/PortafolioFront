import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checking, onLogin, onLogout } from "../../../store/Auth/Autenticacion";
import usuarios from "../../../services/usuarios";

export const Autenticador = () => {
  const { status, user, erroMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const ingresarLogin = async (email, password) => {
    
    dispatch(checking());
    const usuario = {
      email,
      password,
    };

    try {
      const usuarioLogin = await usuarios.login(usuario);
      localStorage.setItem("token", usuarioLogin.token);
      dispatch(
        onLogin({
          email: usuarioLogin.payload.email,
          rol: usuarioLogin.payload.rol,
        })
      );
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
    }
  };

  return { ingresarLogin };
};
