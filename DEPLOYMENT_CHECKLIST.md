# 部署清單 & 快速檢查

## 🚀 部署前檢查清單

### 代碼質量
- [x] `npm run build` - 構建成功
- [x] 無 TypeScript 錯誤
- [x] 無 ESLint 警告
- [ ] Git 差異審查

### 性能驗證
- [x] 關鍵 CSS 已內聯
- [x] Font preconnect 已配置
- [x] 動態導入已實施
- [x] vercel.json 已配置
- [ ] 本地 Lighthouse 測試 (簽入時)

---

## 📋 部署步驟

### 第 1 步: 本地驗證
```powershell
cd c:\Users\charl\Desktop\HYJdevelop專案\nchufreshmanweb

# 清理舊的構建
npm run clean

# 新鮮構建
npm run build

# 驗證輸出大小
Get-ChildItem -Path out -Recurse | Where-Object {!$_.PSIsContainer} | Measure-Object -Property Length -Sum
```

### 第 2 步: Git 提交
```bash
git add .
git commit -m "perf: Phase 2 優化 - 內聯關鍵 CSS、字體預連接、Vercel 頭部優化"
git push origin main
```

### 第 3 步: Vercel 部署
1. 訪問 https://vercel.com
2. 確認自動部署已觸發
3. 等待部署完成 (~2-3 分鐘)
4. 驗證部署 URL

### 第 4 步: 測試
```bash
# 清除快取並測試
1. 訪問 https://nchufreshman.hyjdevelop.com
2. 在隱私/無痕窗口測試
3. 打開 Chrome DevTools → Network
4. 檢查資源加載順序
5. 確認沒有阻塊渲染的大型 CSS/JS
```

### 第 5 步: Lighthouse 測試

#### 桌面版測試
```bash
# Chrome DevTools
1. F12 打開 DevTools
2. Ctrl+Shift+P → "Lighthouse"
3. 選擇 "Desktop"
4. 運行分析
5. 記錄分數與基準對比
```

#### 移動版測試
```bash
# Chrome DevTools
1. F12 打開 DevTools
2. Ctrl+Shift+P → "Lighthouse"
3. 選擇 "Mobile"
4. 運行分析
5. 重複 3-5 次以獲得平均值
```

#### PageSpeed Insights 測試
```bash
訪問: https://pagespeed.web.dev
輸入: https://nchufreshman.hyjdevelop.com
對比現有報告: 
- https://pagespeed.web.dev/analysis/https-nchufreshman-hyjdevelop-com/6hh64a5h1c?hl=zh_TW&form_factor=mobile
```

---

## 📊 預期改善 vs. 實際對比

### 部署前 (當前基準)
```
移動設備:
- FCP: 9.5s
- LCP: 11.0s
- 效能分數: 56/100
- 主要問題: 阻塊渲染 10.5s
```

### 部署後 (預期)
```
移動設備:
- FCP: 6-7s (↓ 30-40%)
- LCP: 8-9s (↓ 20-30%)
- 效能分數: 70-75/100 (↑ 25-34%)
- 阻塊渲染: 5-6s (↓ 50%)
```

### 最終目標 (完整優化)
```
移動設備:
- FCP: 2.5-3.5s (↓ 70%)
- LCP: 3.5-4.5s (↓ 60%)
- 效能分數: 90+/100
```

---

## 🔍 問題排查指南

### 如果 FCP 仍然很慢 (> 6s)

檢查清單：
1. [ ] vercel.json 頭部是否已正確配置
2. [ ] 內聯 CSS 是否在 HTML 中（DevTools → Elements）
3. [ ] 字體是否正在被加載（DevTools → Network）
4. [ ] 是否有其他阻塊渲染的資源（DevTools → Lighthouse 診斷）

解決方案：
```html
<!-- 檢查是否在 <head> 中看到內聯 CSS -->
<head>
  ...
  <style>:root{--ink:#17201b;...}</style>
  ...
</head>
```

