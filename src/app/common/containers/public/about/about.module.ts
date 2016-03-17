import * as angular from 'angular';
import component from './about.component.ts';

let module = angular.module('public.about', []);
module.component('publicAbout', component);

export default module;