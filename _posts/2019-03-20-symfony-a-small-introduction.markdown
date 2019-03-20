---
layout: post
title: "Symfony, a small introduction"
date: 2019-02-26 23:17:01 +0200
intro: Symfony, a set of reusable PHP components from a while back. Since a latest version of 4.0 they introduced a new way of setting up a app/website/api/component. A flex way using symfony flex. Lets take a small look at what to do with that!
categories: medium php symfony
image: /img/headers/paul-esch-laurent-3442251.jpeg
unsplash-url: https://unsplash.com/photos/zZlEcBxJ_Sw?utm_source=unsplash&utm_medium=referral&utm_content
unsplash-user: Paul Esch-Laurent
---

In the olden days we had to install the entire set of components, making a basis for a framework to work on. This can still be done by installing the website skeleton. This is useful if you know that that is what you need to get started.

```yaml
composer create-project symfony/website-skeleton my_project
```

But is it fun. Lets take a deeper dive in installing components.

## Skeleton
Lets install the bare core of symfony.

```yaml
composer create-project symfony/skeleton my_project
```
This is what i got next. Let us read a little.

## What’s next?
Run your application:

* Change to the project directory
* Create your code repository with the git init command
* Run composer require server — dev to install the development web server, or configure another supported web server [https://symfony.com/doc/current/setup/web_server_configuration.html](https://symfony.com/doc/current/setup/web_server_configuration.html)

Go to a folder, add stuff to git, enable a (local) server or check something else. I am testing so i like a local server for now. I like to see the stuff i do in a browser. Lets install.

```yaml
composer require server --dev
```
Cool, we added a local php dev server. Shall we start, we can start the server on the command line.

```yaml
bin/console server:start
```
> [OK] Server listening on [http://127.0.0.1:8000](http://127.0.0.1:8000/)

Server started, lets open a web browser and browse to that url, we have a splash screen where it welcomes us to symfony.

Lets take a step back.

## Flex recipes
As you saw, we installed a package using composer name server. This is no normal package name. No! But what it is is a symfony flex recipe. This means that when we call require on a composer the code first checks if there is a recipe on the flex server. There are a bunch of recipes on the base repository and a lot more on the contrib repository. All the recipes can be found on the [Symfony Recipes Server](https://flex.symfony.com/). Here you can find all packages and their aliases. So if you search for server yu actually find the “symfony/web-server-bundle”. This is what we just installed.

## Folder structure
What we installed with the basic skeleton has a basic folder structure. Lets check a bit.

* bin (for the “bin/console” command)
* config (for all the config files, services and routes etc)
* public (public folder, base point for a web server)
* src (code for the main project)
* var (for logs and caching)
* vendor (for all the git packages)

Thats it for now, just make it easy. Lets just continue.

## Control the flow

If we check the “config/routes.yaml” we see a commented out controller path. Lets just check it for now. Create “src/Controller/DefaultController.php” and add something like this.

```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
class DefaultController extends AbstractController
{
    public function index()
    {
        return new Response('Hello world');
    }
}
```
We just made our first controller. Note that we do not have anything yet, no database, no templating engine, no nothing. But when we uncomment the route in the “routes.yaml” we do have a nice hello world in our browser.

## Make something beautiful
Yes there is a pun in the title. Lets add the maker bundle. This will make live easy for a quick demo. Also when you get lost you can use this. I searched on the recipes server and found that “make” is the shortest alias for this bundle.

```yaml
composer require make --dev
```
Now when we check the commands we can run on the command line we see a lot of make command. I forgot to mention, but you can check the commands on the command line using this command.

```yaml
bin/console
```
It lists them nicely, i found a make for a controller.

```yaml
bin/console make:controller
````
Sadly, making a controller requires us to add the annotations recipe. If you would ask me, strongly recommended.

> [ERROR] Missing package: to use the make:controller command, run:
```yaml
composer require annotations
composer require annotations
```
This added a yaml file in the routes. Here it added a “yes you can annotate a route and we will route there from the src folder” option. Very useful.

Next, make a new controller again. This asked us to name the controller, with an example. My example was “AgreeableKangarooController” so i agreed and got this controller.

```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AgreeableKangarooController extends AbstractController
{
    /**
     * @Route("/agreeable/kangaroo", name="agreeable_kangaroo")
     */
    public function index()
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AgreeableKangarooController.php',
        ]);
    }
}

