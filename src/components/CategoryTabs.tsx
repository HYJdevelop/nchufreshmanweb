import type { Board } from "@/lib/types";
import { BOARD_NAMES } from "@/lib/types";

interface CategoryTabsProps {
  current: Board | "all";
  onChange: (board: Board | "all") => void;
}

const CHIPS: [Board | "all", string][] = [
  ["all", "✨ 全部"],
  ...(Object.entries(BOARD_NAMES) as [Board, string][]),
];

export function CategoryTabs({ current, onChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CHIPS.map(([key, label]) => {
        const active = current === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
                className={`rounded-lg border px-3.5 py-2 text-[12px] font-bold transition-all sm:px-4 sm:text-[12.5px] ${
              active
                  ? "border-pine bg-pine text-white shadow-[3px_3px_0_rgba(13,53,43,0.15)]"
                  : "border-line bg-white text-ink-soft hover:border-pine hover:text-pine-deep"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
