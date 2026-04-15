const legacyPostRedirects = [
  ["/bootstrap/css/2019/08/20/bootstrap-carousel-using-animate.css.html", "/blog/2019/bootstrap-carousel-using-animate.css/"],
  ["/css/2020/03/03/long-live-css4.html", "/blog/2020/long-live-css4/"],
  ["/css/codepen/2019/03/27/codepen-solutions.html", "/blog/2019/codepen-solutions/"],
  ["/css/codepen/2019/07/11/codepen-shots-for-practice.html", "/blog/2019/codepen-shots-for-practice/"],
  ["/javascript/2019/07/02/share.html", "/blog/2019/share/"],
  ["/medium/bootstrap/2016/12/28/writing-an-admin-template-in-14-lines-of-css-using-bootstrap.html", "/blog/2016/writing-an-admin-template-in-14-lines-of-css-using-bootstrap/"],
  ["/medium/bootstrap/2017/02/09/animate-a-open-and-closing-element-using-bootstraps-collapse.html", "/blog/2017/animate-a-open-and-closing-element-using-bootstraps-collapse/"],
  ["/medium/bootstrap/2017/03/30/animate-a-bootstrap-carousel.html", "/blog/2017/animate-a-bootstrap-carousel/"],
  ["/medium/css/symfony/2018/08/07/lets-get-started-with-css-grid.html", "/blog/2018/lets-get-started-with-css-grid/"],
  ["/medium/github/2018/02/13/create-examples.html", "/blog/2018/create-examples/"],
  ["/medium/javascript/2017/11/08/animate-with-intersection-observer.html", "/blog/2017/animate-with-intersection-observer/"],
  ["/medium/javascript/symfony/2018/08/07/lets-get-started-on-that-pwa.html", "/blog/2018/lets-get-started-on-that-pwa/"],
  ["/medium/php/symfony/2018/12/13/symfony-autowire-how-to.html", "/blog/2018/symfony-autowire-how-to/"],
  ["/medium/php/symfony/2019/02/26/symfony-a-small-introduction.html", "/blog/2019/symfony-a-small-introduction/"],
  ["/medium/vue-plugin/2017/09/14/introducing-vue-route-timeline.html", "/blog/2017/introducing-vue-route-timeline/"],
  ["/medium/vuejs/2017/01/20/using-vue-js-in-existing-websites-the-easy-way.html", "/blog/2017/using-vue-js-in-existing-websites-the-easy-way/"],
  ["/medium/vuejs/2017/03/30/creating-navigation-using-vue-router.html", "/blog/2017/creating-navigation-using-vue-router/"],
  ["/medium/vuejs/2017/05/18/lets-buid-a-vue-app.html", "/blog/2017/lets-buid-a-vue-app/"],
  ["/medium/vuejs/2017/09/14/lets-route-a-vue-app.html", "/blog/2017/lets-route-a-vue-app/"],
  ["/medium/vuejs/2017/10/11/lets-store-some-data-in-a-vue.html", "/blog/2017/lets-store-some-data-in-a-vue/"],
  ["/medium/vuejs/vue-plugin/2019/05/14/vue-creating-custom-component.html", "/blog/2019/vue-creating-custom-component/"],
  ["/medium/webpack/css/javascript/2017/11/29/lets-webpack-encore.html", "/blog/2017/lets-webpack-encore/"],
  ["/symfony/php/2019/12/02/mailing-with-symfony.html", "/blog/2019/mailing-with-symfony/"],
];

const legacyBlogPaginationRedirects = Array.from({ length: 9 }, (_, index) => {
  const page = index + 2;
  return [
    `/blog/page${page}/`,
    `/blog/page-${page}/`,
  ];
});

const projectSlugs = [
  "10k-2016",
  "bootstrap-tricks",
  "dimme-jour",
  "fluent-bootstrap",
  "glynn-admin-symfony",
  "glynn-admin",
  "hella-hero",
  "lyara-menu",
  "refero-list",
  "ryoko-headers",
  "vue-minesweeper",
  "vue-route-timeline",
  "vuetify-sidebar-template",
];

const legacyProjectRedirects = projectSlugs.map((slug) => [
  `/projects/${slug}.html`,
  `/projects/${slug}/`,
]);

const categorySlugs = [
  "bootstrap",
  "codepen",
  "css",
  "css-component",
  "css-template",
  "github",
  "glynn-admin",
  "javascript",
  "medium",
  "php",
  "symfony",
  "vue-plugin",
  "vue-template",
  "vuejs",
  "webpack",
  "wordpress",
];

const legacyCategoryRedirects = categorySlugs.map((slug) => [
  `/category/${slug}.html`,
  `/category/${slug}/`,
]);

const redirectPairs = [
  ...legacyPostRedirects,
  ...legacyBlogPaginationRedirects,
  ...legacyProjectRedirects,
  ...legacyCategoryRedirects,
];

const uniqueRedirectPairs = [...new Map(
  redirectPairs.map(([from, to]) => [from, [from, to]])
).values()];

export default uniqueRedirectPairs.map(([from, to]) => ({ from, to }));
