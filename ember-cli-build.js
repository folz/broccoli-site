/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/bootstrap-sandstone-3.3.1+2.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

  // Highlight.js
  app.import('bower_components/highlightjs/styles/monokai_sublime.css');
  app.import('bower_components/highlightjs/highlight.pack.js');

  return app.toTree();
};
