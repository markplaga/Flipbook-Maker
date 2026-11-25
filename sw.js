// Minimal installation service worker. No caching or changes to app requests.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {
  // Let the browser handle requests normally, including video and PDF assets.
});
