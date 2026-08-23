export function Hero() {
  return (
    <section id="top" className="hero-panel px-6 pb-24 pt-14 sm:pb-28 sm:pt-20">
      <div className="relative z-[1] mx-auto max-w-[960px]">
        <div className="max-w-[650px]">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#facc15]">
            <span className="h-2 w-2 rounded-full bg-[#facc15]" />
            NCHU · NEW STUDENT GUIDE
          </span>
          <h1 className="mb-5 max-w-[600px] font-serif-tc text-[clamp(34px,6vw,68px)] font-black leading-[1.12] tracking-normal">
            第一次來興大，
            <br />
            <span className="text-[#facc15]">先從這裡開始。</span>
          </h1>
          <p className="max-w-[550px] text-[15px] leading-[1.9] text-white/70 sm:text-base">
            選課、宿舍、註冊、交通與校園生活，35 則學長姐整理的實用問答，讓你少走一點彎路。
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold text-white/75">
          <span className="border-l-2 border-[#ef4444] pl-3">35 則 FAQ</span>
          <span className="border-l-2 border-[#ef4444] pl-3">6 大分類</span>
          <span className="border-l-2 border-[#ef4444] pl-3">持續更新中</span>
        </div>
      </div>
    </section>
  );
}
