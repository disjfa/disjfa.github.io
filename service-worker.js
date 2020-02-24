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
    "revision": "c9feae75522e9b32a135ced689153199"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "7c8275e854cd87db2faa213d43fd8d7d"
  },
  {
    "url": "bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html",
    "revision": "60b2f523449f6225aaa4283161f624b9"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "8a3b5a323078dff841a0e9d0b088b7b9"
  },
  {
    "url": "category/codepen.html",
    "revision": "b1902ccd51b4cf2faf6fa0315b517f26"
  },
  {
    "url": "category/css-component.html",
    "revision": "fdfb956502248fb7e567d9d1f18e0c6f"
  },
  {
    "url": "category/css-template.html",
    "revision": "abc36d2f57dbdd37ee2050fdb213f3b3"
  },
  {
    "url": "category/css.html",
    "revision": "854f68443e3a51592d3f94ae5a72f55c"
  },
  {
    "url": "category/github.html",
    "revision": "b891156a22938cade633ac6f625dae9a"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "a3a6755f79927bb7b17b91dfcc93ea46"
  },
  {
    "url": "category/javascript.html",
    "revision": "7d8473ab1d3597a4ac3143343b0e7737"
  },
  {
    "url": "category/medium.html",
    "revision": "b447907df12eec256fe4b699e18182da"
  },
  {
    "url": "category/php.html",
    "revision": "105edb9ddfcab12ad0d0bf04002cb65c"
  },
  {
    "url": "category/symfony.html",
    "revision": "6de612e22b6fba8325e2d4640e492991"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "217fbc04ee21b7116d582283b03e6176"
  },
  {
    "url": "category/vue-template.html",
    "revision": "0826a4f2111fbd0243b4112c0967619f"
  },
  {
    "url": "category/vuejs.html",
    "revision": "5bb7293e6730f90cde43c6c6d898d4cf"
  },
  {
    "url": "category/webpack.html",
    "revision": "4e8371fa17cdb52d98f6c1d78f54935d"
  },
  {
    "url": "category/wordpress.html",
    "revision": "fc862b1e59be9a8eb7e77f3ab4994a8f"
  },
  {
    "url": "css/codepen/2019/03/27/codepen-solutions.html",
    "revision": "29187f5546182a7805335e43bf1751f6"
  },
  {
    "url": "css/codepen/2019/07/11/codepen-shots-for-practice.html",
    "revision": "069e3e3ceac6a54a789ff761b6631640"
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
    "revision": "b9aee21de02ce2365870963a2f66f4bd"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "3d6b66c3b8027fa61602a9b128c0d07b"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "e9c25aa2498b06b089ed43e70a171418"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "ce0edfed507fe883008b41ae4e6674a9"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "e543410cf44c8472456f73d482c0112b"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "08fa8ded7aa52e421ce47df539a23f50"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "817a5266cb966cf0a9f9966484994d74"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "2e64ad49be6191756ab7b1d18387505e"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "052a317825dcaa6214b42db3f3281618"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "3a74c5b7ed507aac1e808ef0296644a1"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "6166ecd87ba04b9de20ddba5d0c59569"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "65af64cdabb1963230077063018c1f54"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "aea0c0a2462d725dadfbc374a498098b"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "68f23fe2c312975abcb1e343fe7d2c9f"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "12c879c9a5f899dfbb31512f46eaf545"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "de7599cc5a8eb7e31cffec16ac3a82fb"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "086a6469341bfdb4368f55984458c5df"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "cc0a498484f7e9a470e9ddb27410430a"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "f5592174c8603fc160a483ae65a626e3"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "411c654d6006e09a7a8df2facfc31b38"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "1af945e3b61b0c4aeddf762438d32029"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "7b55c7e5d16789e1a0f01b226c624d54"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "2c8d2c52f602a96bc2ba37f5d0354484"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "8f3ea4f63ada3def4648b18172f47c3b"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "19749cec304b73fc181eb9028411b367"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "b12ef459b6c421a6107b09b781d6b5ff"
  },
  {
    "url": "projects/index.html",
    "revision": "36646395f59e8b755f56fad6440abab0"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "b29988d7b6d4ad313c535648b05e817a"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "1719e99d89535200f4632d1ae4730754"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "581e0aced1229da2e5f057014d52c19b"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "678ebcf578451020af0fba888283ff80"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "24d38199a05fbc153203cfa70e76b574"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "2d68ccc9d3cd09431658b544070e88d9"
  },
  {
    "url": "symfony/php/2019/12/02/mailing-with-symfony.html",
    "revision": "0d6d2d8c83aa8b96718d7a6ce17ced07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
