import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "就學貸款流程教學｜興新手冊",
  description: "國立中興大學就學貸款申請、對保、異動通報與還款紓困完整指南。",
  alternates: { canonical: "/loan/" },
};

const steps = [
  { number: "01", title: "線上試算與預約", note: "先確認金額，再預約對保" },
  { number: "02", title: "臺灣銀行對保", note: "依申請身分準備文件" },
  { number: "03", title: "在學與畢業後", note: "留意異動、展延與還款" },
];

const firstTimeDocuments = [
  "註冊繳費通知單",
  "就學貸款申請 / 撥款通知書（共三聯）",
  "國民身分證（本人與保證人）",
  "印章（本人與保證人）",
  "最近三個月內申請的「戶籍謄本」（需含學生本人、父母或全體監護人、配偶【已婚者】及連帶保證人，記事欄不可省略）",
];

const counterDocuments = [
  "註冊繳費通知單",
  "就學貸款申請 / 撥款通知書（共三聯）",
  "最近一學期的「就學貸款申請 / 撥款通知書」（學生存執聯）",
  "本人身分證及印章",
];

function DocumentList({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 space-y-3 text-sm leading-7 text-ink-soft sm:text-[15px]">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3">
          <span className="font-mono-jb shrink-0 text-xs font-bold text-pine">{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function LoanPage() {
  return (
    <>
      <Header />
      <main>
        <section className="loan-hero px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[960px]">
            <p className="mb-4 font-mono-jb text-xs font-bold tracking-[0.18em] text-gold">NCHU / FINANCIAL AID</p>
            <h1 className="max-w-2xl font-serif-tc text-4xl font-black leading-tight text-white sm:text-6xl">就學貸款流程教學</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">從線上試算、銀行對保，到畢業後還款與紓困，一次整理申請前後需要留意的每個節點。</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <a href="https://cportal.nchu.edu.tw/ps/plsql/m_shf15" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gold px-4 py-3 text-pine-deep no-underline transition-transform hover:-translate-y-0.5">前往學貸試算 ↗</a>
              <a href="https://sloan.bot.com.tw/customer/login/SLoanLogin.action" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/30 px-4 py-3 text-white no-underline transition-colors hover:bg-white/10">臺銀就學貸款入口 ↗</a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[960px] px-5 sm:px-8" aria-label="申請流程">
          <div className="loan-stepper -mt-7 grid gap-px overflow-hidden rounded-xl border border-line bg-line shadow-xl sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="bg-card p-5 sm:p-6">
                <span className="font-mono-jb text-xs font-bold text-seal">{step.number}</span>
                <h2 className="mt-2 font-serif-tc text-lg font-black text-pine-deep">{step.title}</h2>
                <p className="mt-1 text-sm text-ink-soft">{step.note}</p>
              </div>
            ))}
          </div>

          <div className="py-14 sm:py-20">
            <section className="mb-14" aria-labelledby="online-title">
              <p className="section-kicker">PHASE 01</p>
              <h2 id="online-title" className="mt-2 font-serif-tc text-3xl font-black text-pine-deep">線上試算與預約</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <a href="https://cportal.nchu.edu.tw/ps/plsql/m_shf15" target="_blank" rel="noopener noreferrer" className="loan-link-card"><span>01</span><strong>試算貸款金額</strong><small>前往學校學貸試算網站確認金額</small></a>
                <a href="https://sloan.bot.com.tw/customer/login/SLoanLogin.action" target="_blank" rel="noopener noreferrer" className="loan-link-card"><span>02</span><strong>登入台銀系統</strong><small>填寫就學貸款申請資料</small></a>
                <div className="loan-link-card"><span>03</span><strong>預約對保時間</strong><small>於臺灣銀行網站預約前往分行辦理對保</small></div>
              </div>
            </section>

            <section className="mb-14" aria-labelledby="counter-title">
              <p className="section-kicker">PHASE 02</p>
              <h2 id="counter-title" className="mt-2 font-serif-tc text-3xl font-black text-pine-deep">臺灣銀行對保手續</h2>
              <div className="loan-alert mb-7 mt-7"><strong>手續費：新臺幣 100 元</strong><p className="mt-1 text-sm leading-7">辦理對保時，皆須繳交銀行經辦人員手續費新臺幣 100 元。</p></div>
              <div className="rounded-xl border border-line bg-card p-2 shadow-sm">
                <details open className="loan-accordion">
                  <summary><span><b>情況 A</b> 第一次申請就學貸款</span><i>＋</i></summary>
                  <div className="px-4 pb-6 pt-2 sm:px-6"><p className="leading-7 text-ink-soft">需與 <strong className="text-pine-deep">連帶保證人</strong>（學生未成年者與全體監護人）一同前往住家附近的臺灣銀行完成手續。</p><h3 className="mt-6 font-bold text-pine-deep">必備文件</h3><DocumentList items={firstTimeDocuments} /><div className="mt-6 rounded-lg bg-moss-pale p-4 text-sm leading-7 text-pine-deep"><strong>例外狀況</strong><br />若保證人不是父母、監護人或配偶，保證人需另外準備「財力證明」（如：載有每月薪資之最近三個月內在職證明、或最近六個月之薪資轉帳證明）交給銀行。</div></div>
                </details>
                <details className="loan-accordion">
                  <summary><span><b>情況 B</b> 同一學程第二次（含）以上申請</span><i>＋</i></summary>
                  <div className="px-4 pb-6 pt-2 sm:px-6"><p className="leading-7 text-ink-soft">若您與保證人的資料<strong className="text-pine-deep">皆無異動</strong>，可選擇以下兩種方式擇一辦理：</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-lg bg-paper p-4"><h3 className="font-bold text-pine-deep">方式 1：線上申貸（免臨櫃）</h3><p className="mt-2 text-sm leading-7 text-ink-soft">使用臺灣銀行晶片金融卡，或以留存台銀之手機門號接收簡訊 OTP（一次性動態密碼）驗證身分，即可完成本學期線上申貸。</p></div><div className="rounded-lg bg-paper p-4"><h3 className="font-bold text-pine-deep">方式 2：臨櫃辦理</h3><p className="mt-2 text-sm leading-7 text-ink-soft">自行前往附近的臺灣銀行辦理，需攜帶以下文件：</p><DocumentList items={counterDocuments} /></div></div></div>
                </details>
                <details className="loan-accordion">
                  <summary><span><b>情況 C</b> 再次申請，但資料有異動</span><i>＋</i></summary>
                  <div className="px-4 pb-6 pt-2 sm:px-6 text-sm leading-8 text-ink-soft"><p><strong className="text-pine-deep">關係人資料異動</strong>（如離婚、死亡等）：需另外攜帶最近三個月內申請的戶籍謄本（記事欄不可省略）。</p><p className="mt-2"><strong className="text-pine-deep">更換保證人</strong>：新的保證人必須與借款人一同到銀行，重新簽訂借據。</p></div>
                </details>
              </div>
              <div className="mt-5 rounded-lg border-l-4 border-seal bg-seal-pale px-5 py-4 text-sm leading-7 text-pine-deep"><strong>特別注意</strong>：若兄弟姊妹也曾向台銀申貸，須確認他們已到期的本息皆有正常繳納，以免影響自身申貸權益。</div>
            </section>

            <section className="grid gap-10 border-t border-line pt-14 sm:grid-cols-2 sm:pt-16">
              <div><p className="section-kicker">PHASE 03A</p><h2 className="mt-2 font-serif-tc text-2xl font-black text-pine-deep">在學期間特殊異動通報</h2><p className="mt-4 text-sm leading-7 text-ink-soft">若發生以下情形，應於事實發生時，<strong className="text-seal">立即檢附相關證明文件</strong>通知臺灣銀行承貸分行：</p><ul className="loan-bullet-list"><li>退學 / 休學</li><li>延遲畢業年限</li><li>提前退伍</li><li>出國留學 / 出國定居 / 出國就業</li><li>聯絡資訊變動（電話、地址、手機號碼或電子信箱變更時需主動通知，以免漏接繳款通知或優惠訊息）</li></ul></div>
              <div><p className="section-kicker">PHASE 03B</p><h2 className="mt-2 font-serif-tc text-2xl font-black text-pine-deep">畢業與還款注意事項</h2><h3 className="mt-5 font-bold text-pine-deep">開始還款時間</h3><ul className="loan-bullet-list"><li><strong>一般生</strong>：畢業日滿一年後到期，開始按月償還本金與利息。</li><li><strong>在職專班</strong>：畢業後次月就要開始按月償還。</li><li>若畢業後繼續升學，是以「最後教育階段的就讀身分」來決定開始還款日期。</li></ul></div>
            </section>

            <section className="mt-14 border-t border-line pt-14"><h2 className="font-serif-tc text-2xl font-black text-pine-deep">申請延後還款</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-ink-soft">若畢業後將繼續在國內升學、服義務兵役（含替代役）或參加教育實習，請將以下文件交寄臺灣銀行承貸分行申請展延：</p><ol className="mt-5 grid gap-3 sm:grid-cols-3"><li className="rounded-lg bg-card p-4 text-sm leading-7 shadow-sm"><b className="text-seal">01</b><br />「(01) 臺灣銀行就學貸款償還期限展延申請及異動通知書」</li><li className="rounded-lg bg-card p-4 text-sm leading-7 shadow-sm"><b className="text-seal">02</b><br />國民身分證影本</li><li className="rounded-lg bg-card p-4 text-sm leading-7 shadow-sm"><b className="text-seal">03</b><br />證明文件（在學證明 / 區公所兵役課開立之應徵召服兵役證明書 / 教育實習證明書）</li></ol></section>

            <section className="loan-relief mt-14 rounded-xl p-6 sm:p-9"><p className="section-kicker text-gold">RELIEF / SUPPORT</p><h2 className="mt-2 font-serif-tc text-2xl font-black text-white">無力償還時的紓困方案 <span className="font-sans-tc text-base font-bold">（緩繳與延長）</span></h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">若遇到還款困難，且符合以下條件之一，可申請<strong className="text-gold">緩繳貸款本金一年</strong>（每人最多可辦理 12 次）。辦理低所得或低 / 中低收入戶緩繳，緩繳期間的利息將由政府負擔。</p><div className="mt-7 grid gap-8 sm:grid-cols-2"><div><h3 className="font-bold text-white">申請條件</h3><ol className="mt-3 space-y-3 text-sm leading-7 text-white/75"><li><b className="text-gold">1.</b> 繳款日前一年度的平均每月所得未達新臺幣 5 萬元（如有未成年或已成年為就學階段且具正式學籍的子女，每有一名子女可再放寬 1 萬元）。</li><li><b className="text-gold">2.</b> 繳款當年度，家庭經縣市政府核定為「低收入戶」或「中低收入戶」。</li></ol></div><div><h3 className="font-bold text-white">申請方式</h3><p className="mt-3 text-sm leading-7 text-white/75">與保證人一同填寫「(02-1) 臺灣銀行就學貸款緩繳本金及還款期間延長申請暨切結書」（均需親簽及蓋章），附上相關證明寄交台銀承貸分行。</p></div></div><div className="mt-7 rounded-lg bg-white/10 p-4 text-sm leading-7 text-white"><strong className="text-gold">注意</strong>：若已有逾期未繳款情形，必須將「已到期的貸款本息」先繳清後，才能申請貸款緩繳。</div></section>
            <section className="loan-submit mt-14 rounded-xl border border-line bg-card p-6 shadow-sm sm:p-8" aria-labelledby="submit-title">
              <p className="section-kicker">FINAL STEP</p>
              <h2 id="submit-title" className="mt-2 font-serif-tc text-2xl font-black text-pine-deep">最後：繳交文件</h2>
              <p className="mt-4 text-sm leading-7 text-ink-soft">親送或掛號郵寄至生輔組（信封請註明就學貸款）。</p>
              <h3 className="mt-6 font-bold text-pine-deep">繳交文件</h3>
              <ol className="mt-3 grid gap-3 sm:grid-cols-2">
                <li className="rounded-lg bg-paper p-4 text-sm leading-7 text-ink-soft"><b className="mr-2 font-mono-jb text-xs text-seal">01</b>本校就學貸款預估繳費清單</li>
                <li className="rounded-lg bg-paper p-4 text-sm leading-7 text-ink-soft"><b className="mr-2 font-mono-jb text-xs text-seal">02</b>完成對保之台灣銀行就學貸款申請書第二聯</li>
              </ol>
            </section>
            <p className="mt-10 text-center text-xs leading-6 text-ink-soft">本頁資訊僅供參考，最新規定與申請結果請以臺灣銀行及學校官方公告為準。</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}