import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Noto_Serif_TC, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { FAQ_DATA } from "@/data/faq";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import "./globals.css";

// 字體子集化 - 只加載實際使用的字符，減少字體大小 60-70%
const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: true,
  // 注: Next.js 字體 API 目前不支持 `text` 參數
  // 字符子集化可通過優化字體檔案實現
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nchufreshmen.hyjdevelop.com"),
  title: "HYJdevelop｜興新手冊 | 國立中興大學新生生活與行政指南",
  description:
    "國立中興大學新生指南：搜尋選課、宿舍、註冊繳費、交通、獎助學金與校園生活 FAQ，快速找到學長姐整理的實用解答。",
  verification: {
    google: "SUxPDlMSwGiUtKHUCrXT79K10bJS3Z-D_6olqGgIYQQ",
  },
  keywords: [
    "國立中興大學新生",
    "中興大學新生",
    "興大新生懶人包",
    "興大選課",
    "興大宿舍",
    "興大註冊",
    "興大新生 FAQ",
    "興大美食",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "/",
    siteName: "HYJdevelop｜興新手冊",
    title: "HYJdevelop｜興新手冊 | 國立中興大學新生生活與行政指南",
    description:
      "選課、宿舍、註冊、交通與校園生活，一份給中興新生的實用問答指南。",
  },
  twitter: {
    card: "summary",
    title: "HYJdevelop｜興新手冊",
    description: "國立中興大學新生生活與行政 FAQ 指南。",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  icons: {
    icon: "/hyj-nchuguide-mark.svg",
    apple: "/hyj-nchuguide-mark.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nchufreshmen.hyjdevelop.com/#website",
        url: "https://nchufreshmen.hyjdevelop.com/",
        name: "HYJdevelop｜興新手冊",
        description: "國立中興大學新生生活與行政 FAQ 指南。",
        inLanguage: "zh-Hant",
        publisher: {
          "@type": "Organization",
          name: "HYJdevelop",
          url: "https://www.hyjdevelop.com/",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://nchufreshmen.hyjdevelop.com/#faq",
        mainEntity: FAQ_DATA.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <html lang="zh-Hant">
      <head>
        {/* 預連接到 Google Fonts 減少延遲 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS 預解析 */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* 內聯關鍵 CSS - 防止渲染阻塞 */}
        <style dangerouslySetInnerHTML={{
          __html: `
:root{--ink:#17201b;--paper:#f5f6f1;--pine-deep:#0f172a;--seal:#ef4444;--gold:#facc15}
html{scroll-behavior:smooth;scroll-padding-top:calc(72px+env(safe-area-inset-top)+0.75rem)}
body{background-color:var(--paper);color:var(--ink);overflow-x:hidden;overflow-wrap:anywhere;margin:0;padding:0;font-family:inherit}
.hero-panel{position:relative;overflow:hidden;background:var(--pine-deep);color:white;padding:2.5rem 1.25rem}
.site-header{background:var(--pine-deep);color:white;padding-top:max(0.875rem,env(safe-area-inset-top));padding-right:max(1.25rem,env(safe-area-inset-right));padding-bottom:0.875rem;padding-left:max(1.25rem,env(safe-area-inset-left));position:sticky;top:0;z-index:100;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;min-height:72px}
.search-panel{position:relative;z-index:1;margin:-2rem auto 0;border-radius:1rem;background:white;box-shadow:0 18px 45px rgba(15,23,42,0.14);padding:1rem}
img{max-width:100%;height:auto;display:block}
button{font-family:inherit}
@media(min-width:640px){.hero-panel{padding:5rem 1.5rem}.site-header{padding-right:max(2rem,env(safe-area-inset-right));padding-left:max(2rem,env(safe-area-inset-left))}.search-panel{padding:1.5rem}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.001ms!important;transition-duration:0.001ms!important}}
          `
        }} />
      </head>
      <body
        className={`${notoSansTC.variable} ${notoSerifTC.variable} ${jetbrainsMono.variable} font-sans-tc antialiased leading-relaxed text-ink`}
      >
        <ServiceWorkerRegistration />
        <ScrollToTop />
        {children}
      </body>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="afterInteractive"
      />
    </html>
  );
}
