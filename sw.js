const CACHE_NAME = "nirmala-v1";

const urlsToCache = [
  "/nirmala/",
  "/nirmala/index.html",
  "/nirmala/manifest.json",
  "/nirmala/icon-192.png",
  "/nirmala/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
