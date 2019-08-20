---
layout: post
title: "Bootstrap carousel using Animate.css"
date: 2019-08-20 23:17:01 +0200
intro: Adding some Animate.css to a bootstrap carousel
categories: bootstrap css
image: /img/headers/photo-1556779914-c46d00d4d8de.jpg
unsplash-url: https://unsplash.com/@ariel_aguerophoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: Ariel_ Agüerophoto
---

The premise is that we know how to [bootstrap](https://getbootstrap.com), we know how to [Animate.css](https://daneden.github.io/animate.css/). Now in bootstrap there is a thing like a carousel. We want to make the animations some more fancy! Lets try.

### How does this work?

First up, we need to figure out how we can use the bootstrap classes for a [carousel](https://getbootstrap.com/docs/4.3/components/carousel/). When we inspect the elements and test and try we see a quick `.carousel-item-left` and `.carousel-item-right` class on the main element. Also there is an `.active` class. Lets puzzle, well i already puzzled so i'll just explain.

The `.active` item moves away or fades out on the carousel so that will be used for the animating out classes. So a simple overview.

### Animate out classes

```css
.carousel-item-left.active {
  ...
}

.carousel-item-right.active {
  ...
}
```

### Animate in classes

```css
.carousel-item-left {
  ...
}

.carousel-item-right {
  ...
}
```

### Simple, left and right

So now we know how to check and manipulate the in and out. Next we need to setup a main carousel and remove the deafult animation. Let's set up a default carousel. Keep the `.slide` class for a base animatin and add a custom `.carousel-...` class we can use to hook into the action.

```html
<div id="carousel-zoom" class="carousel slide carousel-animation bg-dark" data-ride="carousel">
  ...
</div>
```

### Reset some css

```css
.carousel-animation .carousel-item {
    transform: none;
}

.carousel-animation .carousel-item-left.active,
.carousel-animation .carousel-item-right.active {
    transform: translate(0, 0);
}
```

This will just reset all the animations. Reverts the sliding. So now we can start. 

We can keep it simple and use some animations from [Animate.css](https://daneden.github.io/animate.css/). If you want you can create whatever you like. For now we use the bounceIn and bounceOut animations. Let's just put it all together.

```css
.carousel-animation .carousel-item {
    transform: none;
}

.carousel-animation .carousel-item-left {
    animation-name: bounceInRight;
    animation-duration: .65s;
}

.carousel-animation .carousel-item-left.active {
    transform: translate(0, 0);
    animation-name: bounceOutLeft;
}

.carousel-animation .carousel-item-right {
    animation-name: bounceInLeft;
    animation-duration: .65s;
}

.carousel-animation .carousel-item-right.active {
    transform: translate(0, 0);
    animation-name: bounceOutRight;
}
```

### And thats it!

Cool, now we are done. We bounce in from the right, aka go to the left to enter and bounce out to the left on exiting. And the other way around if we click to the right.

You can just play around with all the options Animate.css gives you. Also if you want to see a working example, check [here](https://disjfa.github.io/bootstrap-tricks/animate-carousel-2/).

### Next up?

Next up! Enjoy! Make awesome stuff and be awesome. You can animate the inners when the inital animation is done. After the the `.active` class gets put on the new inner item. Check [this example](https://disjfa.github.io/bootstrap-tricks/animate-carousel/) to get started with that.

And don't forget to have fun.
