import React from "react";
import { useForm } from "react-hook-form";
import { IconDev } from "../../../components/icons/IconDev";
import { checking } from "../../../store/Auth/Autenticacion";
import { Autenticador } from "../hooks/autenticador";
import { AlertError } from "../../../components/alertError";

export const Login = () => {
  const { ingresarLogin } = Autenticador();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
    const { email, password } = event;
    ingresarLogin(email, password);
  };

  return (
    <>
      <form handleSubmit={handleSubmit(onSubmit)}>
        <div className=" min-h-screen pb-20 bg-slate-100 flex justify-center items-center">
          <div className=" w-[30%] h-full bg-sky-900 flex flex-col px-8 py-7 rounded-xl shadow-xl shadow-gray-800">
            <div className=" flex flex-col justify-center text-white items-center">
              <IconDev clases={"h-[15%] w-[15%]"} />
              <h1>Inicia seccion</h1>
            </div>
            <div className=" my-2">
              <label className=" font-AltoneNormal text-white">Correo</label>
              <input
                type="email"
                name="email"
                className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm duration-150 ease-in-out focus:ring-1 ${
                  errors.email &&
                  "border-red-500 outline-none border-2 ring-red-500"
                }`}
                placeholder="you@example.com"
                {...register("email", { required: "El email es obligatorio" })}
              />
              {errors.email && (
                <AlertError> {errors.email.message} </AlertError>
              )}
            </div>
            <div className="my-2">
              <label className=" font-AltoneNormal text-white">Password</label>
              <input
                type="password"
                name="password"
                className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                  errors.email &&
                  "border-red-500 outline-none border-2 ring-red-500"
                }`}
                {...register("password", {
                  required: "La password es obligatoria",
                })}
              />
              {errors.password && (
                <AlertError> {errors.password.message} </AlertError>
              )}
            </div>
            <div className=" flex justify-end pt-3">
              <button
                type="submit"
                className=" bg-white py-1.5 px-5 rounded-md font-AltoneNormal hover:bg-gray-200 ease-in-out duration-150 hover:scale-105 "
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
