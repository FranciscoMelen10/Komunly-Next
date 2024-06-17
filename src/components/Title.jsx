function Title({ style, title, subTitle }) {
  return (
    <p className={`${style} mb-[20px] flex items-center gap-[10px]`}>
      <span className="w-[12px] h-[12px] block rounded-[50%] -bg--blue text-white"></span>
      {title}
      <span className="italic opacity-100">{subTitle}</span>
    </p>
  );
}

export default Title;
