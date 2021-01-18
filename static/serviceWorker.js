//This is the service worker with the Advanced caching

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const HTML_CACHE = 'html';
const JS_CACHE = 'javascript';
const STYLE_CACHE = 'stylesheets';
const IMAGE_CACHE = 'images';
const FONT_CACHE = 'fonts';
const CACHE = 'pwabuilder-offline';
const QUEUE_NAME = 'bgSyncQueue';

self.addEventListener('message', (event) => {
   if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
   }
});

const bgSyncPlugin = new workbox.backgroundSync.Plugin(QUEUE_NAME, {
   maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
   new RegExp('/*'),
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: CACHE,
      plugins: [bgSyncPlugin],
   })
);

workbox.routing.registerRoute(
   ({ event }) => event.request.destination === 'document',
   new workbox.strategies.NetworkFirst({
      cacheName: HTML_CACHE,
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 10,
         }),
      ],
   })
);

workbox.routing.registerRoute(
   ({ event }) => event.request.destination === 'script',
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: JS_CACHE,
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 15,
         }),
      ],
   })
);

workbox.routing.registerRoute(
   ({ event }) => event.request.destination === 'style',
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: STYLE_CACHE,
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 15,
         }),
      ],
   })
);

workbox.routing.registerRoute(
   ({ event }) => event.request.destination === 'image',
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: IMAGE_CACHE,
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 15,
         }),
      ],
   })
);

workbox.routing.registerRoute(
   ({ event }) => event.request.destination === 'font',
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: FONT_CACHE,
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 15,
         }),
      ],
   })
);
