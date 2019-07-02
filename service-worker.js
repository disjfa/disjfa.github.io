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
  "/build/precache-manifest.781bc3277b4185974ee83bd4136649f6.js"
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
    "revision": "6c5b628697fac53085d4e9da4b3a181d"
  },
  {
    "url": "blog/page2/index.html",
    "revision": "745cb74691dad4a696aeb51c47e0b6b2"
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
    "revision": "ae618e9f5af5f15e57d40f8d1467f625"
  },
  {
    "url": "build/precache-manifest.01c8ff1e896c958819512bfb3c73627d.js",
    "revision": "01c8ff1e896c958819512bfb3c73627d"
  },
  {
    "url": "build/precache-manifest.02473e2b8d201f134f36bb91f91dd32a.js",
    "revision": "02473e2b8d201f134f36bb91f91dd32a"
  },
  {
    "url": "build/precache-manifest.07aac42f7640bc4d71c2ef0f8fe7c324.js",
    "revision": "07aac42f7640bc4d71c2ef0f8fe7c324"
  },
  {
    "url": "build/precache-manifest.133872f8afded1c234faece6489e673c.js",
    "revision": "133872f8afded1c234faece6489e673c"
  },
  {
    "url": "build/precache-manifest.15e185714b396cee276112aba90ae6cc.js",
    "revision": "15e185714b396cee276112aba90ae6cc"
  },
  {
    "url": "build/precache-manifest.2ecc6aa014453f6eeb8e6c7f9b8d8385.js",
    "revision": "2ecc6aa014453f6eeb8e6c7f9b8d8385"
  },
  {
    "url": "build/precache-manifest.30864f8de002e00dfb98a63725c2c41e.js",
    "revision": "30864f8de002e00dfb98a63725c2c41e"
  },
  {
    "url": "build/precache-manifest.3b512d16a4c24a2f86ab327b62dfd102.js",
    "revision": "3b512d16a4c24a2f86ab327b62dfd102"
  },
  {
    "url": "build/precache-manifest.5dc718940a9ecb12d7d784251b9744a4.js",
    "revision": "5dc718940a9ecb12d7d784251b9744a4"
  },
  {
    "url": "build/precache-manifest.67d749e21485d1f19e0659291249c270.js",
    "revision": "67d749e21485d1f19e0659291249c270"
  },
  {
    "url": "build/precache-manifest.681c0de2fb32fa4db88951d96169e67e.js",
    "revision": "681c0de2fb32fa4db88951d96169e67e"
  },
  {
    "url": "build/precache-manifest.8d3e40c5f9fc4ee2870c661737e33590.js",
    "revision": "8d3e40c5f9fc4ee2870c661737e33590"
  },
  {
    "url": "build/precache-manifest.957dd63c2652680fcbcf7a80c822e954.js",
    "revision": "957dd63c2652680fcbcf7a80c822e954"
  },
  {
    "url": "build/precache-manifest.99c4a91d0657bde5436dfa0e31ba1c8a.js",
    "revision": "99c4a91d0657bde5436dfa0e31ba1c8a"
  },
  {
    "url": "build/precache-manifest.a220376b2beb17f68199c8197ab27584.js",
    "revision": "a220376b2beb17f68199c8197ab27584"
  },
  {
    "url": "build/precache-manifest.a7b520d562a066e6a1ee13501e663611.js",
    "revision": "a7b520d562a066e6a1ee13501e663611"
  },
  {
    "url": "build/precache-manifest.afbb9d9638aeacd5e1383244f6a388fa.js",
    "revision": "afbb9d9638aeacd5e1383244f6a388fa"
  },
  {
    "url": "build/precache-manifest.b348e242a7d8fd2d24855283635074de.js",
    "revision": "b348e242a7d8fd2d24855283635074de"
  },
  {
    "url": "build/precache-manifest.c72e824d3fefff24984467bb5e91ef9a.js",
    "revision": "c72e824d3fefff24984467bb5e91ef9a"
  },
  {
    "url": "build/precache-manifest.cabe1cd83dd23227807e54cf19008d0c.js",
    "revision": "cabe1cd83dd23227807e54cf19008d0c"
  },
  {
    "url": "build/precache-manifest.cbe68509208ef99d9c6978e8f4a52a2f.js",
    "revision": "cbe68509208ef99d9c6978e8f4a52a2f"
  },
  {
    "url": "build/precache-manifest.d28ac64370b37dab412f61b6737b6359.js",
    "revision": "d28ac64370b37dab412f61b6737b6359"
  },
  {
    "url": "build/precache-manifest.d618f9c23b801bcab38d85353820ff0c.js",
    "revision": "d618f9c23b801bcab38d85353820ff0c"
  },
  {
    "url": "build/precache-manifest.edc274440cb2f201b7640c073c25bdc0.js",
    "revision": "edc274440cb2f201b7640c073c25bdc0"
  },
  {
    "url": "build/precache-manifest.f0def372a8399a56d4a56b96fbae1ce4.js",
    "revision": "f0def372a8399a56d4a56b96fbae1ce4"
  },
  {
    "url": "build/runtime.js",
    "revision": "a24e2bcce2ef6b00b4c7fa39d898f731"
  },
  {
    "url": "category/bootstrap.html",
    "revision": "bd24298c48f02808e3cd4890ee398f7d"
  },
  {
    "url": "category/css-component.html",
    "revision": "35ef867f2d2f4d3c024fdc69c6b6c875"
  },
  {
    "url": "category/css-template.html",
    "revision": "68181f696a05976ecb1761ef1d07ba88"
  },
  {
    "url": "category/css.html",
    "revision": "60d8f1f284fb2fefb99d404137e3628f"
  },
  {
    "url": "category/github.html",
    "revision": "2e4be9dd628015c2dbbc2ae553af59e6"
  },
  {
    "url": "category/glynn-admin.html",
    "revision": "92e5b337d31de02d778ea3ac22b4bb4f"
  },
  {
    "url": "category/javascript.html",
    "revision": "41b19f1891b8fc2100acc2271cb823c1"
  },
  {
    "url": "category/medium.html",
    "revision": "0b8e1910747664cbb561ce008c26d563"
  },
  {
    "url": "category/php.html",
    "revision": "726d0670f9589365bcd85208183c60fd"
  },
  {
    "url": "category/symfony.html",
    "revision": "c65a215ef4df15eb72672f13e2f4dbc1"
  },
  {
    "url": "category/vue-plugin.html",
    "revision": "2b228a9a104f07b3fdd785a8cbad87ec"
  },
  {
    "url": "category/vue-template.html",
    "revision": "37081edc56c27f865306121c50817fce"
  },
  {
    "url": "category/vuejs.html",
    "revision": "e3f3fa254fb7084190f2401bb8daf499"
  },
  {
    "url": "category/webpack.html",
    "revision": "0245929e1535de834fb6532e280df92b"
  },
  {
    "url": "category/wordpress.html",
    "revision": "6d6efa66b4cd7a059c4df916371e062b"
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
    "url": "javascript/2019/07/02/share.html",
    "revision": "ed62a5f447ca91f30b78f46522d67b88"
  },
  {
    "url": "medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html",
    "revision": "8194bf2257d8c49acb972afddaaa5c7c"
  },
  {
    "url": "medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html",
    "revision": "24b59030848eb93edd3c739bc819f1ca"
  },
  {
    "url": "medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html",
    "revision": "e28bbb2c14d66ec0cbd35562bd7af686"
  },
  {
    "url": "medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html",
    "revision": "6f53522543816a5be429b884a70a2eb2"
  },
  {
    "url": "medium/github/2018/02/13/create-examples.html",
    "revision": "eef15a75c4f8245ae884ecb9d737fdef"
  },
  {
    "url": "medium/javascript/2017/11/08/animate-with-intersection-observer.html",
    "revision": "fa17e92a40838c1479539df4e3127979"
  },
  {
    "url": "medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html",
    "revision": "f71200361ea9067b41ea020bc144654c"
  },
  {
    "url": "medium/php/symfony/2018/12/13/symfony-autowire-how-to.html",
    "revision": "3d2d9e653b8e447e50a8999e00b8af59"
  },
  {
    "url": "medium/php/symfony/2019/02/26/symfony-a-small-introduction.html",
    "revision": "8886c297e96474e126f84e6212dce7df"
  },
  {
    "url": "medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html",
    "revision": "d42d2bc5389146588ea81ac61e1dfea1"
  },
  {
    "url": "medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html",
    "revision": "d9f9f2b5cfaee80279ab19e7b1952343"
  },
  {
    "url": "medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html",
    "revision": "a0a4806e10519551691c525c60f9028b"
  },
  {
    "url": "medium/vuejs/2017/05/18/lets-buid-a-vue-app.html",
    "revision": "370fb8036644ac2d315bda7a6f1e3102"
  },
  {
    "url": "medium/vuejs/2017/09/14/lets-route-a-vue-app.html",
    "revision": "7a608d6cc35573264a403ac524973a7d"
  },
  {
    "url": "medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html",
    "revision": "215530c69ba992fbce8b53184e34f581"
  },
  {
    "url": "medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html",
    "revision": "35a155026cd45843bc4031d00cdf86c6"
  },
  {
    "url": "medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html",
    "revision": "436fc8f49e659bf4c7383a0fc9f04c50"
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
    "revision": "6b7b3805918878b6a395276d1cf57c4a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
