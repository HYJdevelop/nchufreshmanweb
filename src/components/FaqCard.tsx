import type { FaqItem } from "@/lib/types";
import { BOARD_NAMES } from "@/lib/types";

interface FaqCardProps {
  item: FaqItem;
  index: number;
  expanded: boolean;
  onSearchKeyword: (keyword: string) => void;
  onToggle: (id: string) => void;
}

const OFFICIAL_LINKS = {
  course: [{ label: "教務處", href: "https://oaa.nchu.edu.tw/" }],
  dorm: [
    {
      label: "住宿服務",
      href: "https://www.osa.nchu.edu.tw/osa/dorm/",
    },
    { label: "學務處", href: "https://osa.nchu.edu.tw/" },
  ],
  register: [
    { label: "教務處", href: "https://oaa.nchu.edu.tw/" },
    { label: "學務處", href: "https://osa.nchu.edu.tw/" },
  ],
  transport: [{ label: "興大首頁", href: "https://www.nchu.edu.tw/" }],
  admin: [
    { label: "學務處", href: "https://osa.nchu.edu.tw/" },
    { label: "教務處", href: "https://oaa.nchu.edu.tw/" },
  ],
  club: [{ label: "學務處", href: "https://osa.nchu.edu.tw/" }],
} as const;

type AnswerBlock = {
  text: string;
  kind: "body" | "heading" | "step" | "bullet";
};

function formatAnswer(answer: string): string[] {
  return answer
    .replace(/(【[^】]+】)/g, "\n$1\n")
    .replace(/(\*\*[^*]+\*\*)/g, "\n$1\n")
    .replace(/。\s*•\s*/g, "。\n• ")
    .replace(/([。！？])\s*(\d+\.)/g, "$1\n$2")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function getAnswerBlocks(answer: string): AnswerBlock[] {
  return formatAnswer(answer).map((text) => {
    if (/^•\s?/.test(text)) return { text, kind: "bullet" };
    if (/^(\d+\.|步驟\s*\d+)/.test(text)) return { text, kind: "step" };
    if (/^(【.*】|\[.*\]|\*\*.*\*\*)$/.test(text) || /：$/.test(text)) {
      return { text: text.replace(/\*\*/g, ""), kind: "heading" };
    }
    return { text: text.replace(/\*\*/g, ""), kind: "body" };
  });
}

function highlightKeywords(text: string, keywords: string[]) {
  const terms = keywords
    .filter((keyword) => keyword.length > 1)
    .sort((a, b) => b.length - a.length)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (!terms.length) return text;

  return text.split(new RegExp(`(${terms.join("|")})`, "gi")).map((part, index) =>
    terms.some((term) => new RegExp(`^${term}$`, "i").test(part)) ? (
      <mark key={`${part}-${index}`} className="answer-highlight">{part}</mark>
    ) : (
      part
    )
  );
}

export function FaqCard({ item, index, expanded, onSearchKeyword, onToggle }: FaqCardProps) {
  const outline = item.keywords.slice(0, 3).join(" · ");

  return (
    <article
      style={{ animationDelay: `${Math.min(index * 35, 350)}ms` }}
      className={`faq-card animate-reveal relative rounded-2xl transition-all ${expanded ? "faq-card-expanded" : ""}`}
    >
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={expanded}
        aria-controls={`faq-answer-${item.id}`}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        <span className="faq-number font-mono-jb shrink-0 text-xs font-bold text-pine">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-seal">
              {BOARD_NAMES[item.board]}
            </span>
          </span>
          <span className="block text-[15px] font-bold leading-[1.55] text-pine-deep">
            {item.q}
          </span>
          {!expanded && (
            <span className="mt-2 block text-[12.5px] leading-relaxed text-ink-soft">
              本篇重點：{outline}
            </span>
          )}
        </span>
        <span className="faq-toggle flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-moss-pale text-lg font-light text-pine transition-transform">
          {expanded ? "−" : "+"}
        </span>
      </button>

      {expanded && (
        <div id={`faq-answer-${item.id}`} className="faq-answer px-5 pb-5 pl-14">
          <div className="answer-copy border-l-2 border-pine/20 pl-4 text-[14px] leading-[1.95] text-ink">
            {getAnswerBlocks(item.a).map((block, paragraphIndex) => (
              <p
                key={`${item.id}-paragraph-${paragraphIndex}`}
                className={`answer-block answer-${block.kind} mb-3 last:mb-0`}
              >
                {highlightKeywords(block.text, item.keywords)}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.keywords.slice(0, 6).map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => onSearchKeyword(keyword)}
                className="rounded-full bg-moss-pale px-3 py-1 text-[11px] text-pine-deep transition-colors hover:bg-pine hover:text-white"
              >
                #{keyword}
              </button>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
            {OFFICIAL_LINKS[item.board].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-pine transition-colors hover:border-pine hover:bg-moss-pale"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
