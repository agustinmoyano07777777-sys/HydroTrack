const CACHE_NAME = 'hydro-v1';

// Instalación básica
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Activación
self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Manejo de peticiones (necesario para PWA)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
