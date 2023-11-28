import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checking } from "../../../store/Auth/Autenticacion";
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
    await usuarios.login(usuario);
  };

  return { ingresarLogin };
};
