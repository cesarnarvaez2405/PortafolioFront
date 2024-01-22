import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import makeAnimated from "react-select/animated";
import { Title } from "../../../components/title";
import { lenguajes } from "../../../data/lenguajesPrograming";
import { useDocsUtils } from "../../../hooks/utils/useDocsUtils";
import { AlertError } from "../../../components/alertError";
import { usePerfil } from "../hooks/usePerfil";
import perfilService from "../../../services/perfil";

export const PerfilHv = () => {
  const { guardarPerfil } = usePerfil();
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [tienePerfil, setTienePerfil] = useState(false);

  const onSubmit = async (event) => {
    if (tienePerfil) {
      console.log("tienePerfil");
    } else {
      await guardarPerfil(event);
      reset();
    }
  };

  useEffect(() => {
    perfilService.getPerfil().then((dato) => {
      if (dato && dato.length > 0) {
        setValue("titulo", dato[0].titulo);
        setValue("descripcion", dato[0].descripcion);
        setTienePerfil(true);
        const skills = lenguajes.filter((lenguaje) =>
          dato[0].skills.some((skill) => skill.skillId === lenguaje.value)
        );
        setValue("skill", skills);
      }
    });
  }, [setValue]);

  return (
    <>
      <div className=" w-full h-full flex flex-col overflow-y-hidden">
        <Title>
          <span className=" font-Inter font-semibold text-2xl">Perfil HV</span>
        </Title>
        <div className=" w-full h-full  flex justify-start">
          <div className="  h-full w-[80%] flex flex-col mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-3 w-full border-b border-slate-500 border-opacity-10 pb-4 ">
                <div className=" flex flex-col font-Inter">
                  <span className=" font-semibold">Tu foto</span>
                  <span className=" text-sm">
                    Puedes cargar tu foto favorita para tu HV
                  </span>
                </div>
                <div className=" col-span-2 flex flex-row justify-start gap-3">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ring-1 ring-slate-400 dark:bg-gray-600">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className=" pl-3">
                    <input
                      type="file"
                      name="imagenPerfil"
                      id="file-input"
                      // onChange={(event) => enviarImagen(event.target.files[0])}
                      {...register("imagenPerfil", {
                        required: "La imagen es obligatoria",
                      })}
                      className="block w-[100%] border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0 file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                    />
                  </div>
                  {errors.imagenPerfil && (
                    <AlertError> {errors.imagenPerfil.message} </AlertError>
                  )}
                </div>
              </div>
              <div className=" flex flex-col border-b border-slate-500 border-opacity-10 py-4 gap-4 ">
                <div className=" grid grid-cols-3 w-full ">
                  <div className=" font-Inter flex justify-start items-center">
                    <span className=" font-semibold">Titulo portafolio</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="titulo"
                      className={` w-full border-opacity-40 border-gray-400 rounded-lg ${
                        errors.titulo && " border-red-500"
                      }`}
                      {...register("titulo", {
                        required: "el titulo es obligatorio",
                      })}
                    />
                    {errors.titulo && (
                      <AlertError> {errors.titulo.message} </AlertError>
                    )}
                  </div>
                </div>
                <div className=" grid grid-cols-3 w-full ">
                  <div className=" font-Inter flex justify-start items-start">
                    <span className=" font-semibold">Tu descripcion</span>
                  </div>
                  <div>
                    <textarea
                      name="descripcion"
                      id=""
                      cols="44"
                      rows="10"
                      className={` w-full border-opacity-40 border-gray-400 rounded-lg ${
                        errors.descripcion && " border-red-500"
                      }`}
                      {...register("descripcion", {
                        required: "la descripcion es obligatorio",
                      })}
                    ></textarea>
                    {errors.descripcion && (
                      <AlertError> {errors.descripcion.message} </AlertError>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={` grid grid-cols-3 gap-3 w-full border-b border-slate-500 border-opacity-10 py-4 ${
                  errors.skill && " border-red-500"
                }`}
              >
                <div className=" flex font-Inter">
                  <span className=" font-semibold">Tus skills</span>
                </div>
                <div className=" flex flex-row justify-center">
                  <Controller
                    name="skill"
                    control={control}
                    rules={{ required: "las skills son obligatorias" }}
                    render={({ field }) => (
                      <Select
                        components={animatedComponents}
                        closeMenuOnSelect={false}
                        isMulti
                        options={lenguajes}
                        className=" w-full"
                        {...field}
                      />
                    )}
                  />
                </div>
                {errors.skill && (
                  <AlertError> {errors.skill.message} </AlertError>
                )}
              </div>
              <div className=" py-4">
                <button className="bg-sky-900 px-2 py-1 rounded-md font-Inter text-white hover:bg-sky-800 duration-150 ease-in-out">
                  {tienePerfil ? "Actualizar" : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
