const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/main.js',
    '/css/spin.css',
    '/images/spinner-a.png'
    ];


//install service worker
self.addEventListener('install', evt =>
    {
    console.log('Service Worker Installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache =>{
            console.log('Caching Shell Assets');
            cache.addAll(assets);
            })
            );
     }
);

//activate service worker
self.addEventListener('activate', evt =>
    {
    console.log('Service Worker Activated');    
    }
);

//Fetch Event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
        );
    }
);

//add to homescreen
