const Encore = require('@symfony/webpack-encore');
const { GenerateSW } = require('workbox-webpack-plugin');

Encore
  .setOutputPath('build/')
  .setPublicPath('/build')
  .addEntry('main', './assets/js/main.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .enableSingleRuntimeChunk()
  .addPlugin(new GenerateSW({
    globDirectory: './_site',
    globPatterns: ['**/*.{html,jpg,png}'],
    swDest: './../service-worker.js',
  }))
;

if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
  ;
}

module.exports = Encore.getWebpackConfig();
