"use client";
import React, { useEffect } from "react";
import BtnDefault from "./Botones/Default";
import "../CSS/Header.css";

function Header() {
  useEffect(() => {
    const iconMn = document.querySelector("#iconMn");
    const MnResponsive = document.querySelector("#MnResponsive");

    const toggleMenu = () => {
      MnResponsive.classList.toggle("hidden");
    };

    iconMn.addEventListener("click", toggleMenu);

    // Cleanup event listener on component unmount
    return () => {
      iconMn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center backdrop-blur-[16px] border-b-[1px] border-white/30 h-[70px]">
        <nav className="flex justify-between w-full items-center py-[10px] max-w-[1280px] mx-auto px-[20px]">
          <ul>
            <li>
              <a className="text-[24px] font-bold opacity-100" href="/">
                Komunly
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-[20px]">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/Calendario">Calendario</a>
            </li>
            <li>
              <a href="/Noticias">Noticias</a>
            </li>
            <li>
              <BtnDefault
                href="/Autentificacion"
                style="-bg--blue block font-semibold"
                title="Autenticación"
              />
            </li>
            <li
              id="iconMn"
              className="flex flex-col gap-[5px] cursor-pointer opacity-80"
            >
              <span className="block w-[20px] h-[1px] bg-white"></span>
              <span className="block w-[20px] h-[1px] bg-white"></span>
              <span className="block w-[20px] h-[1px] bg-white"></span>
            </li>
          </ul>
        </nav>
      </header>

      <section
        id="MnResponsive"
        className="fixed w-full top-[70px] z-50 backdrop-blur-[16px] p-[20px] border-b-[1px] border-white/30 hidden"
      >
        <ul className="flex flex-col gap-[20px]">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Calendario">Calendario</a>
          </li>
          <li>
            <a href="/Noticias">Noticias</a>
          </li>
          <li>
            <BtnDefault
              href="/Autentificacion"
              style="-bg--blue justify-center"
              title="Autenticación"
            />
          </li>
        </ul>
      </section>
    </>
  );
}

export default Header;
