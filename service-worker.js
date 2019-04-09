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
    "revision": "3e2925b9e9015eaedaed5835550ebc51"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "ed4fb91933de4857f01eba0a11dce418"
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
    "url": "build/precache-manifest.c2ed1c516ce71501e6a01be3ba256e22.js",
    "revision": "c2ed1c516ce71501e6a01be3ba256e22"
  },
  {
    "url": "build/precache-manifest.df333e1204e1433ccb007a9414167d4c.js",
    "revision": "df333e1204e1433ccb007a9414167d4c"
  },
  {
    "url": "build/runtime.js",
    "revision": "a24e2bcce2ef6b00b4c7fa39d898f731"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "4adb88e9c2119b1d55d1c2e461299499"
  },
  {
    "url": "category/css-component.html",
    "revision": "a1ee07c51c9c8c6ec4ec51681d47a51b"
  },
  {
    "url": "category/css-template.html",
    "revision": "8540238e0784fc2cb65a68a8b61b1cc6"
  },
  {
    "url": "category/css.html",
    "revision": "7fa52f5c9b2d12419411cf5d3ae1d30d"
  },
  {
    "url": "category/github.html",
    "revision": "6e8f3822585aad4f38be9ad442e71005"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "a4a1ec039e1ce9c22b8140cbeb7d0d5c"
  },
  {
    "url": "category/javascript.html",
    "revision": "65f758ac2817dacaa5050a108afd375a"
  },
  {
    "url": "category/medium.html",
    "revision": "e6a8561a81a4fd9dba4a9bf345dd9c34"
  },
  {
    "url": "category/php.html",
    "revision": "d04ca0a9c9ab976ca89452412b382782"
  },
  {
    "url": "category/symfony.html",
    "revision": "21f910c7228ff4ffaf4e9e0376f3bc8f"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "f262c10ba95fca14b6e33df38d73e794"
  },
  {
    "url": "category/vue-template.html",
    "revision": "e8ef40e21c0b9282d0ea3b6c5d1a84a2"
  },
  {
    "url": "category/vuejs.html",
    "revision": "fae528e147cc5b19d27b5dfb65590505"
  },
  {
    "url": "category/webpack.html",
    "revision": "a6fd48b5d10f95504d4b2faf297617a3"
  },
  {
    "url": "category/wordpress.html",
    "revision": "7909849ea33d98b6d4449813061ef6b2"
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
    "revision": "b606aae4c7c90fc7a8077401b91cad2d"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "76e0a2cf5e770041bede676e24928cff"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "502c7597da3a5e425729ba83f5140def"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "34e7809275a29408a9bdc56bccb6270c"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "6b173dd433e713732448062c55bdd4a8"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "3b29f0e8f2f513ead43be39c67273a65"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "a4221c90fe484e4dd08663cdbfb79d67"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "69c2a8b014fc0ba75fbf86a2d774a7e6"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "df216b75a68f09d949decc47410dd99d"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "0f7722237c649770f14943b012773bc0"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "201548e940e8c4b6bbd6ea69f623e35a"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "0c3ee0ecbc5c4823cb72570413d277ee"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "c7b04a9153e47349c32187cf6e56835e"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "69614a6d76c23ee59c8b0a535cae8265"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "45646bb434855e1b6380cae7fc865f77"
  },
  {
    "url": "medium/webpack/2017/11/29/lets-webpack-encore.html",
    "revision": "b17fe2713d5edbd8527190acf4a7f200"
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
    "revision": "3dfe14441a0f1e97ed75a895493a1395"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
