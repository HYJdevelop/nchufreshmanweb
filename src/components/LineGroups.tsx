import { DEPT_LINKS } from "@/data/lineGroups";

export function LineGroups() {
  return (
    <section id="line" className="below-fold-section section-rule scroll-mt-24 mx-auto mt-16 max-w-[960px] px-5 pt-12 sm:px-6">
      <div className="mb-1.5 flex items-baseline gap-2.5">
        <span className="font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">03 / COMMUNITY</span>
        <h2 className="font-serif-tc text-2xl font-black text-pine-deep">
          各系新生 LINE 群
        </h2>
      </div>
      <p className="mb-5 text-[13px] text-ink-soft">
        點卡片直接加入。連結由學長姐流傳,若失效請回報更新。
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-2.5">
        {DEPT_LINKS.map((d) => (
          <a
            key={d.name}
            href={d.url}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-between gap-2 rounded-[8px] border border-line bg-white px-3.5 py-3 text-[13px] font-bold text-pine-deep no-underline transition-colors hover:border-[#06C755] hover:bg-[#f2fbf5]"
          >
            <span>#{d.name}</span>
            <span className="text-xs text-[#06C755]">加入 →</span>
          </a>
        ))}
      </div>
      <p className="mt-3.5 text-xs text-ink-soft">
        找不到你的系？到新生社群留言詢問,或自己開一個號召同學！
      </p>
    </section>
  );
}
