import NoticiasCard from "../Cards/Index";
import Title from "../Title";

const Noticias = [
  {
    img: "/noticias.avif",
    title: "Title :",
    subTitle: "Description Noticia",
  },
  {
    img: "/noticias.avif",
    title: "Title :",
    subTitle: "Description Noticia",
  },
  {
    img: "/noticias.avif",
    title: "Title :",
    subTitle: "Description Noticia",
  },
  {
    img: "/noticias.avif",
    title: "Title :",
    subTitle: "Description Noticia",
  },
  {
    img: "/noticias.avif",
    title: "Title :",
    subTitle: "Description Noticia",
  },
  {
    img: "/noticias.avif",
    title: "Title :",
    subTitle: "Description Noticia",
  },
];

export default function Hero() {
  return (
    <>
      <section className="desing_calendario mt-[120px] relative z-10">
        <Title title="Noticias" />
        <div className="flex flex-wrap gap-[10px]">
          {Noticias.map((info) => {
            return (
              <NoticiasCard
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
