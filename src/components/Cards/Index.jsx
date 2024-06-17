import Image from "next/image";
import "../../CSS/Cards/Index.css";

export default function CalendarioCard({ img, subTitle, style, title }) {
  return (
    <>
      <article className="p-[5px] flex flex-col gap-[5px] border-[1px] border-white/30 rounded-[10px] bg-white/5">
        <picture className="overflow-hidden w-full flex justify-center items-center h-[230px]">
          <Image
            className={`
                ${style} rounded-[10px] object-cover object-center w-full h-full grayscale-[100%] hover:grayscale-0 duration-300
            `}
            src={img}
            alt="calendario"
            width={400}
            height={230}
          />
        </picture>
        <p className="w-full flex items-center justify-center gap-[10px] bg-white/10 p-[10px] rounded-[5px]">
          <span className="italic">{title}</span>
          {subTitle}
        </p>
      </article>
    </>
  );
}
