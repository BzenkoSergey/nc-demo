import * as angular from 'angular';
import portalModule from './../portal/portal.module.ts';
import publicModule from './../public/public.module.ts';


let module = angular.module('index', [
    portalModule.name,
    publicModule.name,
  
    'ngComponentRouter'
]);

import component from './index.component.ts';
module.component('index', component);

module.value('$routerRootComponent', 'index');

export default module;