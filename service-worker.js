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
  "/build/precache-manifest.993d07ddaba35a8c5488e186447bbaf8.js"
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
    "revision": "ec67faab7cdc47e525120a1d22af12e4"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "e395914ba4a9f2edd2d4a4e6aeff00d3"
  },
  {
    "url": "bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html",
    "revision": "f7df13bbb2507e73a1f0ec92f4de163a"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "9934b0ddf674471b7e7951a67900bcc7"
  },
  {
    "url": "category/codepen.html",
    "revision": "4689e2a105a0beb1191123bbe0b1e10b"
  },
  {
    "url": "category/css-component.html",
    "revision": "20d7be14c9a62f946980104a637f0ec9"
  },
  {
    "url": "category/css-template.html",
    "revision": "39ced7155fbd7c32448565b79d07e0a7"
  },
  {
    "url": "category/css.html",
    "revision": "88d10fd0b24e36452a067a6687e72e5f"
  },
  {
    "url": "category/github.html",
    "revision": "e29c645666d755ce1952db16b212bf77"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "40a72b5b80fccc5ddc06b8e10ed9b4bf"
  },
  {
    "url": "category/javascript.html",
    "revision": "fdb56ab0f6ec684a89d4248215ba39d4"
  },
  {
    "url": "category/medium.html",
    "revision": "5a11ed5394d8bb62f17582388b1c40e3"
  },
  {
    "url": "category/php.html",
    "revision": "10f04b1c54c475bacc518432ed2a8158"
  },
  {
    "url": "category/symfony.html",
    "revision": "83275c66523f643560d947a6ef635168"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "d2a34dacbebe429723a9fb7147425dd6"
  },
  {
    "url": "category/vue-template.html",
    "revision": "a4461ecd65018f28be0e4e51aac72ea4"
  },
  {
    "url": "category/vuejs.html",
    "revision": "71ccea964a0792d7fd4d7f19fa764b7b"
  },
  {
    "url": "category/webpack.html",
    "revision": "77458b00e16e80feb65f9590fc6731f7"
  },
  {
    "url": "category/wordpress.html",
    "revision": "33baa761e174ff7ed847aba381cb2480"
  },
  {
    "url": "css/codepen/2019/03/27/codepen-solutions.html",
    "revision": "8ac3219a04efcf190680a49356a99ce2"
  },
  {
    "url": "css/codepen/2019/07/11/codepen-shots-for-practice.html",
    "revision": "96385eb31a62dd809d9d6e8cddaeaa25"
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
    "revision": "f5cef7566ebacf6a24dee7a081d5e852"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "6921848c0791e3bbb30ca49f3b7fc316"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "80d13140dc799252e5ba43b02d7a0047"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "ab8df80e0b611c1b153e96c31dd14e1c"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "a38de0045465424582d45af1d8a0dacf"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "e955772502b2e2403d30755792bc6635"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "0b699f89e9166c0b7999eba52b754813"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "cfd555299fd15ebaca21d48e88e8d2cb"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "753f189305723156f8c8b6fcfa2c9c11"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "532bfddb44d6100f889908bc7a80c92c"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "b8014f1def1b54adfc43aaf935d4f14a"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "4532174c30aed360b1d0c0062afe499e"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "bd12a75f3d3410be6b747c3dfe09e7f6"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "7a424ea32090257be29fd0d2316f9d42"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "bffe557a2934ccc44ee536df21cede16"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "b36d4255cf9488d52faa0aeb3024f63d"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "1aaba5f8cb4ff7481cf91f0677158b2c"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "cd7fd0752ad16ce57774c86f416feacf"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "888da3ef1e9aa3875c34396e1341c69e"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "767aca67c297a6e8ca7c30faf7899f79"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "65cd7dce840674c50363a1f352b46680"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "d690e5595f5046bd3308a485027d28d5"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "a55cea4a7fb2a700e3e6531b71ba5422"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "1545030bf0b8c938d797c0afea69abfd"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "409ff34d9fefcb149058f0f21f454f08"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "cccb37a18c2c0234cfe12b0d7c824f77"
  },
  {
    "url": "projects/index.html",
    "revision": "3422be926017a06dda504ae9a5985ee1"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "c93161d493dd63a4234ef75f8b4e28c5"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "527f5f88d7599b96818404764e89ab1b"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "320ef768bf9e377e0ee158209c756c41"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "f7a17d39625deeb367ef3b9b4d7f5854"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "6ca176c9dfc088fc47c58bee8770693e"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "db0f07a312eb210b78d6d148e19c7304"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
