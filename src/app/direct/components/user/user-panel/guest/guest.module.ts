import * as angular from 'angular';

let module = angular.module('guest-panel', []);

import component from './guest.component.ts';
module.component('guestPanel', component);

export default module;