# ng1-tests - Unit Testing AngularJS Apps using Jasmine in Node.js

## Introduction

This project documents how to write unit tests on legacy AngularJS apps using Node.js and the Jasmine command line.

AngularJS support may cease in a couple of years, but there are still AngularJS apps being maintained, and in some case, developed because of mandatory choices in some organizations.

Usually, developers use Karma or the browser to unit test AngularJS apps. I personally find the developer experience *underwhelming* in both cases:

* with Karma:
    * debugging from Visual Studio Code is not optimal, because if tests are run in a browser, debugging setup is not easy, and a debugging session takes time to start because the browser must be launched
    * in my attempts, debugging sometimes failed
    * I could not find how to debug with JSDOM as a browser instead
    * the output is not really developer-friendly, when compared to a modern runner like [Jest](https://jestjs.io/)
* with a browser:
    * when using the Jasmine spec runner HTML file, debugging must be done in the browser instead of in the IDE
    * constantly switching from the IDE to the browser, and back, is far from a great developer experience and is IMHO an obstacle to adopting TDD

Coming from a .NET and Node.js background, I greatly prefer debugging from my IDE of choice. And with JavaScript, that is Visual Studio Code.

The React and Vue.js communities run tests under Node.js with a simulated browser, [jsdom](https://github.com/jsdom/jsdom). It **is** possible to use the same technique with AngularJS, but testing AngularJS code with jsdom requires a specific and obscure setup.

I greatly prefer the Jest test runner and the [Jest extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): the developer experience is **magical**. However, Jasmine may be the mandatory test framework in your organization (it is, in mine). Furthermore, Jasmine is the standard for testing in the AngularJS community.

Consequently, this project will use the [Jasmine command line for Node.js](https://jasmine.github.io/setup/nodejs.html). The setup is harder, because Jest has integrated DOM simulation with `jsdom`, and Jasmine for Node.js, of course, does not (because it's meant for Node.js apps).

But there is a really great Visual Studio Code extension for running Jasmine tests, [Jasmine Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-jasmine-test-adapter), that is coming around very nicely and features a test explorer UI (which the Jest extension lacks) which reminds of the Visual Studio 2017 test explorer with live testing.
