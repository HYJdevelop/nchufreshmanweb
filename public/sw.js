/**
 * Service Worker 註冊腳本
 * 在瀏覽器中启用 PWA 离线支持
 * 
 * 放置在 public/sw.js
 */

const CACHE_NAME = 'nchu-freshmen-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/hyj-nchuguide-mark.svg',
  // 静态资源自动缓存
];

// 安装事件 - 缓存关键资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Service Worker: 缓存关键资源');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️  Service Worker: 清理旧缓存', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 获取事件 - 网络优先，缓存回退
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 忽略 POST 请求
  if (request.method !== 'GET') {
    return;
  }

  // 缓存优先策略用于字体和图片
  if (
    request.url.includes('fonts.googleapis.com') ||
    request.url.includes('fonts.gstatic.com') ||
    request.url.match(/\.(webp|png|jpg|jpeg|svg|gif)(\?|$)/i)
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request)
          .then((response) => {
            // 缓存新的响应
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
            return response;
          })
          .catch(() => {
            // 离线时返回缓存或默认页面
            return caches.match(request);
          });
      })
    );
    return;
  }

  // 网络优先策略用于 HTML 和 JS
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        // 离线时返回缓存的版本
        return caches.match(request).then((response) => {
          if (response) {
            return response;
          }
          // 如果都没有，返回离线页面
          return caches.match('/index.html');
        });
      })
  );
});

console.log('✅ Service Worker 已注册');
