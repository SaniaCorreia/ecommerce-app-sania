// public/service-worker.js

// INSTALLATION CODE
self.addEventListener('install', event => {
    console.log('[Service Worker] Installed');
  
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/favicon.ico'
        ]);
      })
    );
  });
  
  // ACTIVATION CODE
  self.addEventListener('activate', event => {
    console.log('[Service Worker] Activated');
  
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => key !== 'v1').map(key => caches.delete(key))
        );
      })
    );
  });
  