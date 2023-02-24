
//Check cache storage in console
if ('storage' in navigator && 'estimate' in navigator.storage) {
  navigator.storage.estimate().then(estimate => {
    console.log(`Using ${estimate.usage/1000000} out of ${estimate.quota/1000000} MB.`);
  });
}



const CrisisControl = "Crisis-control-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "Pictures/EU-Logo.svg",
  "/Compare.html",
  "/Settings.html",
]


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CrisisControl).then(function(cache) {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(CrisisControl) {
      return Promise.all(
        CrisisControl.filter(function(CrisisControl) {
          return CrisisControl.indexOf(cacheVersion) != -1;
        }).map(function(CrisisControl) {
          return caches.delete(CrisisControl);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.open(CrisisControl)
        .then(function(cache) {
            return cache.match(event.request)
                .then(function(response) {
                    if (response) {
                        // console.log('Cache hit for : ' + event.request.url);
                    }
                    else {
                    	// console.log('Cache miss. Hence fetching from network for : ' + event.request.url);
                    }
                    var fetchPromise = fetch(event.request).then(function(response) {
                        cache.put(event.request, response.clone());
                        return response;
                    })
                    return response || fetchPromise;
                });
        })

    );
});


