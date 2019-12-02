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
    "revision": "d4fe0e5ebbe845895ff37f1c56580dc3"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "da5c2193b68775e89d15544adae3dba2"
  },
  {
    "url": "bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html",
    "revision": "ef50884c77bda33041980e9b66e65ea0"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "4ad1e3f088b331d776fdfb5a4e3862b9"
  },
  {
    "url": "category/codepen.html",
    "revision": "94923e071aacc36caa8f8626560cb3ff"
  },
  {
    "url": "category/css-component.html",
    "revision": "c6654a5786a96150207d6f63235fa5cf"
  },
  {
    "url": "category/css-template.html",
    "revision": "7415727b4acd5a4e0843a95692cc81b3"
  },
  {
    "url": "category/css.html",
    "revision": "9059f949a334a4119566fd9e987d05c5"
  },
  {
    "url": "category/github.html",
    "revision": "221969b547a4c92a8d4c2b2983a58c46"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "5918e430e47c7fc2f0592c59a87d82d9"
  },
  {
    "url": "category/javascript.html",
    "revision": "a7c9b33b83caf867fb0ee9fc99b33ba1"
  },
  {
    "url": "category/medium.html",
    "revision": "adb7b583b1b2cd7e14cf2af28a17c281"
  },
  {
    "url": "category/php.html",
    "revision": "b31e1453185e0bef76da29db8cf2b224"
  },
  {
    "url": "category/symfony.html",
    "revision": "584739ab93a12372a099d93b7ea6aa1d"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "22d4f8c20135911bdebac7534c37ebc4"
  },
  {
    "url": "category/vue-template.html",
    "revision": "9351768ce8b8170bba7314f7414c9643"
  },
  {
    "url": "category/vuejs.html",
    "revision": "135e6de775aa21fc1cab64026f189bfe"
  },
  {
    "url": "category/webpack.html",
    "revision": "f831049b2f25efcc1dca798aece974e3"
  },
  {
    "url": "category/wordpress.html",
    "revision": "01f890f1d77bb31c3e9fcfc8f281788f"
  },
  {
    "url": "css/codepen/2019/03/27/codepen-solutions.html",
    "revision": "1efcf0953886283eec1a0b59525540d1"
  },
  {
    "url": "css/codepen/2019/07/11/codepen-shots-for-practice.html",
    "revision": "62b17317f2b92134b47a0345b0b082e8"
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
    "revision": "96a25adf186971adff8d0a3a00cc1e89"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "18b6afbeda7eece134a7196281b179f9"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "1e9adea140e1371756b9a130cd3cfcd7"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "2a9fc6f8d548f1dc9790a28b72b0252b"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "2a41749327ccd45c43bc523efd388367"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "b77ff14db02f80a2680bf47b6a7c4155"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "fc704a81a2e1c140ef38a5ff0f371b49"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "b12bdf78432ae401e2ec99e55a1dbc08"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "dd1ae7a8bde8ffb7a9c6a6193dbacda0"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "560dd41df2c495adad250c48f293ae1a"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "f347e12ca0b669138a2b7deb36dd2474"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "613eb6e3175f67eed6853933eb2dd8be"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "13b0a817c7d8a201858e9e7b0ff1a896"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "4c07c1572670aae07e2090994d550d7e"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "7841bc2557d44d7ac91f4efb53faa086"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "a23b969e748382cde2d6aa017bb8d6c1"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "782c4a977d50b88351a22e07a955768d"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "e35011ec34932de8413952d5cc33c4ba"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "9c3082ee325b406c9da6260dea32ea42"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "ba5ff1a959d38ffa777873075418c6f3"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "b78565647d736dc9c716e66c086e913f"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "d82a954a105f04f29e13471046878fb3"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "55d768bcf74aeac4fc0b2d3d793a9362"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "eedd0820dfbe61c0d79b745cce4f9d71"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "a43ef8737651778a74405605f9770c10"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "0b2927f5c67081aacec17e524c7ba1e2"
  },
  {
    "url": "projects/index.html",
    "revision": "8e6f21a7a6b6694031948855d3896a01"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "190d4004c50946c6afc898e8c6278dca"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "415da85e3bfcf9f6c02e1d3985600349"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "845c2bcab9d9dd66e6406ad726b53556"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "6f416eb6a576215aca7096f07927aed3"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "e10ec389f7621b28ea41c8524b2647f9"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "a8a36ef47e6eb5127e6452a4e64656c2"
  },
  {
    "url": "symfony/php/2019/12/02/mailing-with-symfony.html",
    "revision": "a8942a37bec3152ff1ca4c800a75607f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
