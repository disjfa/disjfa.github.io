---
layout: post
title: "Vue, creating custom component"
date: 2019-05-14 21:17:01 +0200
intro: We have already started making a vue app. Now let's go and try and make a custom component using vuejs. It could be useful they said.
categories: medium vuejs vue-plugin
image: /img/headers/photo-1543966888-7c1dc482a810.jpg
unsplash-url: https://unsplash.com/photos/oZMUrWFHOB4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: Paul Esch-Laurent
---

We have already started making a vue app. Now let's go and try and make a custom component using vuejs. It could be useful they said.

## Img

Now just to get started. Most of the issues and items we are discussing today i learned in a talk about vue. You can checkout the talk here.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WH_zrZpMtCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### The goal

The goal of today is that we create a full component that can be reused by anyone. Such a wonderful thing of just making a piece of script anyone can include in a vue project. Using a build script or just include some js from the internet. The result i have is a minesweeper clone. You can check it out on my [codepen](https://codepen.io/disjfa/pen/axdmob) or [demo site](https://vue-minesweeper.js.org/), also [github](https://github.com/disjfa/vue-minesweeper). So as a demo this is what we end up with when we have all external javascript.

### Example

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://unpkg.com/vue-minesweeper"></script>
```
Add some html
```html
<div id="app">
  <minesweeper-game>
</div>
```
And a piece of javascript
```javascript
var app = new Vue();
app.$mount("#app");
```

### Seems simple enough!

So cool, let's get this thing started. First of we need a project, we use [vue cli](https://cli.vuejs.org/) as we should! Just go through the steps as you know.

```yaml
vue create my-project
```

Cool, a project. Next we move the `src` folder to a docs folder, we like docs. We use the setup as they should but on another folder. Next up we need to tell npm to do just that so we change the scripts in the `package.json`.

```json
{
    "scripts": {
        "build": "vue-cli-service build --target lib --name VueMyProject src/index.js",
        "build:docs": "vue-cli-service build ./docs/main",
        "serve": "vue-cli-service serve ./docs/main"
    }
}
```

To check, the new `build` script is linked to the `src` folder, als it should. But now we also add the `--target lib` and the `--name VueMyProject`. This is to say we want to eventually need to build the project as a library, with the name `VueMyProject `.

The `build:docs` command builds the docs. The docs we use and abuse for testing the new component. Also we need to serve the files for local development. Useful!

Before we start, we are gonna add a new `src` folder and a `src/index.js` main file. This is the start point of the component we are building. As we are making components also add a component in `src/components/MyComponent.vue`. This can be a basic component, you know how to get that started. Code!

```javascript
import Vue from 'vue';
import MyComponent from './components/MyComponent.vue';

function install(Vue, options = {}) {
  Vue.component(MyComponent, MyComponent);
}

if (typeof window !== 'undefined'
  && window.Vue
  && window.Vue === Vue
) {
  install(window.Vue);
}
export default install;
```

### Digest

We import `Vue` from `'vue'`, we import the component we just built. Add a install function. Add a check if there is a `window`, this is for the check when we just include the script as a script on the page. It will automatically install the component when Vue is defined on the `window` aka browser. Last part is to export the install function to be used when we "build" a vue project and we do not have a global vue component yet.

### Digest some more

Vue on window,  project what not. What are we going on about. The first example is how we "installed" the component as above, in the example earlier. Next one is when we have the component on npm as example and we can import it in our project. Just like any other component in vue, example.

```javascript
import Vue from 'vue';
...
import MyComponent from 'my-component';

...
Vue.use(MyComponent);
```

This import is useful, we can use that in our docs. But our docs won't use the final component, we want to test and build the component. So we change that statement like this

```javascript
import MyComponent from '../scr';
```

We just load the component from the src folder. This so we can use, play around and test the component. Awesome! Now we can just make, test and add on the component as we want. But the component is seperate from the docs. So we have a build for the docs, and for the "main" script. Nice, no hassle of making custom docs or adding weird builds to test or make the thing. Just all in one location we can test.

So now it is up to you to build your docs and test/add some test cases to show your awesome component. At the end you can deploy those files to your gh-pages branch or [js.org](https://js.org/) like we did on the minesweeper component. More on their website about that!

### Fin!

This is basically the thing. But we won't end here. We want a bit on the nitty gritty. Dig deeper, the video earlier did that. `package.json`

### peerDependencies

```json
{
    "peerDependencies": {
        "vue": "^2.6.6"
    }
}
```

A way to get and set up dependencies is using `peerDependencies`. We know about `dependencies` and `devDependencies`. But a `peerDependencies`? This is checked when we only build a component but just want to mention that another one is needed. Like the example at the start, we include vue and then the component. If we would only include the latter we should get a mention that vue should be loaded also.

### Deploy somewhere

Next we like to deploy somewhere. Somewhere, anywhere. Let's check `package.json`.
```json
{
    "main": "dist/VueMinesweeper.umd.js",
    "browser": "dist/VueMinesweeper.common.js",
    "unpkg": "dist/VueMinesweeper.umd.min.js",
    "jsDelivr": "dist/VueMinesweeper.umd.min.js",
}
```

Main, the main file to be included when we added to the build scripts (`@import 'my-component'`) Browser, to be used as common js in the browser i suppose. Unpkg and jsDelivr, [unpkg](https://unpkg.com/) and [jsDelivr](https://www.jsdelivr.com/) are a website indexing and serving your npm modules for you, like a cdn but even more easier. In the first example I fetch vue from jsDeliver and my package from unpkg. So easy, just deploy you custom component and add you package name to the urls. So easy.

### Small things

Components are awesome, but they have limitations. In a time i made a component using a [vuex](https://vuex.vuejs.org/) store and a [router](https://router.vuejs.org/), but because a vuex store needs more setup, as does the router. So they cannot be "just" include in a plugin to be loaded from an external site. Well it could when we build up some more setup of add more bootstrap code. So be aware of what you like to build and keep those things in mind.

### Even further

Yes, even more. There is lots more in the video above, small things to make life harder, like the `--report` flag on the build script. Check if your final package is actually as small as it could. Files in your `package.json` to only deploy files to npm that are actually needed. But i think i will just end things here.

Just don't forget to checkout my example and maybe play some [minesweeper](https://vue-minesweeper.js.org/).


