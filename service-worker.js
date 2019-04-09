/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

importScripts(
  "/build/precache-manifest.c2ed1c516ce71501e6a01be3ba256e22.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bloasdasdg/index.html",
    "revision": "d1ac25debe8e4e669a3665d892c4b699"
  },
  {
    "url": "blog/index.html",
    "revision": "3fc962ddb21e1bbe9c04e106974abcad"
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
    "revision": "0d498f42d587621f6be30fcc95007b2f"
  },
  {
    "url": "build/main.js",
    "revision": "47c6f3e9745f229235b6393c33202a5b"
  },
  {
    "url": "build/precache-manifest.df333e1204e1433ccb007a9414167d4c.js",
    "revision": "df333e1204e1433ccb007a9414167d4c"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "2f0489be94992d23bed5ac1b225aa196"
  },
  {
    "url": "category/css-component.html",
    "revision": "200485993170c093b6d7fd1b6537e1a7"
  },
  {
    "url": "category/css-template.html",
    "revision": "256f4b7371cddcebbbd7e872e49a7e24"
  },
  {
    "url": "category/css.html",
    "revision": "c8734ec33cd147a9ea8a6bb84d71cc99"
  },
  {
    "url": "category/github.html",
    "revision": "803e7b45fedfb29f0cf66c8605087afe"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "7c392ce48d4acdee6767d67584c6ec82"
  },
  {
    "url": "category/javascript.html",
    "revision": "b5200d414f1266c1933fc2ad583c861f"
  },
  {
    "url": "category/medium.html",
    "revision": "07a733b0c5276f06c793553f7d83b599"
  },
  {
    "url": "category/php.html",
    "revision": "4639c2d790e1c5652598e06df5b04399"
  },
  {
    "url": "category/symfony.html",
    "revision": "40f6e44a62d215397928e4e58e9d2577"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "be26eb26061371d5d57ca89959ff080c"
  },
  {
    "url": "category/vue-template.html",
    "revision": "75db36fcdbd852e520c7843edd630919"
  },
  {
    "url": "category/vuejs.html",
    "revision": "f1c3defd19b263a43b3de8eb09f02492"
  },
  {
    "url": "category/webpack.html",
    "revision": "55006ef45dadb4e25b0e4138d756d461"
  },
  {
    "url": "category/wordpress.html",
    "revision": "7ad924b1d86286f302333ceb882ed155"
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
    "revision": "79069b87ea80404964e6cd81a61b38e7"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "f3d77489b75e69b5055bd31214f1ce2c"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "19a7424ebd3c7897bd6efb6955fcad32"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "454013cf5a9d8c207e684d3a4de4cf90"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "a05c7a4974072f20b08e0b0fd10eaa38"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "193b10997359a5e20fd1b122636c6319"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "dfedf14874f19fad8234700a3a7468e0"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "5eac9db3cb811e7a176ef7514b007d9b"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "ed3d4cfaa9b180173e16432f6e343078"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "bdee6ecf9f55a06ca484bedfa13c72f7"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "ca1ca662c929503d496f913c306f1756"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "ec3de7c1e06dc507220ecd3f46f02489"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "bf185e84028d0992f5d7948a0ae62d28"
  },
  {
    "url": "medium/webpack/2017/11/29/lets-webpack-encore.html",
    "revision": "1563b05edad0d30545ca8c5a5f0106ba"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "226f76c84cc3a42296746549e272779e"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "b15189b278fdf181a61bb5699d84d18d"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "739bda5f7617010571f8b2dac9b65b44"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "bb2b990a2fc8c332cc549e63a6de1623"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "3c937c6ac11f3ff5457a3912dc7bd349"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "8a3b2c2d76dc4b70523e79a27501df20"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "a55003e9e740687fe0bce01674b51776"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "9b949cdb99d9a27b9f417e1e224e53a0"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "48d8e23bce5b0ab2774835285ec51df5"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "ff5f405d4b6c2c8182ed96a8499304c1"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "c6f8fc044fb2f11fcd6f50eded6d966f"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "7e9cd94ed05a3a0acddc45e8d556214b"
  },
  {
    "url": "service-worker.js",
    "revision": "e5f2af77b87fbd1d40d269bfd23c6248"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
