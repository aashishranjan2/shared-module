System.register("shared-module-master", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      SharedModuleMaster;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      SharedModuleMaster = function() {
        function SharedModuleMaster() {
          console.info('SharedModuleMaster Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(SharedModuleMaster, {}, {});
      }();
      $__export("SharedModuleMaster", SharedModuleMaster);
      Object.defineProperty(SharedModuleMaster, "annotations", {get: function() {
          return [new Component({selector: 'shared-module-master'}), new View({templateUrl: 'shared-module-master.html'})];
        }});
    }
  };
});
