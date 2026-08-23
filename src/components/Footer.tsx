import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer mt-16 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-12 flex flex-col justify-between gap-8 border-b border-white/15 pb-10 sm:flex-row sm:items-end">
          <div>
            <a
              href="https://www.hyjdevelop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 inline-flex items-center gap-2 no-underline"
              aria-label="前往 HYJdevelop 官方網站"
            >
              <Image
                src="/hyj-nchuguide-mark.svg"
                alt=""
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-mono-jb text-[11px] font-bold tracking-[0.16em] text-[#facc15]">
                HYJDEVELOP.COM
              </span>
            </a>
            <h2 className="font-serif-tc text-2xl font-black text-white sm:text-3xl">
              讓新生更快找到方向。
            </h2>
          </div>
          <a
            href="https://www.hyjdevelop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold no-underline transition-colors hover:border-[#facc15]"
          >
            認識 HYJdevelop <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mb-10 flex flex-col gap-3 rounded-xl border border-white/15 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-white">網站內容有問題嗎？</p>
            <p className="mt-1 text-xs text-slate-400">回報錯誤或提供更新資訊，幫助下一位新生。</p>
          </div>
          <a
            href="https://forms.gle/dT7CFm38fftv14Mi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-[#1d4ed8]"
          >
            回報網站問題 <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          <div>
            <h3 className="mb-4 font-bold text-white">新生指南</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="no-underline transition-colors">回到首頁</Link></li>
              <li><Link href="/calendar/" className="no-underline transition-colors">校務行事曆</Link></li>
              <li><Link href="/line/" className="no-underline transition-colors">新生 LINE 群</Link></li>
              <li><Link href="/food/" className="no-underline transition-colors">興大美食地圖</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">官方入口</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.nchu.edu.tw/" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">興大首頁</a></li>
              <li><a href="https://oaa.nchu.edu.tw/" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">教務處</a></li>
              <li><a href="https://osa.nchu.edu.tw/" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">學務處</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">HYJdevelop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.hyjdevelop.com/" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">官方網站</a></li>
              <li><a href="https://www.hyjdevelop.com/partner" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">合作夥伴</a></li>
              <li><a href="https://www.hyjdevelop.com/privacy" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">資料與隱私</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">關注更新</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://fb.hyjdevelop.com/" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">Facebook</a></li>
              <li><a href="https://ig.hyjdevelop.com/" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors">Instagram</a></li>
              <li><a href="mailto:contact@hyjdevelop.com" className="no-underline transition-colors">聯絡我們</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 HYJdevelop · 興新手冊</span>
          <span>資訊僅供參考，最新規定請以官方公告為準</span>
        </div>
      </div>
    </footer>
  );
}
