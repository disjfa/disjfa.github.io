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
  "/build/precache-manifest.4496d7fc582659b23749c01524a68429.js"
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
    "revision": "26174f10edd19b42500a743d56dff8b1"
  },
  {
    "url": "blog/index.html",
    "revision": "c6b92b7aaf14e4e58d1fa5f1e740013e"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "2fb21876575983516b9d5b085336287e"
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
    "revision": "c4a0208d4c52cee70cd13f00b42c22c4"
  },
  {
    "url": "build/precache-manifest.4496d7fc582659b23749c01524a68429.js",
    "revision": "4496d7fc582659b23749c01524a68429"
  },
  {
    "url": "build/precache-manifest.c2ed1c516ce71501e6a01be3ba256e22.js",
    "revision": "c2ed1c516ce71501e6a01be3ba256e22"
  },
  {
    "url": "build/runtime.js",
    "revision": "a24e2bcce2ef6b00b4c7fa39d898f731"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "a5168623939f855c971f645489dd7561"
  },
  {
    "url": "category/css-component.html",
    "revision": "afaf33eb37cfbc5af517bfd1dd65e726"
  },
  {
    "url": "category/css-template.html",
    "revision": "316230dcf72762de98196b461b55b1e7"
  },
  {
    "url": "category/css.html",
    "revision": "800ff13ccd3bbef7803304b4a25a0ccf"
  },
  {
    "url": "category/github.html",
    "revision": "fe86316ba3086bb0c340f7ad33bff619"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "3c9a82eccbdb44f539d847adeafc3912"
  },
  {
    "url": "category/javascript.html",
    "revision": "09b180479dbdff2f2b568e603d01c7b3"
  },
  {
    "url": "category/medium.html",
    "revision": "e9ecf4dceeeea1615a5aca35c7b9ae6a"
  },
  {
    "url": "category/php.html",
    "revision": "b4bf51e733af101831d54ef229bb411b"
  },
  {
    "url": "category/symfony.html",
    "revision": "eeec5c95fe002967b99818b8fca7f145"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "a46f2ee4c634cfa0cc86dbd7fbde01eb"
  },
  {
    "url": "category/vue-template.html",
    "revision": "650d829743eca46bad0d13bd9040186f"
  },
  {
    "url": "category/vuejs.html",
    "revision": "228d5e50297ad48dbdb403669c918e97"
  },
  {
    "url": "category/webpack.html",
    "revision": "affeeaa4320c4ef2211fcd890a99dc02"
  },
  {
    "url": "category/wordpress.html",
    "revision": "55145e77b103b42681a54c9c86929fd2"
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
    "revision": "9e76faa9e1ba35c6c9922c03e28c6b22"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "081419493efe52f671e4b2c7d5c1dac6"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "20a9fd504225d815863dabc8ef301715"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "014eb0b2d925fbda2faceff5db40a572"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "9cda29c5683e979d40983faaf50dbd68"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "9a6490e797334d041aea980fc72873fa"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "00763ece2a720ae9a52bda5749737e06"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "d3ebff73c110451254fc89dd985c54df"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "3490e6f893da294b274afdc6f83b0ba6"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "1b38fcb5895aee87ab06e790d2ac18e8"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "f54a7902b7c3825e13670b88fe555a55"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "0a21e2c7cd77bf74eb08fe8996d49d0c"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "768b6379b45a5390b405dabc4691b6d7"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "40bf843e1caee8101df8818a5a512f79"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "c1b3676873bbd392be2b8e6eb223a2ab"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "3dee475c0bfd9cd7c7bd10f0b7f8a32e"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "7f56b0a084732e505533c3f174416426"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "9f50879afd57c725c67641f3542e9728"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "1c8156774f2405ca18ebf04b68b14954"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "6e5c7400e9f52588e97db6ccfc650b42"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "3971980765bb13af219c125557ceb926"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "0e2911ea33a00462249cd2297e23e90b"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "04747a883a626c69865da8215c17a5fd"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "8c8563764706cef528cecf1d752218d3"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "7ade061b1ff74f038fbfc340f5de10e9"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "d2f136de76d059abb051660111abfb9c"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "78e9dabebb3dc16d177198100dc3372f"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "24eae400c528ff66d9fad2464d77eed4"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "2f5a682f58784b54b37498e52ac36f4f"
  },
  {
    "url": "service-worker.js",
    "revision": "b752dd2f19a38195fb9dac53adebe0d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
