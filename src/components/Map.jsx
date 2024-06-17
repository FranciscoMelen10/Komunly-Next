import Title from "./Title";

export default function Map() {
  return (
    <section className="mt-[120px]">
      <Title title="Ubicación" />
      <iframe
        className="max-md:h-[60vw]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d195.76989773281883!2d-1.055887!3d38.2721123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63934d3eaae2e3%3A0xed7a5a10b5314e72!2sKaoticode!5e0!3m2!1ses!2sco!4v1717593768628!5m2!1ses!2sco"
        width="100%"
        height="600"
        loading="lazy"
      ></iframe>
    </section>
  );
}
