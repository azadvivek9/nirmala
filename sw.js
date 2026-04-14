const cacheName = 'nirmala-v1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  // Yahan apni CSS aur JS files ka path daalein
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
