import * as angular from 'angular';
import component from './stats.component.ts';

let module = angular.module('deals.stats', []);

module.component('dealsStats', component);

export default module;