import * as angular from 'angular';
import component from './user.component.ts';

let module = angular.module('user', []);

module.component('user', component);

export default module;