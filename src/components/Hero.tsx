export function Hero() {
  return (
    <section id="top" className="hero-panel px-5 pb-16 pt-10 sm:px-6 sm:pb-28 sm:pt-20">
      <div className="relative z-[1] mx-auto max-w-[960px]">
        <div className="max-w-[650px]">
          <span className="mb-4 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-bold leading-relaxed tracking-[0.14em] text-[#facc15] sm:mb-5 sm:text-xs sm:tracking-[0.18em]">
            <span className="h-2 w-2 rounded-full bg-[#facc15]" />
            NCHU · NEW STUDENT GUIDE
          </span>
          <h1 className="mb-4 max-w-[600px] text-balance font-serif-tc text-[clamp(34px,10vw,68px)] font-black leading-[1.18] tracking-normal sm:mb-5 sm:text-[clamp(34px,6vw,68px)] sm:leading-[1.12]">
            第一次來興大，
            <br />
            <span className="text-[#facc15]">先從這裡開始。</span>
          </h1>
          <p className="max-w-[550px] text-[15px] leading-[1.85] text-white/70 sm:text-base sm:leading-[1.9]">
            選課、宿舍、註冊、交通與校園生活，35則整理的回答，讓你更快熟悉中興。
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3 text-[11px] font-bold leading-relaxed text-white/75 sm:mt-10 sm:gap-3 sm:text-xs">
          <span className="border-l-2 border-[#ef4444] pl-3">35 則 FAQ</span>
          <span className="border-l-2 border-[#ef4444] pl-3">6 大分類</span>
          <span className="border-l-2 border-[#ef4444] pl-3">持續更新中</span>
        </div>
      </div>
    </section>
  );
}
