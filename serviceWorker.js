const staticMyLibrary = "my-Library-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/Image/Book1.jpg",
  "/Image/Book2.jpg",
  "/Image/Book3.jpg",
  "/Image/Book4.jpg",
  "/Image/Book5.jpg",
  "/Image/Book6.jpg",
  "/Image/Book7.jpg",
  "/Image/Book8.jpg",
  "/Image/Book9.jpg",
  "/Image/Book10.jpg",
  "/Image/Book11.jpg",
  "/Image/Book12.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMyLibrary).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});