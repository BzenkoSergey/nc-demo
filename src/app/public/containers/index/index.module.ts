import * as angular from 'angular';
import publicModule from './../../../common/containers/public/public.module.ts';


let module = angular.module('index', [
    publicModule.name,
  
    'ngComponentRouter',
    'restangular'
]);

import component from './index.component.ts';
module.component('index', component);

module.value('$routerRootComponent', 'index');

export default module;