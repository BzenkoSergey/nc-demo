import * as angular from 'angular';
import component from './links.component.ts';

let module = angular.module('portal.sidebar.links', []);
module.component('portalSidebarLinks', component);

export default module;