import * as angular from 'angular';
import component from './header.component.ts';

let module = angular.module('portal.header', []);
module.component('header', component);

export default module;