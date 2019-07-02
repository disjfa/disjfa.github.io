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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/build/precache-manifest.5645b69f6de79349ad05d0125e8c81ec.js"
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
    "revision": "18b715dd44df2b192cec16eb576ec6b1"
  },
  {
    "url": "blog/index.html",
    "revision": "1286cf8e3749171c5ecb33b0057afe8e"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "153eab7ae8cf4319265fca056d5f8ba3"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "918f9c8d6a19d6e7ec3563b5ee783928"
  },
  {
    "url": "category/css-component.html",
    "revision": "6b092db12bf86fb0be3a105a86c59de5"
  },
  {
    "url": "category/css-template.html",
    "revision": "565c95f5debcf16f9faa98fcc8cf686a"
  },
  {
    "url": "category/css.html",
    "revision": "8b26029636c40a1a75639896856b9688"
  },
  {
    "url": "category/github.html",
    "revision": "4f92172d114062f2f6c6c9fa20f1081d"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "b0f2b637a1feeec0d999fa9f4dc75d25"
  },
  {
    "url": "category/javascript.html",
    "revision": "ecdeeccc4b569730d771e7bae8a229e1"
  },
  {
    "url": "category/medium.html",
    "revision": "03b5e25d6bb764fd5641ce7fc451c585"
  },
  {
    "url": "category/php.html",
    "revision": "3ff8980f71db311349ea9873075ffd13"
  },
  {
    "url": "category/symfony.html",
    "revision": "4bf35c610069b4020380402fe83fb8ef"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "a254a8c9c13b8f5cac9c4b584e5d3986"
  },
  {
    "url": "category/vue-template.html",
    "revision": "b87c9a4682a387a4cfb5ed12997fe844"
  },
  {
    "url": "category/vuejs.html",
    "revision": "9f675e8fbdbe16f912a02af3fe22911f"
  },
  {
    "url": "category/webpack.html",
    "revision": "cc3b973fef45570be59e1c9032e73b7f"
  },
  {
    "url": "category/wordpress.html",
    "revision": "2e20dac32ce95683b03aabd73b8aa1ba"
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
    "url": "img/headers/photo-1527168027773-0cc890c4f42e.jpg",
    "revision": "daf9bc6a551e1687ac1a321b1033c852"
  },
  {
    "url": "img/headers/photo-1543966888-7c1dc482a810.jpg",
    "revision": "c58844405da2526de8ddf97609f77793"
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
    "url": "img/projects/vue-minesweeper.png",
    "revision": "55f142fca364a4d4e99ed8c8a6d6f90d"
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
    "revision": "52cf4654f6bbde6e2156887d62f5d486"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "8d9ac717cea104fb731db1c93b1e79f1"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "dfcf60a184665738748d7cc4aaebbd5b"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "c67f01c24eac2f1ef010671b9440ac66"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "e15cbd92ca3fae388c1170a90abac933"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "db1fbeab1f7356ebb165e865b8b594b9"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "02d1ac6fb4ae4a2ee38dcf5f75939239"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "441b5b8ab25fae10f0591c43e2101e46"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "8ee5fe00354197af2f072830fc27a91e"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "2ba55c41f5acfd4554abc047ab799971"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "58601898ceb4990c3e36ffa348215438"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "d3912da1987ecd3c244f70e76b53a025"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "0a6ebe4d8d3862f8439282fd42a35b0d"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "8e6b2ef76e1c3ba60f18547b3b6a196d"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "43c84471ac99531a5dcc8962a05eb4f3"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "cb75fc3650d1ef2df8517110d37faa03"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "f3879247b0b1c83db0bf989348810889"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "631e2e36de3ce03119f5b6543c3eb030"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "6900a4b32f33838a7dad7111f35e7f65"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "ae58b485c27ac9d85a4b45f8e5a57c08"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "5bdcc3a9f19a8286adc94910df179a0b"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "6475196a773c18386d4fb149f8886899"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "fa2c622f2c4c2d1bc972ca7dcad780bd"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "fea73a1a3202cf8b1fc56336d016c927"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "bc245fc555bc556d6559ac87b54478dc"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "917d39d61b7c12e76949d1565ede749d"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "e74cdce3a51c58c1167e1c8fdb0b782d"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "b01b00dd664c887b860658f084bb44c3"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "5a619d55904ce425f171c85e524793b4"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "7c646c53815c2b7d99125dea57852bfc"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "1edab7a61d6b5d7770cb26f55a2b9088"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "a860af403a62e1e3501d1834670ab671"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
