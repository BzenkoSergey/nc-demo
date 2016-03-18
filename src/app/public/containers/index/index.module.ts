import * as angular from 'angular';
import publicModule from './../public/public.module.ts';


let module = angular.module('index', [
    publicModule.name,
  
    'ngComponentRouter'
]);

import component from './index.component.ts';
module.component('index', component);

module.value('$routerRootComponent', 'index');

export default module;