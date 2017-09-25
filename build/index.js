System.register("index", ["angular2/core", "angular2/platform/browser", "shared-module-master"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      SharedModuleMaster,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      SharedModuleMaster = $__m.SharedModuleMaster;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [SharedModuleMaster],
            template: "\n    <shared-module-master></shared-module-master>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
