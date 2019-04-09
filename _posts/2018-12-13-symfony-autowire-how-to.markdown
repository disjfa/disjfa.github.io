---
layout: post
title: "Symfony autowire, how to"
date: 2018-12-13 23:17:01 +0200
intro: Symfony, a set of reusable PHP components, has the auto wire feature for a while now. Lets dive into that. Let’s auto wire a hello world service.
categories: medium php symfony
image: /img/headers/jose-miquel-FFN1sSX9ZZqw.jpeg
unsplash-url: https://unsplash.com/photos/cNqwm1RB7Tw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
unsplash-user: José Miguel
---

[Symfony](https://symfony.com/), a set of reusable PHP components, has the auto wire feature for a while now. Lets dive into that. Let’s auto wire a hello world service.

Since symfony 4 they have set up a basic [skeleton](https://github.com/symfony/skeleton) framework, this is so we do not need a “big” setup using [doctrine](https://symfony.com/doc/current/doctrine.html) for a database, [twig](https://symfony.com/doc/current/templating.html) for a template engine, and such. If you do you want the old setup you can check the [website-skeleton](https://github.com/symfony/website-skeleton).

## Instalation
Lets get started. Installation using composer.

```yaml
composer create-project symfony/skeleton my_project
```
The composer create-project call will download the repo without the git data and put it in a new folder, and do a composer install. This is the message we get on the end of installation.

## What’s next?
Run your application:
1. Change to the project directory
2. Create your code repository with the git init command
3. Run composer require server --dev to install the development web server,
 or configure another supported web server [https://symfony.com/doc/current/setup/web_server_configuration.html](https://symfony.com/doc/current/setup/web_server_configuration.html)

A nice message, also a message about an internal server. We don’t have a server so we will use that for now.

```yaml
cd my_project
composer require server --dev
```
Done, server installed. Les’t take a look at the thing we made.

```yaml
bin/console server:start
```
It said the server started at port 8000, so we open [http://127.0.0.1:8000](http://127.0.0.1:8000). Here we are greeted with a nice method symfony is installed.

## Auto wiring
Ok, the article was about auto wiring and until now we just installed a symfony project. So i have actually not said anything yet. Lets start auto wiring! What is auto wiring, it is “Defining Services Dependencies Automatically” as stated on the symfony page. Before auto wiring symfony had a need to manually configure all you classes in service definitions. Those would be in yaml, xml and php files. Usually a pain in the head, so they did something to make developing a little bit easier.

If set up in a bundle or project symfony will scan all the files and cache all the file definitions in you app/bundle. In the skeleton project, check `config/services.yaml`

## Config
```yaml
services:
    _defaults:
        autowire: true
        autoconfigure: true

    App\:
        resource: '../src/*'
        exclude: '../src/{DependencyInjection,Entity,Migrations,Tests,Kernel.php}'

    App\Controller\:
        resource: '../src/Controller'
        tags: ['controller.service_arguments']
```
The main part is to add the _`defaults`: to autowire and autoconfigure. And we have to tell where the files are. In this example all the files in the App\ namespace, wich is set to your `src/` folder will be autowired and autoconfigured.

In symfony we also have to tag some services, if this is wanted you can also auto tag all files in a folder. In this example all files in the `App\Controller\` namespace will be tagged as controllers. As they should.

## Next thing
As i am typing i realize i have just installed symfony and done nothing, so let’s divert again!

## Debugging
You are wondering what services there are. Lets go back to the command line! Start typing;

```yaml
bin/console debug:container
```
This command will show you all the services already registered or auto wired. You can serach for an example by adding an argument

```yaml
bin/console debug:container log
```
This will list all the services that do things with logging. You can even check the details of all the services defined. Useful!

## Lets start auto wiring
Finally, typing. Let’s make a HelloWorldService service in `src/Services/HelloWorldService.php`. We want to make a service and inject another. Because we just have a clean skeleton we can use the `RequestStack` to get the master request. In the service we check if we have a `who` in the query string and return that in a `Response`. Simple, useful for a hello world example.

```php
<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;

class HelloWorldService
{
    /**
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack)
    {
        $this->request = $requestStack->getMasterRequest();
    }

    /**
     * @return Response
     */
    public function sayWhat()
    {
        if ($this->request->query->has('who')) {
            return new Response('Hello ' . $this->request->query->get('who'));
        }

        return new Response('Hello world');
    }
}
```
Next, warm up the cache and search for the hello service in the container.

```yaml
bin/console cache:warmup
bin/console debug:container hello
```
Now our service should show up in the list, when we select the service we get the information about the service.

```yaml
Information for Service "App\Services\HelloWorldService"
========================================================
---------------- --------------------------------
Option           Value
---------------- --------------------------------
Service ID       App\Services\HelloWorldService
Class            App\Services\HelloWorldService
Tags             -
Public           no
Synthetic        no
Lazy             no
Shared           yes
Abstract         no
Autowired        yes
Autoconfigured   yes
---------------- --------------------------------
```

## Information
So we made a service, it is registered. Most of the key in the list are hard to explain, or i just don’t know everything. One item I wan’t to say. `Public`. In good olden days we called services from the Container classes. Those services were public. In a controller we would type something like this;

```php
public function index()
{
    $service = $this->get('App\Services\HelloWorldService');
    ...
}
```
## Side step again
As a [best practice](https://symfony.com/doc/current/service_container.html#public-versus-private-services) you should not register you services as public. And since we want to autowire our new services anyway we won’t need to. We autowire.

## Controller
Let’s change that welcome to symfony page, add a controller. I named it `HelloWorldController`. Add this controller in a file named `src/Controller/HelloWorldController.php`.

```php
<?php

namespace App\Controller;

use App\Services\HelloWorldService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class HelloWorldController extends AbstractController
{
    /**
     * @param HelloWorldService $helloWorldService
     * @return Response
     */
    public function index(HelloWorldService $helloWorldService)
    {
        return $helloWorldService->sayWhat();
    }
}
```

As we see here we just inject the service in the index, and it will return a response from the `sayWhat` function.

## Route
Route to the controller, in `config/routes.yaml` add the following, since [annotations](https://symfony.com/doc/current/routing.html) for routes is not yet installed.

```yaml
index:
    path: /
    controller: App\Controller\HelloWorldController::index
```

Clear the cache and get to the localhost. On the localhost we should see a nice hello world. Also as seen in our service when we add a who to the query params we should see a new response. When we go to http://127.0.0.1:8000/?who=moon we should see a nice “Hello moon” message.

## And done!
We made a service, injected a router stack into the service. Next we used the service in a controller and let the service create a response! Looks like a lot for a string in my browser but it sets up the basics. Next just go make a larger app and start injecting the `EntityManagerInterface` to do doctrine stuff or `TranslatorInterface` to translate stuff or services from bundles you make or like to use!

## Aliasses
When you want to auto wire services from bundles who have not setup the bundle using the autowire setup you can still use them. As an example i want to inject a FilterService from the liip_imagine bundle. They set that up as a ‘@liip_imagine.service.filter’ service id (service id, check the `debug:controller`). You can just set up an alias in a *.yaml service.

```yaml
services:
    Liip\ImagineBundle\Service\FilterService: '@liip_imagine.service.filter'
```

So now it re-auto wires the FilterService to the original service name.

## _instance
If you want to auto wire or auto tag a service, you can set it up in a [_instanceof service configuration](https://symfony.com/blog/new-in-symfony-3-3-simpler-service-configuration#interface-based-service-configuration);

```yaml
# app/config/services.yml
services:
    _instanceof:
        Twig_ExtensionInterface:
            tags: ['twig.extension']
```

This will auto tag all Twig extensions as a twig extensions (more examples in the link).

## Bundles
If you have a bundle you have to explain to symfony you use autowire again. And the setup is exactly the same, except for two more `../` dots. In your `Resources/config/services.yaml` you have to tell symfony again to check.

```yaml
services:
    _defaults:
        autowire: true
        autoconfigure: false

    Acme\MyBundle\:
        resource: '../../*'
        exclude: '../../{Entity,Migrations,Tests}'

    Acme\MyBundle\Controller\:
        resource: '../../Controller'
        tags: ['controller.service_arguments']
...
```
And so on. But don’t forget to add this to the bundle, and enjoy. Also you can add the autowire on a specific service declaration so symfony will check the class arguments.

```yaml
services:
    Acme\MyBundle\Service\MyService:
        autowire: true
```

This will just add the auto wiring to a specific service when the _defaults is not set. Handy in some projects.

## And done again!
Explained it, at least i hope. Add some exceptions. Added some examples. Hope i wrote it in a way people can understand and start auto wiring all the services! And enjoy!

