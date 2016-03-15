import * as angular from 'angular';
import component from './deals.component.ts';

let module = angular.module('deals', []);

module.component('deals', component);

export default module;