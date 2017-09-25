import {Component, View} from 'angular2/core';

@Component({
  selector: 'shared-module-master'
})

@View({
  templateUrl: 'shared-module-master.html'
})

export class SharedModuleMaster {

  constructor() {
    console.info('SharedModuleMaster Component Mounted Successfully');
  }

}
