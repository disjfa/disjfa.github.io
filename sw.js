importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/fonts/fontawesome-webfont.af7ae505.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "build/fonts/fontawesome-webfont.b06871f2.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "build/fonts/fontawesome-webfont.fee66e71.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "build/main.css",
    "revision": "ebdfb69608e058cf8106cc66e5633e9c"
  },
  {
    "url": "build/main.js",
    "revision": "8a57479895381107aae37307034230cd"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "e5714435d04a9d11d31a6b6359280d50"
  },
  {
    "url": "category/css.html",
    "revision": "6a16300410d8966c731fd4da716865ab"
  },
  {
    "url": "img/projects/10k-2016.jpg",
    "revision": "541221e6faa18ce0e8a33a8d8bbf4457"
  },
  {
    "url": "img/projects/bootstrap-tricks.jpg",
    "revision": "50acad7df508a9995ca4e0ac3f93719e"
  },
  {
    "url": "img/projects/dimme-jour.jpg",
    "revision": "c3c271b5eaf467accb346f4bb63c1421"
  },
  {
    "url": "img/projects/glynn-admin-symfony.jpg",
    "revision": "d3d61c36716a89f7fafed277ab1fc0b0"
  },
  {
    "url": "img/projects/glynn-admin.jpg",
    "revision": "86b4b8183bd96aed27da949e660e240b"
  },
  {
    "url": "img/projects/ryoko-headers.png",
    "revision": "afb123f7f2f71892a9e80eadd99d0db5"
  },
  {
    "url": "img/projects/vue-route-timeline.png",
    "revision": "041b52e4880fa94fbf2b837825fc695c"
  },
  {
    "url": "img/projects/vuetify-sidebar-template.jpg",
    "revision": "bfd8705a3fd2723d9896a3826307621f"
  },
  {
    "url": "index.html",
    "revision": "73a589d654f39950f102ff8f71a37ab8"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "5fe4b2b22e7ee0002319077b5610fe02"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "c7af6d5c24880bac4b71ec255947d149"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "d70f479167c1092f0bbe69bdf2b7c78d"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "dda46e2566ab7caf6062ef59634d9dfc"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "ac823aa7d2f529534f4d337d1d9a5086"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "965e463ef8ec80ee8788563b4e41de24"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "a735b152159b568b2f1a7b53d2090a05"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "ff4b1ef59598f6edaa490c46abb404a9"
  },
  {
    "url": "sw.js",
    "revision": "76d415ed210c89d84705b97ac4feb1ff"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
