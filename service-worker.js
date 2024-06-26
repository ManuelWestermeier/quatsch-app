const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v2");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/assets/index-8HvtRm0o.js",
            "/assets/index-DnbXvAQW.css",
            "/logo.jpg",
            "/manifest.json",
            "/service-worker.js"
        ]),
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})
