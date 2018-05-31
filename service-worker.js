importScripts("./precache-manifest.cd46c0e87697b3b4ebb74bd118bddd02.js", "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

// Whether or not the service worker should skip over the waiting lifecycle stage.
workbox.skipWaiting()
// Whether or not the service worker should start controlling any existing clients as soon as it activates
workbox.clientsClaim()

// change these default names by altering all or some of the values
// https://developers.google.cn/web/tools/workbox/modules/workbox-core
workbox.core.setCacheNameDetails({
  prefix: 'retail'
})

// A caching strategy is a pattern that determines how a service worker generates a response after receiving a fetch event
// cachestrategies:https://developers.google.cn/web/tools/workbox/modules/workbox-strategies
// routing:https://developers.google.cn/web/tools/workbox/modules/workbox-routing
workbox.routing.registerRoute(
  /\/sw-register\.js/,
  workbox.strategies.networkOnly()
)

workbox.routing.registerRoute(
  'https://static.mlinks.cc/scripts/dist/mlink.min.js',
  workbox.strategies.staleWhileRevalidate()
)
// determine when and how long a file is cached as well as serve it to the browser without going to the network
// https://developers.google.cn/web/tools/workbox/modules/workbox-precaching
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

