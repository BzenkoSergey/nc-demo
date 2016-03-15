import * as angular from 'angular';
import component from './sidebar.component.ts';

let module = angular.module('sidebar', []);
module.component('sidebar', component);

export default module;