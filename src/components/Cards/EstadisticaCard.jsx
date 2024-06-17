import "../../CSS/Cards/EstadisticaCard.css";

export default function EstadisticaCard({ title, subTitle, style }) {
  return (
    <>
      <article
        className={`${style} text-white w-[50%] border-white/80 px-[30px] max-sm:w-full`}
      >
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </article>
    </>
  );
}
