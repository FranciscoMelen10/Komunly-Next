import CalendarioCard from "../Cards/Index";
import Title from "../Title";

const Calendario = [
  {
    img: "/calendario-1.avif",
    title: "Enero :",
    subTitle: "Mr Tartaria y Mr Empirico",
  },
  {
    img: "/calendario-2.avif",
    title: "Febrero :",
    subTitle: "Mewing",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Marzo :",
    subTitle: "Meme no disponible",
  },
  {
    img: "/calendario-4.avif",
    title: "Abril :",
    subTitle: "Pedro Pedro Pedro",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Mayo :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Junio :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Julio :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Agosto :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Septiembre :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Octubre :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Noviembre :",
    subTitle: "Meme no disponible",
  },
  {
    style: "width_100",
    img: "/warning.avif",
    title: "Diciembre :",
    subTitle: "Meme no disponible",
  },
];

export default function Hero() {
  return (
    <>
      <section className="desing_calendario mt-[120px] relative z-10">
        <Title title="Calendario" />
        <div className="flex flex-wrap gap-[10px]">
          {Calendario.map((info) => {
            return (
              <CalendarioCard
                img={info.img}
                title={info.title}
                subTitle={info.subTitle}
                style={info.style}
                key={info.subTitle}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
