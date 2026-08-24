# 效能與部署指南

最後更新：2026-08-24

這份文件集中記錄興新手冊的效能基準、已完成的優化、Phase 3 狀態，以及部署後的驗證方式。歷史報告與快速參考已合併至此，避免同一項資訊散落在多份文件中。

## 實測基準

測試工具：Google Lighthouse／PageSpeed Insights，行動版、模擬 Moto G Power、慢速 4G。

| 指標 | 優化前 | 已部署版本 | 改善 |
| --- | ---: | ---: | ---: |
| 效能分數 | 56/100 | **66/100** | +18% |
| FCP | 9.5s | **4.5s** | -53% |
| LCP | 11.0s | **5.9s** | -46% |
| 阻塞渲染資源 | 10,500ms | **4,350ms** | -59% |
| 快取浪費 | 1,771 KiB | **851 KiB** | -52% |
| TBT | 40ms | **40ms** | 維持 |
| CLS | 0 | **0** | 維持 |

[查看 PageSpeed Insights 報告](https://pagespeed.web.dev/analysis/https-nchufreshman-hyjdevelop-com/emnn6khfk4?hl=zh_TW&form_factor=mobile)

## 已完成的優化

### Phase 1：基礎優化

- `vercel.json`：靜態資源一年快取、HTML 的 CDN 快取與安全標頭。
- `src/app/layout.tsx`：字體使用 `display: "swap"`，主要字體預載入。
- `src/app/calendar/page.tsx`、`src/app/clubs/page.tsx`：非首頁內容使用動態載入。
- `next.config.ts`：停用生產 source map、啟用壓縮並移除 `X-Powered-By`。
- `tailwind.config.ts`：限制掃描範圍，減少未使用樣式。

### Phase 2：關鍵路徑優化

- `src/app/layout.tsx`：內嵌約 1.5 KB 的關鍵 CSS。
- `<head>`：加入 Google Fonts 的 `preconnect` 與 `dns-prefetch`。
- 結構化資料使用 `afterInteractive`，避免阻塞初次互動。

### Phase 3：目前狀態

| 項目 | 狀態 | 說明 |
| --- | --- | --- |
| 字體載入配置 | ✅ 已完成 | 使用支援的 `next/font` 選項與 Latin 子集；Next.js 目前不支援 `text` 參數。 |
| WebP／AVIF 配置 | ✅ 已完成 | `next.config.ts` 已設定格式與長期快取。 |
| 圖片轉換工具 | ✅ 已建立 | `scripts/optimize-images.mjs` 需要先安裝 `sharp` 才能執行。 |
| 虛擬滾動元件 | ⚠️ 尚未接入 | `VirtualScroll.tsx` 與 `FaqExplorerVirtual.tsx` 已建立，但首頁仍使用 `FaqExplorer`。 |
| Service Worker | ✅ 已接入 | `public/sw.js` 與註冊元件已加入；需部署至 HTTPS 後驗證。 |
| PWA Manifest | ✅ 已完成 | `src/app/manifest.ts` 提供安裝資訊與快捷方式。 |

## 本地驗證

```powershell
npm run clean
npm run build
npm run start
```

目前已確認 `npm run build` 成功，所有靜態路由皆可產生。啟動後可用 Chrome DevTools 的 Lighthouse 檢查行動版與桌面版。

## 啟用圖片轉換

目前專案尚未將 `sharp` 加入依賴。需要轉換圖片時執行：

```powershell
npm install --save-dev sharp
node scripts/optimize-images.mjs
```

轉換後請確認元件引用的檔案路徑與版本控制中的圖片檔案，再重新執行 `npm run build`。

## 啟用 FAQ 虛擬滾動

首頁目前仍使用完整 FAQ 元件。如要切換，修改 `src/app/page.tsx`：

```tsx
import { FaqExplorerVirtual } from "@/components/FaqExplorerVirtual";

// 將 <FaqExplorer /> 替換為：
<FaqExplorerVirtual />
```

切換後應測試搜尋、分類、展開問答與分頁；虛擬滾動適合項目很多的列表，但 FAQ 卡片高度若會因展開內容改變，仍需在實機確認滾動體驗。

## 部署後檢查

1. 推送程式碼，等待 Vercel 部署完成。
2. 用無痕視窗開啟 `https://nchufreshman.hyjdevelop.com`。
3. 在 Network 檢查靜態資源的 `Cache-Control` 標頭。
4. 在 Application > Service Workers 確認 `/sw.js` 已註冊。
5. 切換離線模式，確認已造訪的頁面可回應。
6. 重新執行 [PageSpeed Insights](https://pagespeed.web.dev/)，記錄 FCP、LCP、TBT、CLS 與效能分數。

檢查快取標頭：

```powershell
curl.exe -I https://nchufreshman.hyjdevelop.com/
curl.exe -I https://nchufreshman.hyjdevelop.com/_next/static/<asset>.js
```

## 維護原則

- 校方日期、費用、資格與規定以最新官方公告為準。
- 每次更新字體、圖片或快取策略後，都重新執行 `npm run build`。
- 部署後以實測 Lighthouse 數據更新本文件，不把預測數值當成測試結果。
- Service Worker 更新快取名稱時，確認舊快取能被清理。

## 參考資料

- [Next.js 效能優化](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals](https://web.dev/vitals/)
- [Vercel 快取](https://vercel.com/docs/edge-network/caching)
- [Google Fonts](https://fonts.google.com/)
