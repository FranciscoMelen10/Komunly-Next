"use client";
import React, { useEffect } from "react";
import Input from "./Inputs/Input";
import Title from "./Title";
import "../CSS/Inputs/Input.css";
import "../CSS/Autenticacion/formulario.css";

export default function Formulario() {
  useEffect(() => {
    const modal = document.querySelector(".modal");

    function modalFunction() {
      modal.classList.toggle("modalActive");
    }

    const acciones = document.querySelector("#acciones");
    const iconX = document.querySelector(".iconX");
    acciones.addEventListener("click", modalFunction);
    iconX.addEventListener("click", modalFunction);

    return () => {
      acciones.removeEventListener("click", modalFunction);
      iconX.removeEventListener("click", modalFunction);
    };
  }, []);

  const handleLoginClick = () => {
    const slider = document.querySelector("#slider");
    const form1 = document.querySelector("#form1");
    const form2 = document.querySelector("#form2");

    slider.classList.add("sliderActive");
    form2.classList.add("formActive");
    form1.classList.add("formActiveOpacity");
  };

  const handleRegisterClick = () => {
    const slider = document.querySelector("#slider");
    const form1 = document.querySelector("#form1");
    const form2 = document.querySelector("#form2");

    slider.classList.remove("sliderActive");
    form2.classList.remove("formActive");
    form1.classList.remove("formActiveOpacity");
  };

  return (
    <>
      <section className="overflow-hidden block relative z-10 w-[500px] mx-auto">
        <ul id="slider" className="w-[200%] flex h-full">
          <form
            id="form1"
            className="w-full bg-white/5 p-[24px] rounded-[10px] border-[1px] border-white/20"
            action="/Autentificacion"
          >
            <Title title="Regístrate" />
            <Input type="text" title="Nombre de usuario :" />
            <Input type="email" title="Correo electrónico :" />
            <div className="flex gap-[10px] max-sm:flex-col max-sm:gap-[0px]">
              <Input type="password" title="Contraseña :" />
              <Input type="password" title="Repetir contraseña :" />
            </div>
            <p
              id="login"
              className="cursor-pointer underline text-blue-100 block mb-[20px]"
              onClick={handleLoginClick}
            >
              Ya tienes una cuenta? Inicia sesión
            </p>
            <button className="-bg--blue p-[13px] w-[100%] text-black rounded-[6px] cursor-pointer hover:bg-blue-600 duration-300 font-semibold">
              Registrarme
            </button>
          </form>

          <form
            id="form2"
            className="w-full flex flex-col justify-end bg-white/5 p-[24px] h-[400px] rounded-[10px] border-[1px] border-white/20"
            action="/Autentificacion"
          >
            <Title title="Inicia sesión" />
            <Input type="text" title="Nombre de usuario :" />
            <Input type="password" title="Contraseña :" />
            <p
              id="register"
              className="cursor-pointer underline text-blue-100 block mb-[20px]"
              onClick={handleRegisterClick}
            >
              No tienes una cuenta? Regístrate
            </p>
            <button id="acciones" className="-bg--blue p-[13px] w-full text-black rounded-[6px] cursor-pointer hover:bg-blue-600 duration-300 font-semibold">Iniciar sesión</button>
          </form>
        </ul>
      </section>

      <section className="modal w-full flex gap-[10px] fixed left-0 bg-white/5 rounded-[20px] border-[1px] border-white/30 backdrop-blur-[16px] p-[24px] pt-[100px] justify-center">
        <div className="w-[600px] mx-auto flex flex-col gap-[10px]">
          <h4 className="text-[1.5rem]">Selecciona :</h4>
          <a
            className="p-[20px] bg-white/5 border-[1px] border-white/30 rounded-[6px] flex items-center gap-[10px]"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            Usuarios
          </a>
          <a
            className="p-[20px] bg-white/5 border-[1px] border-white/30 rounded-[6px] flex items-center gap-[10px]"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="icon icon-tabler icons-tabler-outline icon-tabler-report"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
              <path d="M18 14v4h4" />
              <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
              <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M8 11h4" />
              <path d="M8 15h3" />
            </svg>
            Reportes
          </a>
          <a
            className="p-[20px] bg-white/5 border-[1px] border-white/30 rounded-[6px] flex items-center gap-[10px]"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
            Administrador
          </a>
          <article className="iconX absolute top-0 right-0 cursor-pointer w-[80px] h-[80px] flex flex-col justify-center items-center rounded-[15px]  gap-[5px] max-sm:w-[80px] max-sm:h-[80px] p-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </article>
        </div>
      </section>
    </>
  );
}
