import Link from "next/link";

const quickTasks = [
  {
    number: "01",
    title: "完成新生報到",
    description: "先確認報到驗證、學號與 EZ come 登入方式。",
    href: "https://nchu.cc/sso",
    label: "前往 EZ come",
    external: true,
  },
  {
    number: "02",
    title: "申請新生宿舍",
    description: "確認床位申請時程、入住須知，以及放棄或候補方式。",
    href: "https://www.osa.nchu.edu.tw/osa/laa/freshman/sys/?page_id=9",
    label: "查看宿舍申請",
    external: true,
  },
  {
    number: "03",
    title: "準備開學選課",
    description: "掌握新生選課節奏、行事曆與必修課程提醒。",
    href: "/calendar/",
    label: "查看行事曆",
    external: false,
  },
];

const officialResources = [
  ["學生手冊", "https://www.osa.nchu.edu.tw/osa/laa/freshman/sys/handbook.php", "把校規與校園生活一次讀懂"],
  ["學雜費與註冊", "https://oaa.nchu.edu.tw/zh-tw/rs-freshman/", "註冊、繳費與減免申請入口"],
  ["課程查詢系統", "https://cportal.nchu.edu.tw/cofsys/plsql/crseqry_home2", "查詢系、所與學位學程的課程"],
  ["獎助學金", "https://www.osa.nchu.edu.tw/osa/laa/scholarship.html", "找適合自己的學習支持"],
  ["校園地圖", "https://www.nchu.edu.tw/about/mid/869", "第一次走進興大也不迷路"],
  ["交通資訊", "https://www.nchu.edu.tw/about-route-map/mid/83", "規劃到校與日常移動路線"],
  ["住宿資訊", "https://www.osa.nchu.edu.tw/osa/dorm/intro_list.html", "查看宿舍介紹與入住規定"],
] as const;

const events = [
  ["開學前", "新生入學指導", "認識校園、系所與接下來的大學生活"],
  ["家長", "家長說明會", "讓家人也能掌握重要時程與校園資源"],
  ["健康", "新生健康檢查", "依公告時程完成新生健康檢查"],
] as const;

export function FreshmanResources() {
  return (
    <section id="resources" className="below-fold-section border-t border-line bg-[#eef2ed] px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">START HERE / 新生任務</p>
            <h2 className="font-serif-tc text-2xl font-black text-pine-deep sm:text-3xl">把開學前的事，一次排好。</h2>
          </div>
          <p className="max-w-[330px] text-sm leading-7 text-ink-soft">參考官方新生服務網整理出三個最先該完成的步驟，再用 FAQ 找到細節。</p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {quickTasks.map((task) => {
            const className = "group flex min-h-[205px] flex-col border border-pine-deep bg-pine-deep p-5 text-white shadow-[5px_5px_0_#facc15] transition-transform hover:-translate-y-1";
            const content = (
              <>
                <span className="font-mono-jb text-xs font-bold text-[#facc15]">{task.number}</span>
                <h3 className="mt-7 font-serif-tc text-xl font-black">{task.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-white/65">{task.description}</p>
                <span className="mt-auto pt-5 text-xs font-bold text-[#facc15]">{task.label} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 inline-block">→</span></span>
              </>
            );

            return task.external ? (
              <a key={task.number} href={task.href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
            ) : (
              <Link key={task.number} href={task.href} className={className}>{content}</Link>
            );
          })}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="mb-1 font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">OFFICIAL LINKS</p>
                <h2 className="font-serif-tc text-2xl font-black text-pine-deep">校園資源入口</h2>
              </div>
              <span className="text-xs text-ink-soft">以官方公告為準</span>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {officialResources.map(([title, href, description]) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="group border-b border-line py-3 no-underline">
                  <span className="flex items-center justify-between font-bold text-pine-deep">
                    {title}<span aria-hidden="true" className="text-seal transition-transform group-hover:translate-x-1">↗</span>
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-ink-soft">{description}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-seal pl-5 sm:pl-7">
            <p className="mb-1 font-mono-jb text-[11px] font-bold tracking-[0.12em] text-seal">CAMPUS MOMENTS</p>
            <h2 className="mb-6 font-serif-tc text-2xl font-black text-pine-deep">新生接下來會遇到</h2>
            <div className="space-y-5">
              {events.map(([tag, title, description]) => (
                <div key={title} className="flex gap-4">
                  <span className="mt-1 h-fit shrink-0 border border-seal px-2 py-1 font-mono-jb text-[10px] font-bold text-seal">{tag}</span>
                  <div><h3 className="font-bold text-pine-deep">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-soft">{description}</p></div>
                </div>
              ))}
            </div>
            <Link href="/clubs/" className="mt-8 inline-flex items-center gap-2 border-b-2 border-pine-deep pb-1 text-sm font-bold text-pine-deep no-underline hover:border-seal hover:text-seal">先探索社團與活動 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}