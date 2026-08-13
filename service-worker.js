const APP_VERSION = "262";
const CACHE_NAME = `acf-set-pieces-v${APP_VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/campo.png"
];

const EXTERNAL_EXPORT_ASSETS = [
  "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js",
  "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cache.addAll(APP_SHELL);

      /*
        Le librerie export sono opzionali per l'installazione:
        se il CDN è momentaneamente irraggiungibile la PWA continua
        comunque ad aggiornarsi. Quando disponibili vengono cache-ate
        e restano utilizzabili offline.
      */
      await Promise.allSettled(
        EXTERNAL_EXPORT_ASSETS.map(async url => {
          const request=new Request(url,{
            mode:"no-cors",
            cache:"no-store"
          });

          const response=await fetch(request);

          if(
            response &&
            (response.ok || response.type==="opaque")
          ){
            await cache.put(request,response.clone());
          }
        })
      );
    })
  );
});

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith("acf-set-pieces-v") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request, { cache: "no-store" });

    if (response && response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (_) {
    return (
      await cache.match(request)
    ) || (
      await cache.match("./index.html")
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const networkPromise = fetch(request, { cache: "no-store" })
    .then(response => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cached || (await networkPromise) || new Response("", {
    status: 504,
    statusText: "Offline"
  });
}

async function cacheFirstExternal(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) return cached;

  try {
    const response = await fetch(request);

    if (
      response &&
      (response.ok || response.type === "opaque")
    ) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (_) {
    return new Response("", {
      status: 504,
      statusText: "Offline"
    });
  }
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const requestURL = new URL(event.request.url);
  const isSameOrigin = requestURL.origin === self.location.origin;

  if (!isSameOrigin) {
    if (EXTERNAL_EXPORT_ASSETS.includes(event.request.url)) {
      event.respondWith(cacheFirstExternal(event.request));
    }
    return;
  }

  const isNavigation =
    event.request.mode === "navigate" ||
    requestURL.pathname.endsWith("/") ||
    requestURL.pathname.endsWith("/index.html");

  if (isNavigation) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(staleWhileRevalidate(event.request));
});
