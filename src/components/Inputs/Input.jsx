export default function Input({ title, style, type, name, placeholder }) {
  return (
    <>
      <label className="autenticacion relative block mb-[20px]">
        <p className="opacity-100">{title}</p>
        <input
          className={`
            ${style}
            py-[10px] px-[15px] outline-none rounded-[6px] border-[1px] border-white/20 bg-white/5 w-full block duration-300 transition-all`}
          type={type}
          required
          name={name}
          minLength="3"
          maxLength="60"
          placeholder={placeholder}
        />

        <span className="iconCheck absolute top-[67%] translate-y-[-50%] right-[15px] text-green-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="icon icon-tabler icons-tabler-outline icon-tabler-check"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </span>

        <span className="iconInvalid absolute top-[67%] translate-y-[-50%] right-[15px] text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </span>
      </label>
    </>
  );
}
