import Image from "next/image";
import BtnDefault from "../Botones/Default";
import Title from "../Title";
import "../../CSS/Home/Hero.css";

export default function Hero() {
  return (
    <section className="desing_hero flex items-center mt-[120px] relative z-10 max-lg:flex-col">
      <div className="w-[75%] max-lg:w-full">
        <Title title="Bienvenido a Komunly" />
        <h2 className="w-[700px] max-lg:w-full">
          La nueva red social diseñada para <span>revolucionar</span>
        </h2>
        <p className="mb-[20px]">
          Nuestra plataforma ofrece una amplia gama de funcionalidades, desde la
          publicación de contenido multimedia hasta la realización de
          transferencias entre usuarios y la creación de eventos.
        </p>
        <div className=" flex flex-wrap items-center gap-[10px] w-[130%] max-lg:flex-wrap max-lg:w-full ">
          <BtnDefault
            style=" -bg--blue font-semibold"
            title="Descargar en Android"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-android"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 10l0 6" />
              <path d="M20 10l0 6" />
              <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
              <path d="M8 3l1 2" />
              <path d="M16 3l-1 2" />
              <path d="M9 18l0 3" />
              <path d="M15 18l0 3" />
            </svg>
          </BtnDefault>

          <BtnDefault title="Descargar en IOS">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-apple"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" />
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
          </BtnDefault>

          <BtnDefault
            style="bg-white/0 border-none shadow-none"
            title="Entrar desde el navegador"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-world"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M3.6 9h16.8" />
              <path d="M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18" />
              <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
          </BtnDefault>
        </div>
      </div>

      <picture className="relative w-[80%] flex justify-center items-center max-lg:w-full">
        <video
          className="w-[800px] block max-lg:w-full"
          src="/video.webm"
          autoPlay
          loop
          muted
        ></video>
        <Image
          className="hero__responsive w-full pt-[50px]"
          src="/hero-responsive.png"
          alt="hero responsive"
          width={1030}
          height={1300}
        />
      </picture>
    </section>
  );
}
