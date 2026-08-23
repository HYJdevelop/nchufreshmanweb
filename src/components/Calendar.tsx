const CALENDAR_URL =
  "https://oaa.nchu.edu.tw/upfile/file/ab3ec348e2c31cb5ecbaf930d85076990d7ba30a.pdf";

const IMPORTANT_DATES = [
  { date: "8/20 - 8/22", title: "通識第一階段選課", note: "排通識志願序" },
  { date: "8/26 - 8/27", title: "通識第二階段選課", note: "依系統開放時段操作" },
  { date: "8/31 - 9/2", title: "新生訓練與系上活動", note: "興鮮人活動期間" },
  { date: "9/3 - 9/4", title: "新生初選", note: "體育、本系必選修與全校選修" },
  { date: "9/7 - 9/8", title: "新生健康檢查", note: "惠蓀堂集中辦理" },
];

export function Calendar() {
  return (
    <section
      id="calendar"
      className="below-fold-section section-rule scroll-mt-24 mx-auto mt-16 max-w-[960px] px-5 pt-12 sm:px-6"
    >
      <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">
          02 / ACADEMIC CALENDAR
        </span>
        <h2 className="font-serif-tc text-2xl font-black text-pine-deep">
          校務行事曆
        </h2>
      </div>
      <p className="mb-4 max-w-[60ch] text-[13px] leading-relaxed text-ink-soft">
        重要註冊、選課與校務日期請以教務處最新公告為準。
      </p>

      <div className="mb-5 rounded-xl border border-line bg-white p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-serif-tc text-lg font-black text-pine-deep">
            新生重要時間表
          </h3>
          <span className="text-[11px] text-ink-soft">日期依年度行事曆調整</span>
        </div>
        <ol className="grid gap-2 sm:grid-cols-2">
          {IMPORTANT_DATES.map((event) => (
            <li
              key={event.title}
              className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-3 rounded-lg bg-moss-pale/60 px-3 py-2.5"
            >
              <time className="font-mono-jb text-xs font-bold text-pine">
                {event.date}
              </time>
              <span className="min-w-0 text-[13px] leading-relaxed text-pine-deep">
                <b className="block">{event.title}</b>
                <span className="text-[11px] text-ink-soft">{event.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5">
        <div>
          <h3 className="font-serif-tc text-lg font-black text-pine-deep">
            完整校務行事曆
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-ink-soft">
            點擊按鈕後開啟教務處官方 PDF，再由瀏覽器檢視或下載。
          </p>
        </div>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 shrink-0 items-center rounded-lg bg-pine px-4 py-2 text-xs font-bold text-white no-underline transition-colors hover:bg-pine-deep"
        >
          開啟完整行事曆 ↗
        </a>
      </div>
    </section>
  );
}
