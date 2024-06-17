function BtnDefault({ style, href, title, children }) {
  return (
    <a
      className={`${style} desing_btnDefaut flex items-center gap-[10px] py-[10px] px-[15px] rounded-[6px] border-t border-white/20 shadow-[inset_-3px_-3px_10px_#ffffff22] opacity-100 max-sm:w-full max-sm:justify-center
    `}
      href={href}
    >
      {title}
      {children}
    </a>
  );
}

export default BtnDefault;
