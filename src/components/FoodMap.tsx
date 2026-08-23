"use client";

import { useMemo, useState } from "react";
import type { FoodPeriod } from "@/lib/types";
import { FOOD_DATA } from "@/data/food";

const FOOD_CHIPS: [FoodPeriod | "all", string][] = [
  ["all", "全部"],
  ["breakfast", "早餐"],
  ["lunch-dinner", "午晚餐"],
  ["afternoon", "下午茶"],
  ["late-night", "宵夜"],
];

const PERIOD_LABELS: Record<FoodPeriod, string> = {
  breakfast: "早餐",
  "lunch-dinner": "午晚餐",
  afternoon: "下午茶",
  "late-night": "宵夜",
};

export function FoodMap() {
  const pageSize = 18;
  const [period, setPeriod] = useState<FoodPeriod | "all">("all");
  const [page, setPage] = useState(1);

  const items = useMemo(
    () => FOOD_DATA.filter((food) => period === "all" || food.period === period),
    [period]
  );

  const pageCount = Math.ceil(items.length / pageSize);
  const visibleItems = items.slice((page - 1) * pageSize, page * pageSize);
  const updatePeriod = (value: FoodPeriod | "all") => {
    setPeriod(value);
    setPage(1);
  };
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("food")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getMapUrl = (name: string, description: string) => {
    const locationHint = description.split("｜")[0];
    const query = `${name} ${locationHint}`.trim();
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  return (
    <section id="food" className="below-fold-section section-rule scroll-mt-24 mx-auto mt-16 max-w-[960px] px-5 pt-12 sm:px-6">
      <div className="mb-1.5 flex items-baseline gap-2.5">
        <span className="font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">04 / NEAR CAMPUS</span>
        <h2 className="font-serif-tc text-2xl font-black text-pine-deep">
          興大周邊美食地圖
        </h2>
      </div>
      <p className="mb-4 text-[13px] text-ink-soft">
        依照用餐時段整理的興大周邊店家清單，先選時段再找店。
      </p>

      <div className="mb-4 flex gap-2">
        {FOOD_CHIPS.map(([key, label]) => {
          const active = period === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => updatePeriod(key)}
              className={`rounded-lg border px-4 py-2 text-[12.5px] font-bold transition-colors ${
                active
                  ? "border-pine bg-pine text-white"
                  : "border-line bg-white text-ink-soft hover:border-pine hover:text-pine-deep"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-xs text-ink-soft" aria-live="polite">
        {period === "all" ? "全部時段" : PERIOD_LABELS[period]} · 共 {items.length} 間店家
        {pageCount > 1 && ` · 第 ${page} / ${pageCount} 頁`}
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3.5">
        {visibleItems.map((f) => (
          <a
            key={f.name}
            href={getMapUrl(f.name, f.desc)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`在 Google Maps 開啟${f.name}`}
            className="group flex flex-col gap-1.5 rounded-[8px] border border-line bg-white p-4 no-underline transition-all hover:-translate-y-1 hover:border-pine hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-sm font-black text-pine-deep">
              {f.name}
              {f.badge && (
                <span className="rounded-full bg-seal-pale px-2.5 py-0.5 text-[10px] font-black text-seal">
                  {f.badge}
                </span>
              )}
            </div>
            <p className="text-[12.5px] leading-relaxed text-ink-soft">
              {f.desc}
            </p>
            <span className="mt-1 text-xs font-bold text-pine opacity-75 transition-opacity group-hover:opacity-100">
              在 Google Maps 開啟 ↗
            </span>
          </a>
        ))}
      </div>

      {pageCount > 1 && (
        <nav className="mt-6 flex items-center justify-center gap-2" aria-label="美食地圖分頁">
          <button
            type="button"
            onClick={() => changePage(page - 1)}
            disabled={page === 1}
            className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-bold text-pine transition-colors hover:border-pine disabled:cursor-not-allowed disabled:opacity-40"
          >
            上一頁
          </button>
          <span className="px-2 text-xs text-ink-soft">第 {page} / {pageCount} 頁</span>
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
    </section>
  );
}
