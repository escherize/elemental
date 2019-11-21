# Elemental

The simple ClojureScript game setup

## Rationale

I setup an experimental snake game at https://escherize.com/#/post/2 and had a few nicepeople ask me how I set it up, so I am going ahead and documenting the process here.

## Installing

``` shell
git clone https://github.com/escherize/elemental.git
cd elemental
npm install react react-dom react-create-class
```

## Development

``` shell
shadow-cljs watch :app
```

Open http://localhost:8700 and once its done compiling you should see you game. It will update as you update the code!

### Emacs
If you use cider, you can jack-in and you will be greeted with the shadow.user namespace.

``` clojure
shadow.user> (shadow/watch :app)
[:app] Configuring build.
[:app] Compiling ...
[:app] Build completed. (185 files, 1 compiled, 0 warnings, 5.62s)
:watching
shadow.user> (shadow/repl :app)
To quit, type: :cljs/quit
[:selected :app]
cljs.user>
```

At this point you are connected to the clojurescript process in the browser.

So you can do interesting things like:
``` clojure
(js/alert "hi")
```

## Archetecture discussion

The basic idea of the setup is:

- App DB - (a map with the entire application state)
- draw-state - simple component that watches the App DB and reactively displays the game
- game loop - runs at fps times per second
 - update-state - simple function called in the game loop to update the App DB


## Release

``` shell
shadow-cljs release :app
```

you can host or publish the /public directory

## License

Copyright © 2019 Bryan Maass

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
