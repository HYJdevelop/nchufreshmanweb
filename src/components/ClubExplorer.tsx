"use client";

import { useMemo, useState } from "react";
import {
  CLUBS,
  CLUB_CATEGORY_NAMES,
  type ClubCategory,
} from "@/data/clubs";

const CATEGORIES: (ClubCategory | "all")[] = [
  "all",
  "academic",
  "service",
  "social",
  "sports",
  "recreation",
  "自治及綜合",
];

const CATEGORY_LABELS: Record<ClubCategory | "all", string> = {
  all: "全部",
  ...CLUB_CATEGORY_NAMES,
};

export function ClubExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ClubCategory | "all">("all");

  const clubs = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase();
    return CLUBS.filter((club) => {
      const matchesCategory = category === "all" || club.category === category;
      const searchable = `${club.name} ${club.type} ${club.feature}`.toLocaleLowerCase();
      return matchesCategory && (!keyword || searchable.includes(keyword));
    });
  }, [category, query]);

  return (
    <main
      id="clubs"
      className="scroll-mt-24 mx-auto mt-10 max-w-[960px] px-5 pb-16 pt-8 sm:mt-16 sm:px-6 sm:pt-12"
    >
      <div className="mb-6 border-b border-line pb-5">
        <p className="mb-1 font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">
          05 / CAMPUS CLUBS
        </p>
        <h1 className="font-serif-tc text-3xl font-black leading-tight text-pine-deep sm:text-4xl">
          找到你的校園社團
        </h1>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
          從學術交流、志願服務到運動與表演，先用分類或關鍵字找到感興趣的社團。
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-line bg-white p-4 shadow-sm sm:p-5">
        <label htmlFor="clubSearch" className="mb-2 block text-xs font-bold text-pine-deep">
          搜尋社團
        </label>
        <input
          id="clubSearch"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="例如：攝影、服務、舞蹈"
          className="min-h-11 w-full rounded-lg border-2 border-line bg-[#fbfcfa] px-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-pine"
        />
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="社團類型篩選">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`min-h-10 shrink-0 rounded-lg border px-3.5 py-2 text-xs font-bold transition-colors ${
                category === item
                  ? "border-pine bg-pine text-white"
                  : "border-line bg-white text-ink-soft hover:border-pine hover:text-pine-deep"
              }`}
            >
              {CATEGORY_LABELS[item]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-serif-tc text-xl font-black text-pine-deep">社團列表</h2>
        <p className="text-xs text-ink-soft" aria-live="polite">
          共 {clubs.length} 個
        </p>
      </div>

      {clubs.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {clubs.map((club) => (
            <article
              key={club.name}
              className="min-w-0 rounded-xl border border-line bg-white p-4 shadow-[0_5px_0_rgba(15,23,42,0.04)]"
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <h3 className="min-w-0 flex-1 font-serif-tc text-lg font-black leading-tight text-pine-deep">
                  {club.name}
                </h3>
                <span className="shrink-0 rounded-full bg-moss-pale px-2.5 py-1 text-[10px] font-bold text-pine">
                  {CATEGORY_LABELS[club.category]}
                </span>
              </div>
              <p className="mb-1 text-[11px] font-bold text-seal">{club.type}</p>
              <p className="text-[13px] leading-[1.8] text-ink-soft">{club.feature}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-ink-soft">
          找不到符合條件的社團，請換個關鍵字或清除分類。
        </p>
      )}
    </main>
  );
}
