import EstadisticaCard from "./Cards/EstadisticaCard";
import Title from "./Title";

export default function Estadistica() {
  return (
    <section className="desing_estadistica mt-[80px]">
      <Title title="Estadisticas" />
      <div className="flex max-xl:flex-wrap">
        <EstadisticaCard title="1900" subTitle="Numero de usuarios" />
        <EstadisticaCard title="1200" subTitle="Kreators" />
        <EstadisticaCard title="300" subTitle="Numero de Verificados" />
        <EstadisticaCard title="Estado" subTitle="Funcionando" />
      </div>
    </section>
  );
}
