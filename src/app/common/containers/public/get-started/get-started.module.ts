import * as angular from 'angular';
import component from './get-started.component.ts';

let module = angular.module('public.get-started', []);
module.component('publicGetStarted', component);

export default module;