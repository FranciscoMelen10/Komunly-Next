const Comunidad = [
  { title: "K Komunly", link: "/" },
  { title: "Instagram", link: "/" },
  { title: "WhatsApp", link: "/" },
  { title: "Email", link: "/" },
  { title: "Discord", link: "/" },
];

const Enlaces_utiles = [
  { title: "Términos y condiciones", link: "/" },
  { title: "Comprar códigos", link: "/" },
  { title: "Torneos", link: "/" },
  { title: "Trabaja con nosotros", link: "/" },
];

const Proyectos = [
  { title: "Komunly", link: "/" },
  { title: "Kanticum", link: "/" },
  { title: "Información", link: "/" },
  { title: "Klickum", link: "/" },
];

export default function Footer() {
  return (
    <footer className="mt-[120px] py-[120px] border-t-[1px] border-white/50">
      <div className="flex gap-[20px] max-sm:flex-wrap">
        <ul className="w-[25%] max-sm:w-[45%]">
          <h4>Komunly</h4>
          <p>¡Bienvenido a Komunly, ponte cómodo y disfruta del espectáculo!</p>
        </ul>
        <ul className="w-[25%] max-sm:w-[45%]">
          <h4>Comunidad</h4>
          {Comunidad.map((info) => {
            return (
              <a
                className="flex items-center gap-[10px] hover:underline"
                href={info.link}
                key={info.title}
              >
                {info.title}
                <svg
                  className="w-[20px] block icon SharedFooter_arrowIcon___OxKm"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.256 3.748a.73.73 0 0 0-.534-.21H5.824c-.23.004-.4.076-.525.201-.288.288-.292.696-.018.97a.699.699 0 0 0 .502.206l2.034.014 2.49-.112-1.103.978-5.44 5.44c-.301.3-.301.714-.005 1.01.292.292.705.292 1.006-.009l5.44-5.44.978-1.104-.112 2.491.013 2.033a.7.7 0 0 0 .207.503c.274.274.682.27.97-.018a.715.715 0 0 0 .201-.507V4.278a.728.728 0 0 0-.206-.53Z"
                  ></path>
                </svg>
              </a>
            );
          })}
        </ul>
        <ul className="w-[25%] max-sm:w-[45%]">
          <h4>Enlaces útiles</h4>
          {Enlaces_utiles.map((info) => {
            return (
              <a
                className="flex items-center gap-[10px] hover:underline"
                href={info.link}
                key={info.title}
              >
                {info.title}
                <svg
                  className="w-[20px] block icon SharedFooter_arrowIcon___OxKm"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.256 3.748a.73.73 0 0 0-.534-.21H5.824c-.23.004-.4.076-.525.201-.288.288-.292.696-.018.97a.699.699 0 0 0 .502.206l2.034.014 2.49-.112-1.103.978-5.44 5.44c-.301.3-.301.714-.005 1.01.292.292.705.292 1.006-.009l5.44-5.44.978-1.104-.112 2.491.013 2.033a.7.7 0 0 0 .207.503c.274.274.682.27.97-.018a.715.715 0 0 0 .201-.507V4.278a.728.728 0 0 0-.206-.53Z"
                  ></path>
                </svg>
              </a>
            );
          })}
        </ul>
        <ul className="w-[25%] max-sm:w-[45%]">
          <h4>Proyectos</h4>
          {Proyectos.map((info) => {
            return (
              <a
                className="flex items-center gap-[10px] hover:underline"
                href={info.link}
                key={info.title}
              >
                {info.title}
                <svg
                  className="w-[20px] block icon SharedFooter_arrowIcon___OxKm"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.256 3.748a.73.73 0 0 0-.534-.21H5.824c-.23.004-.4.076-.525.201-.288.288-.292.696-.018.97a.699.699 0 0 0 .502.206l2.034.014 2.49-.112-1.103.978-5.44 5.44c-.301.3-.301.714-.005 1.01.292.292.705.292 1.006-.009l5.44-5.44.978-1.104-.112 2.491.013 2.033a.7.7 0 0 0 .207.503c.274.274.682.27.97-.018a.715.715 0 0 0 .201-.507V4.278a.728.728 0 0 0-.206-.53Z"
                  ></path>
                </svg>
              </a>
            );
          })}
        </ul>
      </div>
      <p className="mt-[80px]">
        Todos los derechos reservados a Kaoticode 2024
      </p>
    </footer>
  );
}
