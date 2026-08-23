import Image from "next/image";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-[100] flex min-h-[72px] flex-wrap items-center justify-between gap-3 sm:px-8">
      <a href="#top" className="flex min-w-0 items-center gap-3 no-underline">
        <Image
          src="/hyj-nchuguide-mark.svg"
          alt="HYJdevelop 興新手冊標誌"
          width={40}
          height={40}
          priority
          className="shrink-0 rounded-xl shadow-[4px_4px_0_#081225]"
        />
        <span className="flex flex-col leading-tight">
          <b className="font-serif-tc text-base font-black text-white">
            興新手冊
          </b>
          <span className="text-[10.5px] tracking-wide text-white/65">
            新生生活指南 · HYJdevelop
          </span>
        </span>
      </a>
      <nav className="grid w-full grid-cols-3 gap-1.5 sm:flex sm:w-auto sm:gap-2">
        <a
          href="#faq"
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          📖 新生問答
        </a>
        <a
          href="#line"
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          💬 新生 LINE 群
        </a>
        <a
          href="#food"
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          🍜 美食地圖
        </a>
      </nav>
    </header>
  );
}
