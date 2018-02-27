var Encore = require('@symfony/webpack-encore');
var WorkboxPlugin = require('workbox-webpack-plugin');

Encore
  .setOutputPath('build/')
  .setPublicPath('/build')
  .addEntry('main', './assets/js/main.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .addPlugin(new WorkboxPlugin({
    globDirectory: '_site',
    globPatterns: ['**/*.{html,js,css,jpg,png,woff2,woff,ttf}'],
    swDest: './sw.js',
    clientsClaim: true,
    skipWaiting: true,
  }))
  .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
