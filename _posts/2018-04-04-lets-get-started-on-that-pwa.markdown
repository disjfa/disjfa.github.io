---
layout: post
title: "Let’s get started on that pwa"
date: 2018-08-07 23:17:01 +0200
intro: Google made up a word, pwa. Progressive web app. And it is awesome. Create a web page and say it can be opened from an icon on your phone. Cool, now Apple will support the way they agreed upon. Microsoft even add’s the “apps” to the store when you have one. Let’s get you started!
categories: medium javascript symfony
image: /img/headers/bruce-mars-xzQntuv9XUuA.jpeg
unsplash-url: https://unsplash.com/photos/FWVMhUa_wbY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: bruce mars
---

Google made up a word, pwa. Progressive web app. And it is awesome. Create a web page and say it can be opened from an icon on your phone. Cool, now Apple will support the way they agreed upon. Microsoft even add’s the “apps” to the store when you have one. Let’s get you started!


Once upon a time all browsers had an own way to get some icons on you home-screen. This can still be used, not everyone has upgraded to the latest version of their platform of use. This is a time when a website like [https://realfavicongenerator.net](https://realfavicongenerator.net) were needed. But let’s move to a more npm way!

This setup is built for a new website or for every existing website. You can use this on even the oldest IE6 checked website you built. Just check and kinda know what you are doing.

## Lets gulp.
```yaml
npm install gulp gulp-favicons fancy-log --save-dev
```
And yes, in a world we probably use webpack i still use gulp for this. I only need to generate these files once and only once. If i use this in my build setup it will just take time on development builds.

Next we need a `gulpfile.js`

```js
const gulp = require("gulp");
const favicons = require("gulp-favicons");
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("my-logo.png").pipe(favicons({
    appName: "App name",
    appDescription: "App description",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#27ae60",
    theme_color: "#fff",
    path: "/icon/",
    url: "https://disjfa.github.io/",
    display: "standalone",
    orientation: "any",
    start_url: "/?homescreen=1",
    version: 1.0,
    logging: false,
    html: "index.html",
    pipeHTML: true,
    replace: true,
  }))
    .on("error", log)
    .pipe(gulp.dest("./icon"));
});
```

## Let’s execute
Add a script to your `package.json`
```yaml
"scripts": {
  "favicon": "gulp favicon"
},
```

And run the code!

```yaml
npm run favicon
```
This will build a whole lot of files in the `icon` folder. Let them be there, they can be used. But there is also a `index.html` file in there. Here we have a lot of meta tags. We like meta tags (yes we do). Lets check some.

## Apple
```html
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#27ae60">
<meta name="application-name" content="App name">
<link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-touch-icon-57x57.png">
...
<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/icon/apple-touch-startup-image-320x460.png">
...
```

These are here for (older) safari browsers. They say the site we browse on can be added to the home screen and are…. web app capable. This will remove the address bar on apps opened from the home screen. In safari 11.3 it will be replaced by the manifest we will get to.

The icons are used for the icon on the home screen on apple devices. The touch startup images are used as image when an app is clicked from the home screen, as pre load splash image.

## Other
The other meta tags are used as favicon image for your browser, or some legacy icons for old ideas created by the browser manufacturers.

## The manifest
```html
<link rel="manifest" href="/icon/manifest.json">
```

This is where the browser manufacturers are agreeing on things! This is where the basis of your website/app/pwa is set up. Lets get an example.

```json
{
  "name": "App name",
  "short_name": "App name",
  "description": "App description",
  "dir": "auto",
  "lang": "en-US",
  "display": "standalone",
  "orientation": "any",
  "start_url": "/?homescreen=1",
  "background_color": "#27ae60",
  "theme_color": "#fff",
  "icons": [
    {
      "src": "android-chrome-36x36.png",
      "sizes": "36x36",
      "type": "image/png"
    },
    ...
  ]
}
```

This will show the browser the name of you app, language, orientation options, start url and colors used when the app is opened. You can check all the docs here.

## What to do
So a lot of information just to create a startup icon, what should you do:

* Create gulp file
* Just copy and paste all the tags in the index.html to your website `<head>` tag.
* Check if the icons, images and manifests load, don’t forget to check the manifest files.

## And done!

You have created an icon! Wow!

But really, you have added a way for people to add your website to your home screen. Start it up in a way only apps did. And you have something to show your colleague!

Next up is adding a service worker to let cache some files, but i will tell that in another story. When done it will even tell the user to add the site to the home screen, at least in chrome on an android phone/tablet.

## Demo

If you want to check it out, just check some of my GitHub repo’s. [disjfa.github.io](http://disjfa.github.io/) or [picalizer](https://disjfa.github.io/picalizer/) as an example. Or just check the code on the [picalizer repo](https://github.com/disjfa/picalizer) to peek what to do.
