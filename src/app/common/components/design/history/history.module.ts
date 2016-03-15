import * as angular from 'angular';
import component from './history.component.ts';

let module = angular.module('design.history', []);

module.component('designHistory', component);

export default module;