```
This made a route to [http://127.0.0.1:8000/agreeable/kangaroo](http://127.0.0.1:8000/agreeable/kangaroo)! Cool, we got some json here.

## Next!
We can make stuff, we have a server, and we can see stuff in a browser. If that was all you wanted to do we can stop here! Enjoy your new application. And for some use cases it can be this easy. You could just connect to an existing web service to connect all your data. Add a guzzle client for request or an elastic search client for example, connect them somewhere, and just output your json.

## Some more recipes
Off course we will not end here today, lets check some packages. We can just run some more make commands en see where we end up. For starters i tried to make and entity, i want a local database. This said to me to:

```yaml
composer require orm
```
And for a quick setup i changed the “DATABASE_URL” to the sqlite version in my “.env” file.

```yaml
DATABASE_URL=sqlite:///%kernel.project_dir%/var/data.db
```
And i created my database (check “bin/console” for all the commands)

```yaml
bin/console doctrine:database:create
```
Database done! So i made my entity again.

```yaml
bin/console make:entity
```
It told me to make a “GrumpyPuppy” entity, so sure! I added a name (string) and a description (text).

## Crud
Next up i want to create a crud controller for my “GrumpyPuppy” entity. This is what they asked me.

```yaml
composer require form validator twig-bundle security-csrf
```
Validator, twig and the csrf security. Ok, install those. Next, crud again.

```yaml
bin/console make:crud
```
And it autocompleted my “GrumpyPuppy” entity and make a “GrumpyPuppyController” and added the templates needed. We do need to create the table. Check the table using this.

```yaml
bin/console doctrine:schema:update --dump-sql
```
And make the table

```yaml
bin/console doctrine:schema:update --force
```
Now we have the table, controller, crud and when we check the local server we have the crud in our browser. [http://127.0.0.1:8000/grumpy/puppy/](https://symfony.com/doc/master/frontend.html). Cool, but it looks like plain old html. Lets upgrade the html/css.

## Webpack encore
Symfony has a component using node and npm and things for styling, lets just require those.

```yaml
composer req encore
```
This will add an “assets” folder for JavaScript and style sheets. But the webpack encore talk is for another day. You can checkout the [documentation on the symfony site](https://symfony.com/doc/master/frontend.html). For now just know, i added a sass loader and installed bootstrap.

The only other thing is to update the “config/package/stwig.yaml” file and add the bootstrap 4 theme, check that out [on the symfony site here](https://flex.symfony.com/).

## Ok ok, i have to end this thing
Ok, so this was a simple thing. But now we can setup a symfony flex thing! We can setup a route, we can annotate a route. We can make stuff. We can ask symfony when we make stuff what we have to do. We can create a crud. We can create templates, responses, json responses. We have set up a database. A template system. Added a npm webpack packaging system. Versioned the css and javascript (yes, not mentioned but it was just installed out of the box). We can make every thing a small app needs.

> So much stuff, awesome.

Now it is time. Time you get out in the world and think of something you want to make. And find the time to actually make it. The world of [composer](https://packagist.org/) is out there. The world of npm lies at your finger tips. [Symfony recipes](https://flex.symfony.com/) galore!

Make something awesome!

## One more thing!
Like any talk, one more thing! In the console when you checked commands.

```yaml
bin/console
```
There are a lot of debug commands. Check those, they are awesome. Ask them what they can do for you (add “ — help” on the end). For a small example the router.

```yaml
bin/console debug:router --help
```
It tells you stuff. This will tell you all the router links there are in your app.

```yaml
bin/console debug:router
```
Check what a route actually does.

```yaml
bin/console debug:router agreeable_kangaroo
```
But there is so much more. Check it, it can only help you. Will get back on the debug stuff on a later date.

## Close curtains
Now i think i am really done. Probably not but i will stop for now. Make stuff. it will be awesome. I also listened to a remark about adding the stuff to git. All the code here can be found on [github here](https://github.com/disjfa/symfony-setup). Play with it, please!
