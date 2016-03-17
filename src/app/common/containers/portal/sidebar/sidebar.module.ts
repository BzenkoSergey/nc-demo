import * as angular from 'angular';
import links from './links/links.module.ts';
import component from './sidebar.component.ts';

let module = angular.module('portal.sidebar', [
    links.name
]);

module.component('sidebar', component);

export default module;