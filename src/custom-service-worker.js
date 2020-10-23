importScripts("./ngsw-worker.js");

(function () {
	"use strict";

	self.addEventListener("notificationclick", (event) => {
		// if (!event.action) {
		// 	clients.openWindow(event.notification.data.url);
		// 	return;
		if (event.action == "calandar-action") {
			clients.openWindow(event.notification.data.calender);
		}
		const urlToOpenIfTabOpen = event.notification.data.urlForSameSite;
		const urlToOpen = new URL(event.notification.data.url, self.location.origin)
			.href;

		const promiseChain = clients
			.matchAll({
				type: "window",
				includeUncontrolled: true,
			})
			.then((windowClients) => {
				let matchingClient = null;
				for (let i = 0; i < windowClients.length; i++) {
					const windowClient = windowClients[i];

					let u1 = new URL(windowClient.url);
					let u2 = new URL(urlToOpen);
					console.log(u1.hostname, u2.hostname);
					if (u1.hostname == u2.hostname) {
						matchingClient = windowClient;
						break;
					}
				}

				if (matchingClient) {
					matchingClient.focus();
					matchingClient.navigate(urlToOpenIfTabOpen);
					return;
				} else {
					return clients.openWindow(urlToOpen);
				}
			});

		event.waitUntil(promiseChain);
	});
	console.log("hello from custom service worker");
})();
