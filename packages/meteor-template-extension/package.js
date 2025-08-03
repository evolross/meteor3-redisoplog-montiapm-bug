Package.describe({
  name    : "sylido:template-extension",
  summary : "Adds template features currently missing from the templating package",
  version : "4.2.0",
  git     : "https://github.com/sylido/meteor-template-extension.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@3.2.2");

  api.use([
    "ecmascript@0.16.8",
    "templating@1.4.3",
    "blaze@3.0.2",
    "tracker@1.3.3",
  ], "client");

  api.addFiles([
    "lib/hooks.js",
    "lib/template-for-each.js",
    "lib/template-hooks.js",
    "lib/template-global-hooks.js",
    "lib/template-for-each-instance.js",
    "lib/template-inherits-events-from.js",
    "lib/template-inherits-helpers-from.js",
    "lib/template-inherits-hooks-from.js",
    "lib/template-register-helpers.js",
    "lib/template-replaces.js",
    "lib/template-clear-event-maps.js",
    "lib/template-copy-as.js",
    "lib/template-instance-parent.js",
    "lib/template-instance-get.js",
    "lib/template-instance-set.js",
    "lib/template-parent-data-function.js"
  ], "client");
});

Package.onTest(function(api) {
  api.use([
    "sylido:template-extension",
    "jquery@3.0.2",
    "templating@1.4.4",
    "tinytest",
    "tracker@1.3.4",
    "ejson@1.1.4",
    "underscore@1.6.4",
    "reactive-var@1.0.13",
  ], "client");

  api.addFiles([
    "tests.html",
    "tests.js"
  ], "client");
});