### 如果 LCP 仍然很慢 (> 5s)

檢查清單：
1. [ ] 字體是否在 11 秒之前加載
2. [ ] Hero 文本是否是 LCP 元素
3. [ ] 是否有大型圖片需要優化

查看 LCP 元素：
```javascript
// Chrome DevTools Console
new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log('LCP:', entry.element, entry.renderTime || entry.loadTime);
  });
}).observe({entryTypes: ['largest-contentful-paint']});
```

### 如果快取沒有生效

檢查快取頭：
```bash
# 使用 curl 檢查頭部
curl -I https://nchufreshman.hyjdevelop.com/
# 應該看到: Cache-Control: public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800

curl -I https://nchufreshman.hyjdevelop.com/chunks/xxx.js
# 應該看到: Cache-Control: public, max-age=31536000, immutable
```

---

## 📈 性能監控

### 設置 Vercel Analytics

1. 訪問 Vercel Dashboard
2. 選擇項目 `nchufreshman`
3. 進入 Settings → Analytics
4. 啟用 Web Analytics
5. 添加自訂事件跟蹤（可選）

### 監控 Core Web Vitals

使用 Google Search Console：
1. 訪問 https://search.google.com/search-console
2. 選擇屬性
3. 進入 Experience → Core Web Vitals
4. 監控移動和桌面版本的改善

### 自訂監控腳本

可在 `vercel.json` 中添加分析代碼：
```javascript
// 在頁面中添加
<script>
window.addEventListener('load', () => {
  const perfData = window.performance.timing;
  console.log('FCP:', perfData.responseEnd - perfData.navigationStart);
  console.log('LCP:', /* 需要 PerformanceObserver */);
});
</script>
```

---

## 🎯 後續行動（如果改善不符預期）

### Option A: 進階診斷
1. 使用 Chrome DevTools Performance 標籤記錄
2. 分析每個任務的時間
3. 查找最耗時的操作
4. 使用 Profiler 識別熱點

### Option B: Phase 3 優化
- 實施圖片優化（WebP、壓縮）
- 添加虛擬滾動用於 FAQ 列表
- 實施 Service Worker 快取

### Option C: 性能預算
```json
{
  "bundles": [
    {
      "name": "main",
      "maxSize": "100kb"
    },
    {
      "name": "fonts",
      "maxSize": "50kb"
    }
  ]
}
```

---

## 📝 測試記錄範本

部署後，請記錄以下信息：

```markdown
## 部署測試記錄 - [日期]

### 部署信息
- 部署時間: [時間]
- Commit SHA: [SHA]
- Vercel 部署 URL: [URL]

### Lighthouse 測試結果

#### 移動設備 (平均 3 次運行)
- FCP: [秒]
- LCP: [秒]
- TBT: [毫秒]
- CLS: [值]
- 效能分數: [分數]/100

#### 桌面版 (平均 3 次運行)
- FCP: [秒]
- LCP: [秒]
- TBT: [毫秒]
- CLS: [值]
- 效能分數: [分數]/100

### 改善對比
- FCP 改善: [%]
- LCP 改善: [%]
- 效能分數改善: [分數]

### 觀察到的問題
- [問題 1]
- [問題 2]

### 後續建議
- [建議 1]
- [建議 2]
```

---

## 🔗 快速連結

- [本地項目](c:\Users\charl\Desktop\HYJdevelop專案\nchufreshmanweb)
- [Vercel 部署](https://vercel.com)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Chrome DevTools](chrome://devtools)
- [GitHub Repository](https://github.com) (如適用)

---

## 📞 支持資源

遇到問題時參考：
- [Next.js 文檔](https://nextjs.org/docs)
- [Vercel 指南](https://vercel.com/docs)
- [Web.dev](https://web.dev)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)

---

**最後更新**: 2026-08-24
**狀態**: 待部署
**預計完成時間**: 部署後 24 小時內
