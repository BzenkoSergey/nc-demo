import * as angular from 'angular';
import component from './links.component.ts';

let module = angular.module('public.links', []);
module.component('publicLinks', component);

export default module;