  require.config({
    // The root from which RJS will *start* looking for paths.
    // This is relative to the loading HTML page, which for our SPA is:
    // "full/amd/app/".
    //
    // Set this to `js/vendor` to allow common vendor libraries to come in
    // straight by normal name.
    //
    // See: http://requirejs.org/docs/api.html#config-baseUrl
    baseUrl: "../bower_components",

    // Shims: Bridge non-AMD libraries to AMD by specifying deps and exports.
    // - `deps`: Array of RJS names of libraries that are depended on.
    // - `exports`: String name of `window.NAME` variable to export.
    //
    // See: http://requirejs.org/docs/api.html#config-shim
    // shim: {
    //   "jquery": {
    //     exports: "$"
    //   }
    // },

    // Maps: Specify aliases and specific libraries for plugins.
    //
    // See: http://requirejs.org/docs/api.html#config-map
    map: {},

    // Paths: Prefixes / full paths to find libraries.
    //
    // See: http://requirejs.org/docs/api.html#config-paths
    paths: {
      // Vendor libraries.
      "underscore":"lodash/dist/lodash",
      "backbone":"backbone/backbone",
      "hbs": "hbs/hbs",
      "jquery":"jQuery/dist/jquery",
      "isotope": "isotope/dist/isotope.pkgd",

      // Application libraries.
      // Set up "app/" as base application prefix.
      "app": "../js"
    }
  });
