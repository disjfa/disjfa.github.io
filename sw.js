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
    "revision": "c6fe8b12821c5001c44669a72c6fb460"
  },
  {
    "url": "blog/index.html",
    "revision": "31a4f63a08bfea471bb50b5a34ec96ad"
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
    "revision": "1a0b33eb735df45b8a4db74529fe4a44"
  },
  {
    "url": "build/main.js",
    "revision": "d3afe337e64c4a27b22a499f62be00e6"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "efc7e94fd9af10288cadea877eca8f3c"
  },
  {
    "url": "category/css.html",
    "revision": "d478786e8af4047feaecc1eeacdfc80b"
  },
  {
    "url": "category/github.html",
    "revision": "30894bdfffc4f1853acdfdd46c4eecac"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "e27f62125a9497cdec76c9e0a4393310"
  },
  {
    "url": "category/javascript.html",
    "revision": "9b35acdebeb87dd78129718756629e29"
  },
  {
    "url": "category/medium.html",
    "revision": "70e1e6a5e2ee8427f0a3660788b4c956"
  },
  {
    "url": "category/symfony.html",
    "revision": "46355782351f083c65a621c5b19ac20b"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "675e236adf1e8e29062dacd4ff12193a"
  },
  {
    "url": "category/vue-template.html",
    "revision": "80ae48d8dc7cf2b65a1625c8d8b86f9d"
  },
  {
    "url": "category/vuejs.html",
    "revision": "1849c9470931371b4ebdb1358a44ca30"
  },
  {
    "url": "category/webpack.html",
    "revision": "9c48b69100992b9f1a6c9309e4fd8af8"
  },
  {
    "url": "category/wordpress.html",
    "revision": "ad14aafacde92d51d8f1b2998d71c465"
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
    "url": "img/projects/lyara-menu.png",
    "revision": "49d8d87d82c7787931068da30066613f"
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
    "revision": "e0090391b111d3f4483464ab7790bae0"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "48f5db7a65d242db1d05345230d61f65"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "4a6769d2d861b1fd0241185eed4d640c"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "fc2f6883878bdc4dba7c77fc74beea4e"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "2b3647dd4f8ef6be9db7b95dc600e4eb"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "5b4cf3e0d875ed18b11b015ab5bf80f6"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "1821bfd3c50a8ac56d17795837c03463"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "1d509222a0108d3eda7da04799279705"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "63a08a08532f1b35f637dc8c7a0d30c8"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "ed22bc2dd19f6f88ca63d9ba80883f30"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "74ecf24a8a0103e05ccd5c40c93df2b3"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "49218e1accad1a3aac181cdf87a008f5"
  },
  {
    "url": "medium/webpack/2017/11/29/lets-webpack-encore.html",
    "revision": "18964e4d88a4649d105f6aa9038f403f"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "1e8250df28930bea2c26d7c6e05aa903"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "2ebade8a4b9647a8edde8dfcc0a0d8f5"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "9c5aa056936b4af2fb4211476a1d6f2f"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "0716a9c230bbfd11208be9670798b3d3"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "c786c8e478d6d0fcc2cdb78b5c82a1d9"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "91ff39eb5767c791b2b73b20f758bf78"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "c609ad152d39afd607b20ec579f571b6"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "050eb0d7ed465d4d862a9e99c0e8b124"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "9e8cf84a55f061df9589569ba3b109fe"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "683e8fd1a56aa508897037b80a98466f"
  },
  {
    "url": "sw.js",
    "revision": "cb22960406d898925bc9861ce5644ce6"
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
