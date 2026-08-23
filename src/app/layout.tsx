import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Noto_Serif_TC, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { FAQ_DATA } from "@/data/faq";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nchufreshmen.hyjdevelop.com"),
  title: "HYJdevelop｜興新手冊 | 國立中興大學新生生活與行政指南",
  description:
    "國立中興大學新生指南：搜尋選課、宿舍、註冊繳費、交通、獎助學金與校園生活 FAQ，快速找到學長姐整理的實用解答。",
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
      <body
        className={`${notoSansTC.variable} ${notoSerifTC.variable} ${jetbrainsMono.variable} font-sans-tc antialiased leading-relaxed text-ink`}
      >
        <ScrollToTop />
        {children}
      </body>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </html>
  );
}
