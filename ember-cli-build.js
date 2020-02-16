'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    eslint: {
      testGenerator: 'qunit', // qunit and mocha
      group: true,
      rulesDir: 'eslint-rules',
      extensions: ['js'], // ['js', 'ts']
    },
    sassOptions: {
      extension: "scss",
      sourceMap: true,
      onlyIncluded: true,
      sourceMap: false,
      includePaths: [
        'vendor'
      ]
    },
    'ember-cli-babel': {
      includePolyfill: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  let mdcModuleNames = ["ripple", "textfield", "list", "drawer", "top-app-bar", "chips",
    "form-field", "checkbox", "radio", "select", "floating-label", "slider", "switch", "icon-button"];
  mdcModuleNames.forEach(function(moduleName) {
    app.import({
        development: `vendor/mdc/${moduleName}/dist/mdc.${camelize(moduleName)}.js`,
        production: `vendor/mdc/${moduleName}/dist/mdc.${camelize(moduleName)}.js`,
      },{ 
        using: [{ transformation: 'amd', as: `@material/${moduleName}` }] 
      }
    );
  });

  return app.toTree();
};

const STRING_CAMELIZE_REGEXP_1 = /(\-|\_|\.|\s)+(.)?/g;
const STRING_CAMELIZE_REGEXP_2 = /(^|\/)([A-Z])/g;

function camelize(str) {
  return str
    .replace(STRING_CAMELIZE_REGEXP_1, function(match, separator, chr) {
      return chr ? chr.toUpperCase() : '';
    })
    .replace(STRING_CAMELIZE_REGEXP_2, function(match) {
      return match.toLowerCase();
    });
}