'use client';

/**
 * Service Worker 客户端注册组件
 * 在浏览器中自动注册 Service Worker 以启用离线支持
 */

import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 检查浏览器是否支持 Service Worker
    if (!('serviceWorker' in navigator)) {
      console.log('⚠️  浏览器不支持 Service Worker');
      return;
    }

    // 注册 Service Worker
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ Service Worker 已注册');

        // 监听更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              // 新版本可用，提示用户
              console.log('🔄 新版本可用，请刷新页面');
              // 可以显示通知或提示
            }
          });
        });
      })
      .catch((error) => {
        console.error('❌ Service Worker 注册失败:', error);
      });

    // 监听 Service Worker 的控制权变化
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('🔄 Service Worker 已更新');
    });
  }, []);

  return null;
}
