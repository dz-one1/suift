self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('store-admin-v1').then(cache => {
            return cache.addAll([
                '/',
                '/admin.html',
                'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== 'store-admin-v1') {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.url.includes('github.com') || 
        event.request.url.includes('googleapis.com') ||
        event.request.url.includes('cdnjs.cloudflare.com')) {
        // استخدم الاستراتيجية من الشبكة أولاً للخدمات الخارجية
        event.respondWith(fetch(event.request));
    } else {
        // استخدم الاستراتيجية من التخزين المؤقت أولاً للملفات المحلية
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        );
    }
});
