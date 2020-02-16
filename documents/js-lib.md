# Javascript Library

## Polyfills

Create polyfill builds based on the client's browser and serve only what's needed. This allows you to write modern JavaScript without worrying too much

* <script src="https://polyfill.io/v3/polyfill.js?features=Promise"></script>
* [Polyfill Homepage](https://polyfill.io/)
* [Polyfill Repository](https://github.com/polyfills/polyfills)
* [Polyfill Service Repository](https://github.com/financial-times/polyfill-service)

## core-js

Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2020: promises, symbols, collections, iterators, typed arrays, many other features, ECMAScript proposals, some cross-platform WHATWG / W3C features and proposals like URL. 

* `npm install --save core-js@3.6.4`  // global version
* `npm install --save core-js-pure@3.6.4` // version without global namespace pollution
* [core-js Repository](https://github.com/zloirock/core-js)

## babel

Babel is a JavaScript compiler, Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.

* [Babel Homepage](https://babeljs.io)
* [Babel Repository](https://github.com/babel/babel)

## Material Components for the web

Material Components for the web (MDC Web) helps developers execute Material Design.

* npm install material-components-web // 5.0.0
* copy @Material folder to vendor mdc, search import "@material to replace import "mdc
* import js and set sassopitons to vendor in ember-cli-build.js
* install ember-cli-sass and import css in _mdc.scss
* `npm run clean-vendor`
* [Material Design guidelines](https://material.io/design/)
* [Material Components for the web](https://material.io/develop/web/)
* [Material Components Demo](https://material-components.github.io/material-components-web-catalog/)
* [material-components-web Repository](https://github.com/material-components/material-components-web)


  
