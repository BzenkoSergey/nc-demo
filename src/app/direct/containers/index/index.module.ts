import * as angular from 'angular';
import userPanel from './../../components/user/user-panel/user-panel.module.ts';
import portalModule from './../../../common/containers/portal/portal.module.ts';
import publicModule from './../../../common/containers/public/public.module.ts';

let module = angular.module('index', [
    userPanel.name,
    portalModule.name,
    publicModule.name,
  
    'ngComponentRouter'
]);

import component from './index.component.ts';
module.component('index', component);

module.value('$routerRootComponent', 'index');

export default module;
