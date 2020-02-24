---
layout: post
title: "Lets get started with css grid"
date: 2018-08-07 23:17:01 +0200
intro: Css grid, introduced ages ago in internet explorer 10 with their own rules is now probably in your browse. We want to get started with it and check how far we can go in browsers. And still thinking about some IE11 uses. They are there. You can check a full example of the finished example.
categories: medium css symfony
type: article
image: /img/headers/ruslan-bardash-6VASpxg.jpeg
unsplash-url: https://unsplash.com/photos/Jqk3VXErDF0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: Ruslan Bardash
---

Css grid, introduced ages ago in internet explorer 10 with their own rules is now probably in your browse. We want to get started with it and check how far we can go in browsers. And still thinking about some IE11 uses. They are there. You can check a full example of the finished example [here](https://disjfa.github.io/bootstrap-tricks/grid-it/).

I once wrote a short story on [writing an admin template in just 14 lines of css](https://medium.com/@disjfa/writing-an-admin-template-in-14-lines-of-css-using-bootstrap-786277da50a4). Now i was reading about css grid and it sounds cool. So let’s redo that story, using css grid.

## Some examples
As a started using css grid there are a lot of sites helping you get started. [Grid by Example](https://gridbyexample.com/) has useful examples. And off [course A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) is useful.

## Admin template
I started with an admin template because it has some potential. So lets start typing. I started using a [grid-template-areas](https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14). Built up my site and setup some positions on my grid.

```scss
.grid {
  height: 100vh;
  width: 100vw;
  grid-template-columns: 250px auto;
  grid-template-rows: 100px auto 100px;
  grid-gap: 10px;
  grid-template-areas: 
    "sidebar header"
    "sidebar main"
    "sidebar footer";
}
.sidebar {
    grid-area: sidebar;
}
...
```
Cool, setup a small grid. Full screen. Let’s go!

## Postcss and autoprefixer.
Next i found a story on [CSS Grid in IE](https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/). And installed the [autoprefixer](https://github.com/postcss/autoprefixer). There you have to setup the autoprefixer to enable css grid support, easy. I added a postcss.config.js in my project with this;

```js
module.exports = {
  plugins: {
    autoprefixer: {
      grid: true,
    }
  }
}
```

## You need to test every fix with Grid in IE
One line of code on the autoprefixer page told me to test always on internet explorer first, so i did. And it broke a bit. I don’t know why, but it broke. It did not take my width and height. It got worse when i started adding responsive media queries. Some things did not load or just exploded on IE. Let’s go back to the drawing board.

I don’t know what i did wrong or where i could fix this, i could probably fix it somewhere but i couldn’t find where. So i went back to the drawing board.

I found a nice article on when and where i can [try to use the IE implementation of CSS Grid Layout](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/). Some things should work with the autoprefixer but i just wanted to use tested properties.

> You need to test every fix with Grid in IE

## Let’s get started, again
So i got started again, i do use bootstrap for some scss values. First up setup a fallback layout.

```scss
.grid {
  padding-left: $spacer;
  padding-right: $spacer;
  max-width: 1140px;
  margin: 0 auto;
}
```

Now the template can be seen as in a mobile view as a fallback. Next up, setup a grid on a viewport of 768px width. Again, usings scss.

```scss
@media screen and (min-width: 768px) {
  .grid {
    padding: 0;
    display: grid;
    grid-template-columns: 300px 10px 1fr;
    grid-template-rows: min-content 10px 1fr 10px min-content;
    height: 100vh;
    max-width: 100%;
    &-sidebar,
    &-header,
    &-content {
      overflow: auto;
    }
    &-sidebar {
      grid-column: 1;
      grid-row: 1/6;
    }
    &-header {
      grid-column: 3;
      grid-row: 1;
    }
    &-content {
      grid-column: 3;
      grid-row: 3;
    }
    &-footer {
      grid-column: 3;
      grid-row: 5;
    }
  }
}
```

Reset the grid, add some columns and rows. Setting up an admin like setup, placing the sidebar on the left and a header, content and footer on the right. Next up re-run on the internet explorer browser. And it actually works.

## min-content
I was typing and testing the grid and it worked, but my header just would not fit and i found a nice property. Min-height. It will fit the content as it will just fit. Minimum height. Cool for usage, and still works on the older browsers.

## Example
I have an example [here](https://disjfa.github.io/bootstrap-tricks/grid-it/). I also added a quick navigation trick for the navigation, it places itself on the bottom on smaller screens. The rest is as is.

## Use it
As seen here, we can use this. And please do. I setup an admin interface, but you can use it for all the layouts in the world. Just start it up and set up in your project. It is supported in most browsers, just keep in mind to test it on your minimum browser you want to target. And enjoy making cool stuff.
