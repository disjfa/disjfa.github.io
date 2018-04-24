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
    "url": "bloasdasdg/index.html",
    "revision": "e9f0a3983ae9c492f8aeda834cb837cb"
  },
  {
    "url": "blog/index.html",
    "revision": "ef66b5cf3513f7b6947751d27b2f86a3"
  },
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
    "revision": "9567340e32f7975b234ccc3e0505d738"
  },
  {
    "url": "build/main.js",
    "revision": "38bd6ece7a9b6c81878b07039e1d3962"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "5fd476a5d95123562234005a4b127626"
  },
  {
    "url": "category/css-component.html",
    "revision": "d2cbc4738456f70f3f49f54d0886bcea"
  },
  {
    "url": "category/css-template.html",
    "revision": "fe19c18638f875e958287e65c9c6727a"
  },
  {
    "url": "category/css.html",
    "revision": "c2d44745c598d35b3a47e492d02c8d73"
  },
  {
    "url": "category/github.html",
    "revision": "09f804fcc06dcecb688a9b1327955017"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "628997e1dc8cbdbd20b9458e536df25e"
  },
  {
    "url": "category/javascript.html",
    "revision": "a25bb4c2b16d8f721520286a34e04308"
  },
  {
    "url": "category/medium.html",
    "revision": "2e547cc7aa2027b0c1923313d8470ec8"
  },
  {
    "url": "category/symfony.html",
    "revision": "4587013a7446b2582bafaec09e0ca3e8"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "3d96d37477643a472e9ee7ef65fe4363"
  },
  {
    "url": "category/vue-template.html",
    "revision": "d825e39c665699a32faff8a95193d0b0"
  },
  {
    "url": "category/vuejs.html",
    "revision": "c3ffef587331084512a3bfb91d200923"
  },
  {
    "url": "category/webpack.html",
    "revision": "75fcfa0737830b7eb41cc733514f77f0"
  },
  {
    "url": "category/wordpress.html",
    "revision": "e8f15e857e921eb9a77bb9905e5e9027"
  },
  {
    "url": "icon/android-chrome-144x144.png",
    "revision": "99c50ae4a2ceb645080de900b9d1f76e"
  },
  {
    "url": "icon/android-chrome-192x192.png",
    "revision": "a419d125b728ab1b92b3dcc0217dbb6e"
  },
  {
    "url": "icon/android-chrome-256x256.png",
    "revision": "cc767a411efe4a8fbd09154f830e1ac6"
  },
  {
    "url": "icon/android-chrome-36x36.png",
    "revision": "d99dbc12f62b6acd297cffa4b6aaf11e"
  },
  {
    "url": "icon/android-chrome-384x384.png",
    "revision": "e2ee7141bcad4d3672b678c4b280b92c"
  },
  {
    "url": "icon/android-chrome-48x48.png",
    "revision": "3111ec1985eae79bcd16b1a0916b4bef"
  },
  {
    "url": "icon/android-chrome-512x512.png",
    "revision": "bd4f1458e6a79a285a40fb805f534cad"
  },
  {
    "url": "icon/android-chrome-72x72.png",
    "revision": "f8f4e1a5a0cc7ebb928ac8565f03f1a0"
  },
  {
    "url": "icon/android-chrome-96x96.png",
    "revision": "2477ab32aa31f0c317e462fb4aac5056"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "3ffa58cf2ea8ef48e38d95330bd5b1ec"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "f8e31516b5d5700679c3283eae3211d1"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "99c50ae4a2ceb645080de900b9d1f76e"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "95954a2b428cee89888d2e4900cdd05b"
  },
  {
    "url": "icon/apple-touch-icon-167x167.png",
    "revision": "3764884720108012d0af0e3b423eff9e"
  },
  {
    "url": "icon/apple-touch-icon-180x180.png",
    "revision": "b3a0b3af84a739659f727d711623c0f8"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "58f2e61ed44ec4b0d7f4419de34bc217"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "f2b9fe49b6392dbcb07e855341e85c3f"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "f8f4e1a5a0cc7ebb928ac8565f03f1a0"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "05c27ab5adfaca4e3c304ecc0dbefed8"
  },
  {
    "url": "icon/apple-touch-icon-precomposed.png",
    "revision": "b3a0b3af84a739659f727d711623c0f8"
  },
  {
    "url": "icon/apple-touch-icon.png",
    "revision": "b3a0b3af84a739659f727d711623c0f8"
  },
  {
    "url": "icon/apple-touch-startup-image-1182x2208.png",
    "revision": "1370977e0ec528663e17158d01ed63c0"
  },
  {
    "url": "icon/apple-touch-startup-image-1242x2148.png",
    "revision": "172bdb4a96d97d47a37cec9e9ad7e918"
  },
  {
    "url": "icon/apple-touch-startup-image-1496x2048.png",
    "revision": "5bc6e4d89076e5041f1be10eb8a790fd"
  },
  {
    "url": "icon/apple-touch-startup-image-1536x2008.png",
    "revision": "77ac71313e66cdcd2fca09ef75df4149"
  },
  {
    "url": "icon/apple-touch-startup-image-320x460.png",
    "revision": "255d386d2f63277aec44109e6ed6e127"
  },
  {
    "url": "icon/apple-touch-startup-image-640x1096.png",
    "revision": "832f630cae6fa85af53cb69df7e64348"
  },
  {
    "url": "icon/apple-touch-startup-image-640x920.png",
    "revision": "6230c8630510b8eb52000db21bc7dccf"
  },
  {
    "url": "icon/apple-touch-startup-image-748x1024.png",
    "revision": "6eb6566c03e48af215484e45ca60e9e0"
  },
  {
    "url": "icon/apple-touch-startup-image-750x1294.png",
    "revision": "1765caa80e1da55e86be87bca2967c06"
  },
  {
    "url": "icon/apple-touch-startup-image-768x1004.png",
    "revision": "f1c571b4631ddb7dace0d7d1ad1da5cc"
  },
  {
    "url": "icon/coast-228x228.png",
    "revision": "d1fb6257eddf004db7c9891f2b8a0d33"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "eddc5945c5e8fb60f9dd55ee6ff729e1"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "e0d4b3258114cf8fe4e27f114408819f"
  },
  {
    "url": "icon/firefox_app_128x128.png",
    "revision": "81f05adbd1070bed8301589046e10f7a"
  },
  {
    "url": "icon/firefox_app_512x512.png",
    "revision": "f33c1b96de15505c14f14dbbf8de62d6"
  },
  {
    "url": "icon/firefox_app_60x60.png",
    "revision": "434e112166db463c3802aa01dd401e3e"
  },
  {
    "url": "icon/index.html",
    "revision": "b813a2077cd8f8c6a50c1bb9cccf2ff6"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "99c50ae4a2ceb645080de900b9d1f76e"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "8951a8a1977323873d0784432b28d561"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "bf18d44712efa0a772455f08a55c8bca"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "b85f420a9385364665979a2186e52c5b"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "e77518c17ab6668206b146dfdb35282c"
  },
  {
    "url": "icon/yandex-browser-50x50.png",
    "revision": "86e62417be781704cf14cdbb192dfcca"
  },
  {
    "url": "img/headers/ezra-jeffrey-77199.jpg",
    "revision": "713602cdb1167ef860711fdfb6d4d343"
  },
  {
    "url": "img/headers/kevin-364843.jpg",
    "revision": "e117e39222aa1d75f4783e9c03076708"
  },
  {
    "url": "img/headers/yingpis-kalayom-133680.jpg",
    "revision": "99041e2aa1ec50ecd3286eef8dd4281c"
  },
  {
    "url": "img/logo.png",
    "revision": "a04504eb6dddf0617b24c4875ecd55c5"
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
    "url": "img/projects/fluent-bootstrap.png",
    "revision": "c3930fa86775482b29163253e542240c"
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
    "url": "img/projects/hella-hero.png",
    "revision": "0d518a58923a500698e2a2bf9f60cc81"
  },
  {
    "url": "img/projects/lyara-menu.png",
    "revision": "49d8d87d82c7787931068da30066613f"
  },
  {
    "url": "img/projects/refero-list.png",
    "revision": "fa30bb816639396037127b45ec5322ba"
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
    "url": "img/projects/vuetify-sidebar-template.png",
    "revision": "c681f172415c8e61b8600235699ebf66"
  },
  {
    "url": "index.html",
    "revision": "6a2634dbe4719493467b93275bd78519"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "b5959c2d3b0422b64009159471045dcb"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "94bb4bfb259078991116f4b4ed578bc1"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "db9806f142917a4b9653f507a419ef25"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "8bac3f394c54161943c64e2a379c12e3"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "ce60a892313d1709e54048a14ca3e178"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "89e41d8c0813dbfa3700e3236b91f3fb"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "23ef950de57ad4cf3e5356937ea183d5"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "3970a973ec1537462d57ec7218c0b84e"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "3ddc2277c20343357a1f618d7ad46bbf"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "817556de335418fad9950eeb2224f168"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "b63b170d3a9bb5dca3cc73c44ddb4fae"
  },
  {
    "url": "medium/webpack/2017/11/29/lets-webpack-encore.html",
    "revision": "3ceddcac0d86b9dd4692e170e0288858"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "82df61a9b8a99f5c445da6aa2c337b36"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "18edbfc413d2d21790852a987aa62aeb"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "988b8662bd9aaef9e31e84f5a13e4a06"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "3a7432252de3beb2205a1b359efa7d08"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "163ee1fc43cddf8cb7d70fc163ba6efc"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "0196811894eb4d502eafec043114652e"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "3adb48a70c865a1e7b95a09f3c54abeb"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "e2a0626b16a79fb3fa9fe0cf1504f213"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "7cf485e9c4b153fb0df9c3cbd6f20ab6"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "43f70e0bcca4d2c0753806f5ead776c8"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "d5322f75bc216604dd4062ca9827c412"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "14830b1677c7d87940a05becde2ab169"
  },
  {
    "url": "sw.js",
    "revision": "6dd4727e714ff477616cfd320656a4b8"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
