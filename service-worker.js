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
  "/build/precache-manifest.eeb881a3096e3b8e352819e8f3ab338c.js"
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
    "url": "blog/index.html",
    "revision": "7fc81115db1f2e38b2f8de15391f2d56"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "4f4ff02fec9bb022e77c6cf804d71373"
  },
  {
    "url": "bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html",
    "revision": "40cd7ba2207c4f7f407839fddb726d40"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "390127a67a4e9249333e7aa4e89f2c27"
  },
  {
    "url": "category/codepen.html",
    "revision": "dc3c7e375661938906c546c9d3245432"
  },
  {
    "url": "category/css-component.html",
    "revision": "7fde13d4c4a271a8adcc97adcfe393ac"
  },
  {
    "url": "category/css-template.html",
    "revision": "8c54b1ba10744d7fe8034c0e0eaa948e"
  },
  {
    "url": "category/css.html",
    "revision": "4569c9fbb4440d476d351e04fe48ddcd"
  },
  {
    "url": "category/github.html",
    "revision": "a4add33deba55bfdefffff997a1d3457"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "98c075d862b611e095887e18a514c9ae"
  },
  {
    "url": "category/javascript.html",
    "revision": "7e232042e756338cc34808604762f6df"
  },
  {
    "url": "category/medium.html",
    "revision": "d07ae6fd1c98057c3bf0fd2e6d00c225"
  },
  {
    "url": "category/php.html",
    "revision": "b604d03a2c0abc055e81c923f8d047d5"
  },
  {
    "url": "category/symfony.html",
    "revision": "b2bb8d5d47c8372145ff5f0d1925c9c1"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "f4e9f4b8fcf5f5b216c13886e3848de2"
  },
  {
    "url": "category/vue-template.html",
    "revision": "08d0f130ada2facfe7ad34e5021635bf"
  },
  {
    "url": "category/vuejs.html",
    "revision": "cd8d0210c9cd3b6632a86a842334026d"
  },
  {
    "url": "category/webpack.html",
    "revision": "6646f0cf35d6acbc545e8836f7bd4703"
  },
  {
    "url": "category/wordpress.html",
    "revision": "836e89af01ca4dd31fd40ba989da55ce"
  },
  {
    "url": "css/codepen/2019/03/27/codepen-solutions.html",
    "revision": "bb8f39165b1bd8631e73fb0a356fce18"
  },
  {
    "url": "css/codepen/2019/07/11/codepen-shots-for-practice.html",
    "revision": "92ee6017fcb803e49161fc9b1fb9e311"
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
    "url": "img/assets/disjfa_mail.png",
    "revision": "30cfd29f90caeb352517d0334e4bd71f"
  },
  {
    "url": "img/headers/arcade-sprites.png",
    "revision": "8e1b1eb8d3064ae97208eb7ab587b079"
  },
  {
    "url": "img/headers/ezra-jeffrey-77199.jpg",
    "revision": "713602cdb1167ef860711fdfb6d4d343"
  },
  {
    "url": "img/headers/header-codepen-shots-for-practice.jpg",
    "revision": "7acdeea5362ef18d1fd696e033bed879"
  },
  {
    "url": "img/headers/header-codepen-solutions.jpg",
    "revision": "fc2969318f0224c4a73dcbbd7a5940ce"
  },
  {
    "url": "img/headers/kevin-364843.jpg",
    "revision": "e117e39222aa1d75f4783e9c03076708"
  },
  {
    "url": "img/headers/photo-1466096115517-bceecbfb6fde.jpg",
    "revision": "c1ec3849610a2c1285c3fc9624ec20f6"
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
    "url": "img/headers/photo-1556779914-c46d00d4d8de.jpg",
    "revision": "12478aa6efb44dc7d5867f196bf4d4fc"
  },
  {
    "url": "img/headers/photo-1562447574-797880741dd1.jpg",
    "revision": "267da47fb6e64c2c678f99d3a17ec228"
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
    "revision": "22b77b9af168046ffc6bc1c3810a8665"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "f2e18617c17968b0f55b99544025ac6f"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "1892d19549a322a84874635b8c9f1b07"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "cd7ed0c6a5bddc0d39fa293739c2c30d"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "eb1b07677561e5a377804cecddfb720d"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "e60040daf0bb6cb7d255fc5a4cd46de5"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "91b1931d771c79af88e8cd6d6ecbec61"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "79b3a5e9288aafef0bc494ba343893c4"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "b30076f0c76a4209e40b9cfcf14da939"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "220ff582f8679be56fc78a8eb80387c3"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "00f8d74d3f559f2b3dc47ae4e0299f89"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "e6517899af13ed2a6bd59f52fc7477a7"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "4d1d04e0967713ee753b1df971d71751"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "2fedc46a3e56450891d3c37c4f6904e8"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "29325f2072246e294645b64f2adbc30d"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "b3a8508124364ae4cd42f6ed080849e9"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "6fd67c7be091848da0435e056a32364e"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "f3b43d28b9affc4b7d670d7c31cf1090"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "7804349a42814075ac3ec09e0715d895"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "64ad203b8bbf75d363533c5e9fb55218"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "b210cb74d2808a2ff77f938fba0cf41d"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "b2863e1f4b6f8519ea884669fbb35574"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "0bd6667b4b2bb96bce2db5202be651d4"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "53a6bedf65b37df331725ea915254817"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "1d73a49b18bd7f60d44a4254c144df61"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "0e53a7d5f66102ddc7f4237dc1620076"
  },
  {
    "url": "projects/index.html",
    "revision": "4ffdab45a9c92830b212d73289e741b6"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "7739c2d1b11a9c733772298450719146"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "a2d869a727e440f4da9c65e06d75f3cb"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "73a7cf15fa909b5d04fa8db16272877d"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "1931cd5893bfbdea75dd48c2be5dc715"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "584ad0ec4d8b7f505245b7fa121ef838"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "783f8eb44c7de24d93984cf846b3e05a"
  },
  {
    "url": "symfony/php/2019/12/02/mailing-with-symfony.html",
    "revision": "7c5905c2c6f798bd4c94bdc908904669"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
