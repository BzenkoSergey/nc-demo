import * as angular from 'angular';
import component from './dashboard.component.ts';

let module = angular.module('dashboard', []);

module.component('dashboard', component);

export default module;