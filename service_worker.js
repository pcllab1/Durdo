const CACHE_NAME = 'durdo-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.dart.js',
  '/assets/*',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('push', event => {
  const data = event.data.json();
  const title = data.title || 'Competition Reminder';
  const options = {
    body: data.body || 'Your competition is starting soon!',
    icon: 'icons/icon_app.png',
    badge: 'icons/icon_app.png',
    data: data,
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

function scheduleNotification(userId, title, body, scheduledTime) {
  const notificationTime = new Date(scheduledTime).getTime();
  const currentTime = new Date().getTime();
  const delay = notificationTime - currentTime;

  if (delay > 0) {
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body,
        icon: 'icons/icon_app.png',
        badge: 'icons/icon_app.png',
        data: { userId }
      });
    }, delay);
  }
}

self.scheduleNotification = scheduleNotification;
