const Encore = require("@symfony/webpack-encore");

Encore.setOutputPath("build/")
  .setPublicPath("/build")
  .addEntry("main", "./assets/js/main.js")
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableSingleRuntimeChunk()
  .configureLoaderRule("fonts", (loaderRule) => {
    loaderRule.test = /\.(woff|woff2|eot|ttf|otf|svg)$/;
    loaderRule.type = "asset/resource";
    loaderRule.generator = {
      filename: "fonts/[name].[contenthash:8][ext]",
    };
  });

if (Encore.isProduction()) {
  Encore.cleanupOutputBeforeBuild();
}

module.exports = Encore.getWebpackConfig();
