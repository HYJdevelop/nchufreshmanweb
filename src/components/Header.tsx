"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-[100] flex min-h-[72px] flex-wrap items-center justify-between gap-3 sm:px-8">
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
        <Link href="/" className="flex min-w-0 items-center gap-3 no-underline">
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
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "關閉網站選單" : "開啟網站選單"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-xl leading-none text-white transition-colors hover:border-white/60 hover:bg-white/10 sm:hidden"
        >
          {menuOpen ? (
            <span aria-hidden="true" className="text-2xl font-light leading-none">×</span>
          ) : (
            <span aria-hidden="true" className="flex w-5 flex-col gap-1">
              <span className="h-0.5 w-full rounded-full bg-current" />
              <span className="h-0.5 w-full rounded-full bg-current" />
              <span className="h-0.5 w-full rounded-full bg-current" />
            </span>
          )}
        </button>
      </div>
      <nav
        id="site-navigation"
        className={`mobile-site-navigation absolute top-full flex w-full flex-col gap-1.5 transition-[opacity,transform] duration-200 ease-out sm:pointer-events-auto sm:static sm:w-auto sm:flex-row sm:gap-2 sm:opacity-100 sm:transform-none ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <Link
          href="/#resources"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-10 items-center justify-center rounded-lg border border-[#facc15]/60 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-[#facc15] no-underline transition-colors hover:bg-[#facc15]/10 sm:px-3.5 sm:text-[12px]"
        >
          ✦ 新生任務
        </Link>
        <Link
          href="/#faq"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          📖 新生問答
        </Link>
        <Link
          href="/calendar/"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          📅 行事曆
        </Link>
        <Link
          href="/line/"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          💬 新生 LINE 群
        </Link>
        <Link
          href="/food/"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          🍜 美食地圖
        </Link>
        <Link
          href="/clubs/"
          onClick={() => setMenuOpen(false)}
          className="flex min-h-10 items-center justify-center rounded-lg border border-white/20 px-1.5 py-2 text-center text-[11px] font-bold leading-tight text-white/80 no-underline transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:px-3.5 sm:text-[12px]"
        >
          🎭 社團探索
        </Link>
      </nav>
    </header>
  );
}
