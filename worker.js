const filesToCache = [
	"Aquarium.htm",
	"Aquarium.json",
	"Aquarium.png",
	"AquariumFavIcon_16x16.png",
	"AquariumFavIcon_192x192.png",
	"AquariumFavIcon_512x512.png",
	"AquariumGame.htm",
	"AquariumGame.js",
	"AquariumShare.png"
];

const staticCacheName = "aquarium-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});