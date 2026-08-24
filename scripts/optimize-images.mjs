#!/usr/bin/env node

/**
 * 圖片優化腳本
 * 轉換 PNG/JPG 為 WebP 格式以減少文件大小 30-50%
 * 
 * 使用方法:
 *   node scripts/optimize-images.mjs
 * 
 * 依賴:
 *   npm install sharp
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

async function optimizeImages() {
  console.log('🖼️  開始圖片優化...\n');

  const imageFiles = fs.readdirSync(publicDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('✅ 沒有找到需要優化的圖片');
    return;
  }

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const fileNameWithoutExt = path.parse(file).name;
    const webpPath = path.join(publicDir, `${fileNameWithoutExt}.webp`);

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      // 轉換為 WebP
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);
      const webpSize = (webpStats.size / 1024).toFixed(2);
      const savings = (((stats.size - webpStats.size) / stats.size) * 100).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   原始: ${originalSize} KB → WebP: ${webpSize} KB (節省 ${savings}%)\n`);
    } catch (error) {
      console.error(`❌ 轉換失敗: ${file}`);
      console.error(`   ${error.message}\n`);
    }
  }

  console.log('🎉 圖片優化完成！\n');
  console.log('提示：在 <Image> 組件中使用 WebP：');
  console.log('  <picture>');
  console.log('    <source srcSet="/image.webp" type="image/webp" />');
  console.log('    <img src="/image.png" alt="..." />');
  console.log('  </picture>\n');
}

optimizeImages().catch(error => {
  console.error('錯誤:', error.message);
  process.exit(1);
});
