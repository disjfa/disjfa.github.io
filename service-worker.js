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
  "/build/precache-manifest.e7bc7cf5621795622cbd3358de23c7b6.js"
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
    "revision": "f08ac9bebd07006b03c9f5b06b840734"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "0bfca399d14b9471a51006d8158dd5c5"
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
    "revision": "a24396bad88c4a0d1822555c2318059a"
  },
  {
    "url": "build/main.js",
    "revision": "c4a0208d4c52cee70cd13f00b42c22c4"
  },
  {
    "url": "build/precache-manifest.08003f13c44bcbfa486b1084bd1268b8.js",
    "revision": "08003f13c44bcbfa486b1084bd1268b8"
  },
  {
    "url": "build/precache-manifest.2c13f32410f982b61934ab10052e6327.js",
    "revision": "2c13f32410f982b61934ab10052e6327"
  },
  {
    "url": "build/precache-manifest.4496d7fc582659b23749c01524a68429.js",
    "revision": "4496d7fc582659b23749c01524a68429"
  },
  {
    "url": "build/precache-manifest.59ac21a84b2dacbd8375cc3b3472ca05.js",
    "revision": "59ac21a84b2dacbd8375cc3b3472ca05"
  },
  {
    "url": "build/precache-manifest.ad18d478781a3d1c0da411f603578af9.js",
    "revision": "ad18d478781a3d1c0da411f603578af9"
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
    "revision": "3d8a832c151a845d2796392fbfadefa4"
  },
  {
    "url": "category/css-component.html",
    "revision": "733944e7185fa08f8e3f1b91204c5aaa"
  },
  {
    "url": "category/css-template.html",
    "revision": "0e5a1c8aa2494dafee7461da52237b2e"
  },
  {
    "url": "category/css.html",
    "revision": "382448d479487980249cb805133183dd"
  },
  {
    "url": "category/github.html",
    "revision": "f4bc3ff7fcf53c334991a2e8597110ce"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "ec42674bc9aee74307a79b15e6d05ce3"
  },
  {
    "url": "category/javascript.html",
    "revision": "917102d3f48d65fe1bacb84ba5ea1fc4"
  },
  {
    "url": "category/medium.html",
    "revision": "7875057802650e330835a2be1665c01e"
  },
  {
    "url": "category/php.html",
    "revision": "01f5d17de0a2f1ece03546fd1a0328ce"
  },
  {
    "url": "category/symfony.html",
    "revision": "a6a42318209cd5ceab693d64ceb49808"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "2f06ce5a6e9d0d903cd40d3dc76c8927"
  },
  {
    "url": "category/vue-template.html",
    "revision": "c1924e03e8adaa0381fb67214fcc2116"
  },
  {
    "url": "category/vuejs.html",
    "revision": "5442652681eb4f2500c0289973746111"
  },
  {
    "url": "category/webpack.html",
    "revision": "0dad675414f72a860be4f594ca0aac28"
  },
  {
    "url": "category/wordpress.html",
    "revision": "3a87203dfbc8985be57d1fc4f4eddc0e"
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
    "revision": "cce0494263a771d367d9404c0b1ba8a6"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "03a4f08ab13b2070dc53159e5cc92a24"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "445a6fc65f3bacf65a32a5cd0322f211"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "16a327cf5d8a31ec9fbd73b3ac589b7f"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "7b6f56b17aa42ef87e5f12e2b3b0957f"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "3b643ca17548e4dfb88a15812e0bde5e"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "8d59b590c9a03f06761797985a9ebfcf"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "03395d1fabf0da01d95c0263ede46f2a"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "dfb36e56b5d4e5d133822e542f508953"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "6a777f1840fc4063fca7a2a9fc87c89a"
  },
  {
    "url": "medium/vue/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "e849e071d9ab95609a07222fbc47f8ce"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "81c8c98c0114c682e31616aa35d92ec9"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "a9ab6e240cc32c98a827db131f89d2ff"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "03b1941bbb23763d35803ee70f125f51"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "4b22e23908f1fbef570ddc4e2e6f79c3"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "c652c9787f437fd73f7d09b0a112b168"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "b8443ab991dc96f9a9a534fe1a24a299"
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
    "revision": "98a40984b511dcc103980c093e931eb2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
