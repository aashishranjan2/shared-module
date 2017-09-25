import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {SharedModuleMaster} from 'shared-module-master';

@Component({
  selector: 'main'
})

@View({
  directives: [SharedModuleMaster],
  template: `
    <shared-module-master></shared-module-master>
  `
})

class Main {

}

bootstrap(Main);
