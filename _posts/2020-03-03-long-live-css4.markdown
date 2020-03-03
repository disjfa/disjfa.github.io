---
layout: post
title: "Long live css4!"
date: 2020-03-03 23:17:01 +0200
intro: Lets check out the status of css4
categories: css
type: article
image: /img/headers/photo-1478104718532-efe04cc3ff7f.jpg
unsplash-url: https://unsplash.com/@morganharpernichols?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: Morgan Harper Nichols
---

So there is talk online about css4. There is no css4, lets see wat we can do without it. Maybe think of a way to help the argument. If you just want to skip to the end, i made a quick view on the status of css, you can check it [here](https://disjfa.github.io/css4/).

## The setup

So where we started was checking what we can find on the internet. There are lots of discussions about css4, some nicely summed up on [this article on css-tricks](https://css-tricks.com/css4-update/). Nice! We are done. But not yet.

Lets see what we can do now. If you develop we all know about the [caniuse website](https://caniuse.com/). The go to when we developers want to add something to our website. Also nice! But they have all their data open source. So we tested what we can do with that data. We found the [caniuse-lite](https://www.npmjs.com/package/caniuse-lite) package. All the data we need, maybe we can do something with that.

## Thoughts

So next up we have read the articles, we have listened and maybe ignored all the people on the internet. So we have another opinion. We have the data, lets just sum up the features based on releases for all the data we can get from the caniuse-lite package.

## Rules

The rules, for now, are simple. Lets sum up every feature and sort them by release date. Release date meaning the date all the browsers have set the feature to fully supported. This can be a sort of release date for a feature on the internet. This is done in more places on the internet, in javascript we now have es2019, es2020 etc. So to create the basic specs we can just say we have releases x feature in x year. But for now just sum up the data.

### The browsers

We also need to use some browsers. For now we just made the rule we use the 4 major browsers. [chrome](https://www.google.com/chrome/), [edge](https://www.microsoft.com/en-us/edge), [firefox](https://www.mozilla.org/en-US/firefox/new/) and [safari](https://www.apple.com/safari/). Maybe we can add the mobile versions, maybe not. If you have opinions, please share. The data can only get better moving forward.

Just a thought as a reminder, the data we have is for css, html and javascript. So if there is a feature that is not just css, just keep in mind we just made a list of features. The css part is the part we can use for this article, the rest is just more information. Information we can also use. 

## Steps

First we sum op the browsers by date. Just sum up to get the data, just as a reference. We have the list [here](https://disjfa.github.io/css4/browsers/index.html). Just list all browser by date, simple.

```javascript
let lite = require('caniuse-lite');
let agent = lite.agents[i];
...
```

Next up, list all the features. All the features and setup a table adding some colors to show if a feature is supported, [check the list of features here](https://disjfa.github.io/css4/features/index.html).

```javascript
let lite = require('caniuse-lite');
let features = lite.features;
...
```

Cool, we have a sample. Lets play some more. We need a support table that can tell us what we can use from when. So next up we made a list of features. Checked if a feature is fully supported, and from there get the date of the last browser that supports the feature. Not hard, but it can be done. So to sup it all up, we added some functions and made that list! Based upon the latest data we have. The list can be found [here](https://disjfa.github.io/css4/).

## Cool, data

So now we have the data. We have the list based on dates supported. Now we can tell by a simple list  what has been supported, by date. This is very handy, we can see when we can use features. By date. Also we can just read the entire list to see what we didn't know even existed. Or just to have a log of items to see and learn. There is a date in the list in january 2020 when edge moved over to chromium when a lot released. So january 2020 is a date to remember for support.

## Next

Next is just to make the web more awesome! We know what we can use, we know how to make it more awesome. If you have thoughts on the data, please let us know. If you do not agree on a step we used here, feel free to check the source and do you. We just made a list of open data to show the things we like and want to see.

Just make cool stuff.
 
