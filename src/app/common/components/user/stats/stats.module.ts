import * as angular from 'angular';

let module = angular.module('user.stats', []);

import component from './stats.component.ts';
module.component('userStats', component);

export default module;