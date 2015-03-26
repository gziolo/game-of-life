Conway's Game of life [![Build Status](https://travis-ci.org/gziolo/game-of-life-es6.png?branch=master)](https://travis-ci.org/gziolo/game-of-life-es6)
============
ES6 JavaScript algorithm implementation.

## Rules ##

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbours dies, as if caused by under-population.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overcrowding.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

## Good coding pratices ##

According to Kent Back four rules for a simple system are in order (most important first):

1. Run all the tests
2. Contain no duplicate code
3. Express all the ideas the author wants to express
4. Minimize classes and methods

SOLID principles:

1. Single Responsibility (SRP): ```A class (component) should have one, and only one, reason
to change```.
2. Open-Closed (OCP): ```A system should be open for extension, but closed for
modification```.
3. Liskov Substitution (LSP): ```Derived types should be substitutable for their base types```.
4. Interface Segregation (ISP): ```Abstractions should not depend upon details. Details should depend upon abstractions```.
5. Dependency Inversion (DIP): ```Interfaces should be small, focused on a specific use case```. 

The DRY (Don't Repeat Yourself) Principle states:

```
Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
```

## Requirements

- Node 0.12.x or io.js 1.x
- grunt-cli: run npm install -g grunt-cli if needed.
- Windows only: remember to set Git and Node path in environment variable %PATH%.

## Grunt tasks

- `grunt dependencies` - helps to update package.json file
- `grunt spec` - lints the code and runs unit tests 
- `grunt build` - lints the code, runs unit tests, creates `dist/bundle.js` transformed ES5 code
- `grunt` - runs `grunt build`

## Useful Links

### General
- [Game of Life (Wikipedia)](http://en.wikipedia.org/wiki/Conway's_Game_of_Life)
- [Coderetreat](http://coderetreat.org/)
- [Legacy Code Retreat - Rescuing legacy code without fear](http://legacycoderetreat.typepad.com/)

### Design
- [Principles of Object Oriented Design](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)
- [Is Design Dead? - article by Martin Fowler](http://martinfowler.com/articles/designDead.html)
- [Don't Repeat Yourself](http://c2.com/cgi/wiki?DontRepeatYourself)
- [XP Simplicty Rules](http://c2.com/xp/XpSimplicityRules.html)
- [Understanding the Four Rules of Simple Design - book by Corey Haines](https://leanpub.com/4rulesofsimpledesign)
- [The Four Elements of Simple Design](http://www.jbrains.ca/permalink/the-four-elements-of-simple-design)

### ES6
- [Traceur](https://github.com/google/traceur-compiler)
- [An ES6 Module Loader polyfill](https://github.com/ModuleLoader/es6-module-loader)
- [Traceur-TodoMVC – a Backbone.js app written with ES6](http://addyosmani.com/blog/traceur-todomvc/)
- [Practical Workflows for ES6 Modules - video by Guy Bedford](https://www.youtube.com/watch?v=0VUjM-jJf2U)
- [Practical Workflows for ES6 Modules - article by Guy Bedford](http://guybedford.com/practical-workflows-for-es6-modules)
- [Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)
- [Classes in ECMAScript 6](http://www.2ality.com/2015/02/es6-classes-final.html)
- [An aggregation of tooling for ES6](https://github.com/addyosmani/es6-tools)
- [Author In ES6, Transpile To ES5 As A Build-step: A Workflow For Grunt](http://addyosmani.com/blog/author-in-es6-transpile-to-es5-as-a-build-step-a-workflow-for-grunt/)
- [Using Grunt & the ES6 Module Transpiler](http://www.thomasboyt.com/2013/06/21/es6-module-transpiler)
- [ES6 modules today with Babel (6TO5)](http://es6rocks.com/2014/10/es6-modules-today-with-6to5/)
- [Lint Like It’s 2015 (babel-eslint)](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)

### Grunt tasks
- [Grunt](http://gruntjs.com/)
- [ESLint](http://eslint.org/)
- [Karma](http://karma-runner.github.io/)
- [Mocha](http://visionmedia.github.io/mocha/)
- [ChaiJS online test suite](http://chaijs.com/api/test/)
- [Sinon docs](http://sinonjs.org/docs/)
- [Grunt basics](http://24ways.org/2013/grunt-is-not-weird-and-hard/)
- [How to squeeze the most out of your build configuration](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)
- [Testing Asynchronous JavaScript](http://martinfowler.com/articles/asyncJS.html)
