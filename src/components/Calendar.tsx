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

      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
        <div className="calendar-frame aspect-[4/5] min-h-[420px] w-full sm:aspect-[16/10] sm:min-h-0">
          <iframe
            src={`${CALENDAR_URL}#view=FitH`}
            title="國立中興大學校務行事曆 PDF"
            className="h-full w-full border-0"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs leading-relaxed text-ink-soft">
          官方 PDF 連結已驗證，可開啟原始檔確認完整日期。
        </p>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center rounded-lg bg-pine px-4 py-2 text-xs font-bold text-white no-underline transition-colors hover:bg-pine-deep"
        >
          開啟完整行事曆 ↗
        </a>
      </div>
    </section>
  );
}
