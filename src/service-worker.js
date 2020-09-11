workbox.precaching.precacheAndRoute([{
    "revision": "17ecfaee522eaf5b3ad9c9aa1b2973cc",
    "url": "/manifest.json"
}]);


workbox.routing.registerRoute('https://jsonplaceholder.typicode.com/todos/1', workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache',
}));

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const placeholderHandler = workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache',
});

workbox.routing.registerRoute('https://jsonplaceholder.typicode.com/todos/1', args => {
    return placeholderHandler.handle(args).then(response => {
        console.log("Online: Fetch was called successful");
        return response;
    }).catch(err => {
        console.log("no cache data");
    });
});

workbox.routing.registerRoute(
    new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
    workbox.strategies.catchFirst({
        cacheName: "googleapis",
        plugins: [
            new workbox.expiration.plugin({
                maxEntries: 30
            })
        ],
        method: "GET",
        catchableResponse: { statuses: [0,200] }
    })
);

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container
    divInstall.classList.toggle('hidden', false);
  });

  butInstall.addEventListener('click', () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    promptEvent.userChoice.then((result) => {
      console.log('👍', 'userChoice', result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      divInstall.classList.toggle('hidden', true);
    });
  });

  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
  });

