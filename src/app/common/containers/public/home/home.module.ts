import * as angular from 'angular';
import component from './home.component.ts';

let module = angular.module('public.home', []);
module.component('publicHome', component);

export default module;