import * as angular from 'angular';
import links from './../../../common/containers/public/links/links.module.ts';

import about from './../../../common/containers/public/about/about.module.ts';
import getStarted from './../../../common/containers/public/get-started/get-started.module.ts';
import home from './../../../common/containers/public/home/home.module.ts';

let module = angular.module('public', [
    links.name,
    home.name,
    about.name,
    getStarted.name
]);

import component from './public.component.ts';
module.component('public', component);

export default module;