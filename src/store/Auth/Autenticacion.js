import { createSlice } from "@reduxjs/toolkit";

export const autenticacion = createSlice({
  name: "autenticacion",
  initialState: {
    status: "check", // Esta revisando si esta autenticado o no
    user: {}, // Informacion del usuario
    errorMessage: undefined,
  },
  reducers: {
    checking: (state) => {
      (state.status = "checking"), (state.user = {});
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      (state.status = "autenticado"),
        (state.user = payload),
        (state.errorMessage = undefined);
    },
  },
});

export const { checking, onLogin } = autenticacion.actions;
