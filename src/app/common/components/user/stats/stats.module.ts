import * as angular from 'angular';
import component from './stats.component.ts';

let module = angular.module('user.stats', []);

module.component('userStats', component);

export default module;