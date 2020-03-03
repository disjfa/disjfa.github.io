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
    "revision": "016917d29447630138bd363d21249fa5"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "733b532b1d0947c9c8e4d88266c949e5"
  },
  {
    "url": "bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html",
    "revision": "670c41f94faa80c1aa90d744940b5464"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "17b49839d7c0a58fa69c5196455c1d23"
  },
  {
    "url": "category/codepen.html",
    "revision": "c636a0d2bf4c868d6a31409e4595f269"
  },
  {
    "url": "category/css-component.html",
    "revision": "9b93301654b09c071740367b8ecfb2da"
  },
  {
    "url": "category/css-template.html",
    "revision": "f7761bcbd5bbf9e8fda7afc0b10c88ce"
  },
  {
    "url": "category/css.html",
    "revision": "6764567f8f6f5cff89cabe21ade4e942"
  },
  {
    "url": "category/github.html",
    "revision": "646f2eb079873ee04c5e81e6472c2106"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "ca522bc81f51b3f5753704e0b97cb0b8"
  },
  {
    "url": "category/javascript.html",
    "revision": "d5e2d60974807b81ecc0c9c858e45220"
  },
  {
    "url": "category/medium.html",
    "revision": "24aa5f0fb0af0cb7a3ab91ca423e6a30"
  },
  {
    "url": "category/php.html",
    "revision": "fc649d4f0a5b0262085db20aaf352eec"
  },
  {
    "url": "category/symfony.html",
    "revision": "e5544bc62df7ddbd7e5f3f700b972731"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "818fddfdc8e77c51f3c3fe26f3e44c27"
  },
  {
    "url": "category/vue-template.html",
    "revision": "89a9444f2815587cb79b4cb1140c1945"
  },
  {
    "url": "category/vuejs.html",
    "revision": "76cb21d5b554fb685b114ed4a6cbde00"
  },
  {
    "url": "category/webpack.html",
    "revision": "67df55546cf8e45c4a58fb988e7f089f"
  },
  {
    "url": "category/wordpress.html",
    "revision": "75914253edf87c35251d257059961a78"
  },
  {
    "url": "css/2020/03/03/long-live-css4.html",
    "revision": "94b7fdfaef7aa8c7fae9c6214e8ce344"
  },
  {
    "url": "css/codepen/2019/03/27/codepen-solutions.html",
    "revision": "534eb3e14fd423bade6b777de086c20a"
  },
  {
    "url": "css/codepen/2019/07/11/codepen-shots-for-practice.html",
    "revision": "549bbad3d48d823ce89636297e075326"
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
    "url": "img/headers/photo-1478104718532-efe04cc3ff7f.jpg",
    "revision": "37837582a790a4848a85b9f759e373f4"
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
    "revision": "1bea6fc57db091cb71f747b39b5ec992"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "079d64112f2614ac10dbbda57ef5e8a5"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "20a374d343ab602a7a8ff2bebe698ca9"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "da8ec4efd448c96b69678fce5e22f6ad"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "14ce080c3c3072e326d47bd2781db962"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "f0f8478b73769d168e9f8cc6edef9303"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "0c70e6071e56cb52fc43fbac5f1b48ec"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "c7cc22a2cc674cf1e28e6c0b36d604db"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "b4c95fe4571e6eb403946ce81945b016"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "98eb19559d3293cba63baa983e32655d"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "9ca6765710df1590a4ff8b5721980346"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "7d988e64192431343ba3d832e925e7ce"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "327723d1f1e1f4df154450d6aa60c695"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "0baceb3e60954e7bcdab5158d247cff2"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "65ef1a77ab3709ea8f0d669eb6599667"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "67d0b4226681a9ec9799f32823782f54"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "a4967c639bfa9365885d77948a67c376"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "f3dbad1a8f07d3270627a75e7b93c53a"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "a0723e3caceeb82e530dbc6e8c4b396b"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "5f22f049cbf6f58a896c5e2c3377c65a"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "ffdebc92777a1242a84702148b8d113f"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "4cbe644551841c4ea836cd4117a5e27c"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "d2c827b023f6addaea37bbe4f07649b6"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "9f13e5f05fdc396cf1da5543515fe4bb"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "116db13a4b19ad1e943767960d030534"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "d878c577a57f387f28b5560c4f0be1c5"
  },
  {
    "url": "projects/index.html",
    "revision": "bbacfb809b4680f20159bd73f2a24b69"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "aed3bfb629ee3427b059c9ac241f2fae"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "522f67efaa01fd75fe27a23cd2dcb47e"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "7a6fc1a904de5ca1f066e3e69b6825ed"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "395045409b032711cef615b7bacaf596"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "89e4605e4ece9cb2fc144eb97971ec50"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "67edc9fc64c8d1e61e5fab47c574201f"
  },
  {
    "url": "symfony/php/2019/12/02/mailing-with-symfony.html",
    "revision": "9bf4d0d3d819c19e0aa1c39b951c3a79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
