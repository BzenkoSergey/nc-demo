import * as angular from 'angular';
import component from './design.component.ts';

let module = angular.module('design', []);

module.component('design', component);

export default module;