import * as angular from 'angular';
import links from './links/links.module.ts';

import login from './../../components/login/login.module.ts';
import about from './about/about.module.ts';
import getStarted from './get-started/get-started.module.ts';
import home from './home/home.module.ts';

let module = angular.module('public', [
    links.name,
    home.name,
    login.name,
    about.name,
    getStarted.name
]);

import component from './public.component.ts';
module.component('public', component);

export default module;