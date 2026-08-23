"use client";

import { useMemo, useState } from "react";
import type { Board } from "@/lib/types";
import { BOARD_NAMES } from "@/lib/types";
import { FAQ_DATA } from "@/data/faq";
import { SearchBar } from "./SearchBar";
import { CategoryTabs } from "./CategoryTabs";
import { FaqCard } from "./FaqCard";

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [board, setBoard] = useState<Board | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const items = useMemo(() => {
    const normalizedQuery = query.normalize("NFKC").toLocaleLowerCase().trim();
    const terms = normalizedQuery.split(/\s+/).filter(Boolean);

    return FAQ_DATA.filter((item) => board === "all" || item.board === board)
      .map((item) => {
        const searchable = [
          item.q,
          item.a,
          item.keywords.join(" "),
          BOARD_NAMES[item.board],
        ]
          .join(" ")
          .normalize("NFKC")
          .toLocaleLowerCase();

        const matches = terms.every((term) => searchable.includes(term));
        if (!matches) return null;

        const title = item.q.normalize("NFKC").toLocaleLowerCase();
        const keywords = item.keywords
          .join(" ")
          .normalize("NFKC")
          .toLocaleLowerCase();
        const score = terms.reduce(
          (total, term) =>
            total + (title.includes(term) ? 3 : 0) + (keywords.includes(term) ? 2 : 0),
          0
        );

        return { item, score };
      })
      .filter((result): result is { item: (typeof FAQ_DATA)[number]; score: number } => result !== null)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [query, board]);

  const pageCount = Math.ceil(items.length / pageSize);
  const visibleItems = items.slice((page - 1) * pageSize, page * pageSize);
  const scrollToFaq = () => {
    const faq = document.getElementById("faq");
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!faq) return;

    const headerOffset = (header?.offsetHeight ?? 0) + 12;
    const top = faq.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };
  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(1);
    setOpenId(null);
  };
  const updateBoard = (value: Board | "all") => {
    setBoard(value);
    setPage(1);
    setOpenId(null);
  };
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    setOpenId(null);
    requestAnimationFrame(scrollToFaq);
  };

  return (
    <>
      <section className="search-panel mx-4 max-w-[960px] rounded-2xl p-4 sm:mx-auto sm:p-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-[11px] font-bold tracking-[0.16em] text-seal">
              FIND YOUR ANSWER
            </p>
            <h2 className="font-serif-tc text-xl font-black text-pine-deep sm:text-2xl">
              你想先了解什麼？
            </h2>
          </div>
          <span className="hidden text-right text-xs text-ink-soft sm:block">
            輸入兩個詞也可以<br />例如：宿舍 申請
          </span>
        </div>
        <SearchBar value={query} onChange={updateQuery} onSearch={scrollToFaq} />
        <div className="mt-4 border-t border-line pt-4">
          <CategoryTabs current={board} onChange={updateBoard} />
        </div>
      </section>

      <main id="faq" className="scroll-mt-24 mx-auto max-w-[960px] px-5 pb-5 pt-10 sm:px-6 sm:pt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">
              01 / FAQ LIBRARY
            </p>
            <h2 className="font-serif-tc text-2xl font-black text-pine-deep sm:text-3xl">
              新生必看問答
            </h2>
          </div>
          <p className="text-right text-[12px] text-ink-soft" aria-live="polite">
            <b className="text-lg text-pine-deep">{items.length}</b> 篇結果
            {query.trim() && <span className="block">搜尋「{query.trim()}」</span>}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="py-12 text-center text-[13.5px] text-ink-soft">
            <span className="mb-3 block text-3xl">⌕</span>
            找不到相關問答，請換個關鍵字或清除分類篩選再試試。
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {visibleItems.map((item, i) => (
              <FaqCard
                key={item.id}
                item={item}
                index={(page - 1) * pageSize + i}
                expanded={openId === item.id}
                onSearchKeyword={updateQuery}
                onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
              />
            ))}
          </div>
        )}

        {pageCount > 1 && (
          <nav className="mt-6 flex items-center justify-center gap-2" aria-label="FAQ 分頁">
            <button
              type="button"
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
              className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-bold text-pine transition-colors hover:border-pine disabled:cursor-not-allowed disabled:opacity-40"
            >
              上一頁
            </button>
            <span className="px-2 text-xs text-ink-soft" aria-live="polite">
              第 {page} / {pageCount} 頁
            </span>
            <button
              type="button"
              onClick={() => changePage(page + 1)}
              disabled={page === pageCount}
              className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-bold text-pine transition-colors hover:border-pine disabled:cursor-not-allowed disabled:opacity-40"
            >
              下一頁
            </button>
          </nav>
        )}
      </main>

    </>
  );
}
