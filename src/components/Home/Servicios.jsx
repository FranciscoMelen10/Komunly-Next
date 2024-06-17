import Image from "next/image";
import ServiciosCard from "../Cards/ServiciosCard";
import Title from "../Title";
import '../../CSS/Home/Servicios.css'

const Servicios = [
  {
    title: "Publica contenido multimedia",
    description:
      "Comparte imagenes y videos de la mejor calidad con tu comunidad. Conviertete en un Kreator y accede a eventos exclusivos por el mundo de parte de Komunly.",
    blur1: "",
    blur2: "",
    style: "",
  },
  {
    title: "Interactúa respetuosamente",
    description:
      "Aprovecha las funcionalidades que ofrece Komunly para interactuar con los demás usuarios. Es importante que respetes las normas de la comunidad para evitar ser baneado",
    blur1: "-bg--green",
    blur2: "-bg--yellow",
    style: "z-10",
  },
  {
    title: "!Acción, reacción¡",
    description:
      "En Komunly, las buenas acciones tienen recompensa. Crear contenido entretenido o de valor, ya sea en video, imagenes o incluso en comentarios ¡tiene premio!",
    blur1: "",
    blur2: "",
    style: "z-20",
  },
  {
    title: "Monetiza tu cuenta",
    description:
      "Te presentamos los komuns! Una moneda digital que puedes utiizar dentro del universo Komunly para enviar o recibir con otros usuarios y mucho más...",
    blur1: "-bg--green",
    blur2: "-bg--yellow",
    style: "z-30",
  },
];

export default function Servicio() {
  return (
    <section className="mt-[120px] flex ">
      <div className="relative z-10 flex flex-col gap-[20px] w-[50%] max-xl:w-full">
        <Title title="Servicios" />
        {Servicios.map((info) => {
          return (
            <ServiciosCard
              blur1={info.blur1}
              blur2={info.blur2}
              style={info.style}
              title={info.title}
              description={info.description}
              key={info.title}
            />
          );
        })}
      </div>
      <picture className="sticky top-[500px] w-[50%]  h-full flex justify-center items-center max-xl:hidden">
        <Image
          className="glow w-[50%] max-xl:none"
          src="/glow-blue.webp"
          alt="glow"
          width={"200"}
          height={"200"}
        />
        <Image
          className="absolute bottom-[45%] w-[40%] max-xl:none"
          src="/linear-anm.webp"
          alt="glow"
          width={"200"}
          height={"200"}
        />
        <Image
          className="linear__anm--2 absolute top-[45%] w-[15%] -z-10 max-xl:none"
          src="/linear-anm.webp"
          alt="glow"
          width={"200"}
          height={"200"}
        />
        <Image
          className="rotate-[70deg] absolute top-0 left-[60%] w-[15%] -z-10 max-xl:none"
          src="/linear-anm.webp"
          alt="glow"
          width={"200"}
          height={"200"}
        />
      </picture>
    </section>
  );
}
