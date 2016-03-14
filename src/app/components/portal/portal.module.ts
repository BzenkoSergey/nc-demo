import * as angular from 'angular';
import component from './portal.component.ts';
import header from './header/header.module.ts';
import sidebar from './sidebar/sidebar.module.ts';


import dashboard from './dashboard/dashboard.module.ts';
import user from './user/user.module.ts';

let module = angular.module('portal', [
    header.name,
    sidebar.name,
    
    dashboard.name,
    user.name,
    'ngComponentRouter'
]);
module.component('portal', component);

module.value('$routerRootComponent', 'portal');

export default module;