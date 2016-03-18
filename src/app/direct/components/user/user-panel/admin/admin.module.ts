import * as angular from 'angular';

let module = angular.module('admin-panel', []);

import component from './admin.component.ts';
module.component('adminPanel', component);

export default module;