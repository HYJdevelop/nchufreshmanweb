interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-input relative flex min-h-[60px] items-center rounded-xl px-4 transition-all sm:min-h-[68px] sm:px-5">
      <span className="mr-3 text-lg opacity-60">⌕</span>
      <input
        id="faqSearch"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="搜尋新生問答"
        autoComplete="off"
        placeholder="搜尋問題、關鍵字或分類，例如：宿舍 申請"
        className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-ink-soft/70 sm:text-[15px]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="清除搜尋"
          className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm text-ink-soft transition-colors hover:bg-moss-pale hover:text-pine-deep"
        >
          ✕
        </button>
      )}
    </div>
  );
}
