import React from "react";
import { useForm } from "react-hook-form";
import { IconDev } from "../../../components/icons/IconDev";
// import { useForm } from "../../../components/hooks/useForm";
import { checking } from "../../../store/Auth/Autenticacion";
import { Autenticador } from "../hooks/autenticador";

export const Login = () => {
  const { ingresarLogin } = Autenticador();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
    console.log(event);
    const { email, password } = event;
    ingresarLogin(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="  min-h-screen h-full bg-slate-100 flex justify-center items-center">
          <div className=" w-[30%] h-full bg-sky-900 flex flex-col px-8 py-7 rounded-xl shadow-xl shadow-gray-800">
            <div className=" flex justify-center text-white h">
              <IconDev clases={"h-[20%] w-[20%]"} />
            </div>
            <div className=" p-1 my-2">
              <label className=" font-AltoneNormal text-white">Correo</label>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className=" p-1 my-2">
              <label className=" font-AltoneNormal text-white">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
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
