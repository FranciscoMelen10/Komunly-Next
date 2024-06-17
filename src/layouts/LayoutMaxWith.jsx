import "../CSS/Layout/LayoutMaxWith.css";

export default function LayoutMaxWith({ style, children }) {
  return (
    <main className={`${style} max-w-[1280px] mx-auto px-[20px]`}>
      {children}
      <div className="absolute top-[-10%] left-[-10%] blur-[100px] opacity-50 rounded-full block w-[600px] h-[600px] -bg--purple max-sm:w-[200px] max-sm:h-[200px]"></div>

      <div className="absolute top-[15%] right-[10%] blur-[100px] opacity-50 rounded-full block w-[600px] h-[600px] -bg--purple max-sm:w-[200px] max-sm:h-[200px]"></div>
    </main>
  );
}
