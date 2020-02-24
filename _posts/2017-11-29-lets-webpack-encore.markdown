---
layout: post
title: Let’s webpack… encore!
date: 2017-11-29 23:17:01 +0200
intro: So i build websites and apps regularly, and i use build tools all the time. Once i started using grunt a long time ago i fell in love. But every project you had the hassle of setting up all the tasks you want. And the basics is just building javascript (using babel), uglyfying on production it and do the same on the css side of things. So much work, every time. Now comes webpack encore.
categories: medium webpack css javascript
type: article
image: /img/headers/ezra-jeffrey-77199.jpg
unsplash-url: https://unsplash.com/photos/pPquxoraq_M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: Ezra Jeffrey
---

So i build websites and apps regularly, and i use build tools all the time. Once i started using [grunt](https://gruntjs.com/) a long time ago i fell in love. But every project you had the hassle of setting up all the tasks you want. And the basics is just building javascript (using babel), uglyfying on production it and do the same on the css side of things. So much work, every time. Now comes [webpack encore](https://symfony.com/doc/current/frontend.html).


Webpack became the thing that does is all. All in one config, well one for dev and one for production. And now we have two main files that do somewhat the same thing. Add [scss](http://sass-lang.com/) support, and import fonts. Loaders, modules, and more and i hadn’t figured out what to do other than hope my build script works. If it won’t, just have to search and find the minute change that does the trick. Easy to say i sticked wilt [gulp](https://gulpjs.com/), i knew how to do one task at a time.

## Symfony?
Webpack encore is built for [symfony](https://symfony.com/), but **by no means are we gonna use that this time**. So every reference to symfony is because the webpack encore docs are [there](https://symfony.com/doc/current/frontend.html). But in this example we are just gonna setup a basic **html/css/javascript** setup. I myself use the package now for a jekyll setup, standalone vue builds, clean html builds and, yes, some symfony projects.

## Now for webpack encore.
Let’s go for broke, create a new folder and `npm init`. Hit ok on everything and install webpack encore.

```yaml
npm install @symfony/webpack-encore
```

Next, setup the complete and wholesome webpack.config.js file.

```js
var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('web/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/js/app.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
```

The simple way to put this is, it builds the entire webpack.config.js for you.

Harder way is, it **sets the output path** of the files to a folder, we create, named **web/build**. The **public path** to use in javascript/css is /build. We **add an entry** named app, this uses the file we use as main javascript file. Like webpack uses. We are gonna **enable the sass loader**, i like sass. And just for kicks we **auto provide jQuery**. We **enable source maps** when we run not in production. And we **clean the output before build**, so the web/build folder gets emptied before scripts run.

One extra thing, sass is not out of the box. Nobody don’t know if you use sass, less or just plain css so we need the pre-precessors for sass.

```yaml
npm install sass-loader node-sass
```

## Files
So in the build we use a couple of files, lets list them.

```yaml
assets/js/app.js
assets/css/app.scss
web/index.html
```

The index file I added in the **web** folder because i think the dev server uses the web folder as **base folder**, like this symfony thing we wont mention. Lets just go along and set the up the files.

## app.js
All the javascript gets set up in here.

```js
import './../css/app.scss';
```

## app.scss
The css we use in the file

```css
body {
  background: pink;
}
```

## index.html

Basic html template, to see something when we check the page.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="build/app.css">
    <title>Encore</title>
</head>
<body>

<script src="build/app.js"></script>
</body>
</html>
```

## Setup scripts
Next up is setting up the scripts in the package.json file. These are here so we can easily access all the commands we need.

```json
"scripts": {
  "dev": "encore dev --watch",
  "dev-server": "encore dev-server --host 0.0.0.0 --disable-host-check --port 8080",
  "production": "encore production"
},
```

## Run the scripts

Next up we just run the dev script, and it generates three files in the `web/build` folder. An app.js (the name app comes from the entry key), app.css and manifest.json. The last we won’t use for now.

```yaml
npm run dev
```

## Dev server
And if we want to develop and build the site we setup the dev server. Great for development.

```yaml
npm run dev-server
```
And when we go to [http://0.0.0.0:8080](http://0.0.0.0:8080) as setup in the scripts in the package.json **we see a nice pink page**.

## Production build
Next up, run for production, it will minify all the files and we are ready for production. If you want, you can just add the postcss and autoprefixer plugin for support, you can check that here.

```yaml
npm run production
```

## Create a basic page
Lets make things somewhat fancy, add some bootstrap and create a simple page you can see on the internet.

```yaml
npm i popper.js bootstrap@4.0.0-beta.2 font-awesome
```

## app.js
```js
require('./../css/app.scss');
window.$ = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');
```

## app.scss
```scss
$fa-font-path: '~font-awesome/fonts';

@import "~bootstrap/scss/bootstrap";
@import "~font-awesome/scss/font-awesome.scss";
```

## index.html
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="build/app.css">
    <title>Encore</title>
</head>
<body>
<div class="container">
    <br>
    <div class="jumbotron">
        ...
    </div>
</div>
<script src="build/app.js"></script>
</body>
</html>
```

## Small issues
I have to say i ran in to one issue, i didn’t get the fonts to load on my dev-server. But when i deployed it did. I did deploy to github pages so i did change my font path after run for production.

## Next, your turn!
I did just added the files to a basic html file, that’s cool but we use frameworks and cool stuff to build our websites now. No problem. This is just the setup for basic javascipt/css builds without the hassle. If you want to add [vue](https://symfony.com/doc/current/frontend/encore/vuejs.html) support or build a [react](https://symfony.com/doc/current/frontend/encore/reactjs.html) app you can just add those. Let’s see what you can do, you can surely let me know.

My example
I typed code when i wrote my example, i did put it on the github so you can check it out, [here](https://github.com/disjfa/encore). The example page can be seen [here](https://disjfa.github.io/encore/).

