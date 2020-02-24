---
layout: post
title: Create examples!
date: 2018-02-13 23:17:01 +0200
intro: Ever wondered around github and seen an awesome package you would like to use, only to see there is a readme of one line not explaining what is does. No more, lets document things.
categories: medium github
type: article
image: /img/headers/yingpis-kalayom-133680.jpg
unsplash-url: https://unsplash.com/photos/By1szZOVpHg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: Yingpis Kalayom
---

Ever wondered around [github](https://github.com/) and seen an awesome package you would like to use, only to see there is a readme of one line not explaining what is does. No more, lets document things.


First of, don’t misunderstand the power of the readme on github. This is the point people start when they find your project usually. But you can [find](https://www.google.nl/search?q=how+to+readme) out what to do there on the internet. We are checking out the next step.

And don’t forget, i don’t know all the options. I will just name a few i know, like and use in my projects.

## gh-pages (branch)
There is a branch to get started on github, in you repository right now! If you have a project just create a new branch named `gh-pages`. Add an index.html and write some code, `Hello world!` would be nice. Push that to your github and let github publish all you need.

If your github branch is named [https://github.com/disjfa/demo-pages](https://github.com/disjfa/demo-pages), and you did push to the gh pages, you now have a website on [https://disjfa.github.io/demo-pages/](https://disjfa.github.io/demo-pages/) (note the / on the end). True, it only says `Hello world!`. But we have to start somewhere.

## jekyll
Now we know about this `gh-pages` branch, there are some things you need to know. Github supports plain html files, but they also support this static site generator named [jekyll](https://jekyllrb.com/). When you push a branch using jekyll github automatically generates the pages on push to `gh-pages`.

An example, i made my main github pages [disjfa.github.io](https://github.com/disjfa/disjfa.github.io) using jekyll and changed the `gh-pages` branch in my settings to my master branch. If i push this branch i now get my page as it should on [https://disjfa.github.io](https://disjfa.github.io/).

Read more [about GitHub Pages and Jekyll](https://help.github.com/articles/about-github-pages-and-jekyll/).

## gh-pages (node)
Next up, i like to make javascript sites, plugins and things. Or if you just want to create a site using another [static site generator](https://www.staticgen.com/). You usually have a build script to build a site to use. Let’s example!

I built this vue plugin, [vue-route-timeline](https://github.com/disjfa/vue-route-timeline). In this a also have some examples i use to build and check out my plugin. In my npm scripts i have a build script, `npm run build`. This will build my site and outputs it to the dist folder. So the dist folder would be used to publish, now i know of this `gh-pages` branch! Lets publish there.

## Install gh-pages

```yaml
npm i gh-pages
```
And publish

```yaml
gh-pages -d dist
```

Or add this to my “scripts” in my package.json

```json
"scripts": {
  "gh-pages": "gh-pages -d dist",
}
```

So we can run

```yaml 
npm run gh-pages
```

Note the -d for the directory we want to push. Gh-pages will checkout your `gh-pages`, check the dist folder. And push this to your `gh-pages` branch.

This way you can push anything there you want. I use this in advanced jekyll projects and javascript projects. Just don’t forget that the base folder of you gh-pages isn’t always the ‘/’ folder. But the ‘/project-name’ folder. I had to change that on my build scripts along the way. The previous example of my timeline can be found here, [https://vue-route-timeline.js.org/](https://vue-route-timeline.js.org/).

## gitbook
Next, lets get back to simple times. Github, and the readme is made using markdown. If you would just want to make some documentation using markdown it would be awesome on github, but we can extend, using [gitbook](https://www.gitbook.com/).

This is a central storage where documentation is store, so it is an easy way to create and store a doc. Lets example!

I have this repo for a basic symfony project, [glynn-admin-symfony4](https://github.com/disjfa/glynn-admin-symfony4). As this is a symfony project i cannot push it to a static page so i added [gitbook-cli](https://www.npmjs.com/package/gitbook-cli).

In my project i added a book.json file pointing to the docs folder.

```json
{
  "title": "Glynn admin, for symfony4",  
  "root": "./docs"
}
```
So this would point to my docs folder. Setup the docs using

```yaml
gitbook init
```
In settings > Integrations & services in my repo i also added the gitbook app so when i push my branch gitbook knows and re-indexes my docs. Now it will be published there, as an example the book i have can be seen [here](https://disjfa.gitbooks.io/glynn-admin-symfony4/content/). And in my repo the docs can also be read on github. You can also check the book locally using `gitbook serve`.

## And done!
These are the tips and tricks i have for you today, i like them all. Each for there own and custom way to use. They all have a thing for a project i like. And with them i built the docs i like.

## Tips and tricks
`CNAME`. If you have a custom domain, you can point this to the github.io domain and use that as a domain to use as your domain for you examples. The site is hosted on github and you have your domain name. As an example on a previous link for my vue route timeline, i setup a [cname here](https://github.com/disjfa/vue-route-timeline/blob/gh-pages/CNAME). Pointing to [https://vue-route-timeline.js.org](https://vue-route-timeline.js.org/#/hello). Now if you go to the github.io domain you will be redirected to the previous mentioned url. As you can see here [https://disjfa.github.io/vue-route-timeline](https://disjfa.github.io/vue-route-timeline).

And dns.js.org, again as previously mentioned. A dns for javascript projects. If you push a change for your *.js.org domain they will be awesome and let you have a url on their domain. They only link to static sites on github so it is awesome to use as examples as i have shown!

## Enjoy!
Now i hope you create examples, docs, tips and tricks for all the projects you build. Lets build awesome things! Clap if you like it and if you want to tell me what you did you can always let me know on twitter!

