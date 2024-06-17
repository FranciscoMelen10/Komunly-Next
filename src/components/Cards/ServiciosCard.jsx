import '../../CSS/Cards/ServiciosCard.css'

export default function ServiciosCard({style, title, description, blur1, blur2}) {
  return (
    <article
      className={`
    ${style} desing_servicios
    sticky overflow-hidden top-[100px] p-[40px] flex w-full border-t border-white/30 bg-white/5 shadow-[inset_-10px_-10px_30px_#ffffff26] backdrop-blur-[16px] rounded-[20px] max-sm:p-[20px] 
`}
    >
      <div className="relative z-10 flex gap-[20px] max-sm:flex-col">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="icon icon-tabler icons-tabler-outline icon-tabler-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <div className="w-[80%]">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div
        className={`
        ${blur1}
        absolute block w-[200px] h-[200px] bg-[var(--yellow)] blur-[100px] -z-10 opacity-50 left-[-10%] top-[-50%]
    `}
      ></div>
      <div
        className={`
        ${blur2}
        absolute block w-[200px] h-[200px] bg-[var(--blue)] blur-[100px] -z-10 opacity-50 bottom-[-10%] right-[-10%]
    `}
      ></div>
    </article>
  );
}
