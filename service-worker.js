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
    "revision": "3852676a91140b027b1aa15744f32b60"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "c01a1825959533166eddee594ee53a69"
  },
  {
    "url": "bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html",
    "revision": "8f3c5d619e40d4ae2e684037995b99e8"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "5a923bc58ac2b35edef55ce708b908bc"
  },
  {
    "url": "category/codepen.html",
    "revision": "51aca76573820c5562fb438a5e943c11"
  },
  {
    "url": "category/css-component.html",
    "revision": "3941e9dcc31ddc1c4d75bcff11f11893"
  },
  {
    "url": "category/css-template.html",
    "revision": "c09aa42c84a1a1da4cde56825419b067"
  },
  {
    "url": "category/css.html",
    "revision": "2f10875a505176e6d698dd2ccc9d288c"
  },
  {
    "url": "category/github.html",
    "revision": "992925b42c91b7066b865c5e44a680fb"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "1ddd076def84269cd0a63b199b9cab9f"
  },
  {
    "url": "category/javascript.html",
    "revision": "28a80fca488a9c90b305af6860400462"
  },
  {
    "url": "category/medium.html",
    "revision": "dea84c8d12ed66e1acf10d19f69cd746"
  },
  {
    "url": "category/php.html",
    "revision": "7d287b76f495d4268251727ba9476a51"
  },
  {
    "url": "category/symfony.html",
    "revision": "dd389f13d82a9a0de26d84a3724c00d6"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "620cd34e09d96a3becd3e9d426834ed4"
  },
  {
    "url": "category/vue-template.html",
    "revision": "593ea10970903033f08097f7b97c812c"
  },
  {
    "url": "category/vuejs.html",
    "revision": "123a37d206160d5382293b66a38fb1ee"
  },
  {
    "url": "category/webpack.html",
    "revision": "72a32a67358f52e265b9cc5c46c66aef"
  },
  {
    "url": "category/wordpress.html",
    "revision": "96178dc9b18109ca30a0b85ec78b897f"
  },
  {
    "url": "css/codepen/2019/03/27/codepen-solutions.html",
    "revision": "cc1f3a52e96e888ea9642f41aedef0c9"
  },
  {
    "url": "css/codepen/2019/07/11/codepen-shots-for-practice.html",
    "revision": "50c28a2df9a811c26a7aad64201411a8"
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
    "revision": "f10e57955708e7e0ea7a596b92c77b3f"
  },
  {
    "url": "javascript/2019/07/02/share.html",
    "revision": "148ffedfa2838b78802b04a33f24df10"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "4a4117fd5f6a9fbc2055442c1a654db8"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "e3f1841d938b97d49dd6b35013702c02"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "2aabe6c90f1f84bcd0dabe6426ca5e72"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "c1c66598840cb769d465373cc5dae3f3"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "c9908d45ceef07ffb9857c5bf4b6acd4"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "0392df9deb5f29c156d057c50d8bd487"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "127c74d2e1faa9407b6e8c6413c44370"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "2aa780c294b997989b8c4647d140e5e0"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "736bbcbd91f7cb0afc4cbfc46669a306"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "0b92207baacf3708d5dde69bf6cb8af5"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "80fd69bc48ea359abc2125720de85408"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "1a51a2d72dd4dd77d923e97685b5df67"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "64dc6bab6e3a23b32f7364a3571c595e"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "f3d7d59b13e8577233bc4cf987962a50"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "f20d2a0536b3701923f9cf66d5b0928b"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "ed4a3af3de7bda55ea793a79a09c3a36"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "83613fe551bee47459b092f7ce13a642"
  },
  {
    "url": "projects/10k-2016.html",
    "revision": "b5dd34cc0439d72b26cebfafb473447e"
  },
  {
    "url": "projects/bootstrap-tricks.html",
    "revision": "6513368da133db23d84e067e4cc8337b"
  },
  {
    "url": "projects/dimme-jour.html",
    "revision": "16e0a892839a1c69325c840abc9b8eb5"
  },
  {
    "url": "projects/fluent-bootstrap.html",
    "revision": "e6af0b076ae0a60b12ceee550d6c6573"
  },
  {
    "url": "projects/glynn-admin-symfony.html",
    "revision": "5eefe009e7213ac609abd796f013e19c"
  },
  {
    "url": "projects/glynn-admin.html",
    "revision": "92828aaadf2c4e7ee21e3f0379ba57ad"
  },
  {
    "url": "projects/hella-hero.html",
    "revision": "1f79fed905d32c0ab7546ab0d79962b2"
  },
  {
    "url": "projects/index.html",
    "revision": "0c034dd26e6bbff087ad9dbfcc02d061"
  },
  {
    "url": "projects/lyara-menu.html",
    "revision": "c1aad52cdae55e4505c7572fb97a65bf"
  },
  {
    "url": "projects/refero-list.html",
    "revision": "558cff8de603355a017fd52426edf2ed"
  },
  {
    "url": "projects/ryoko-headers.html",
    "revision": "6a80cac8ec9693fd4c638658ac9590d9"
  },
  {
    "url": "projects/vue-minesweeper.html",
    "revision": "26e66ba181b99300cd48c38a5be5dd5a"
  },
  {
    "url": "projects/vue-route-timeline.html",
    "revision": "1f42fc4bf31ea1d5e3cd01e1d90d643a"
  },
  {
    "url": "projects/vuetify-sidebar-template.html",
    "revision": "85f44404645bf12ebe00726d088dc6e3"
  },
  {
    "url": "symfony/php/2019/12/02/mailing-with-symfony.html",
    "revision": "1df1105873f1c28b904efc37ba682e05"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
