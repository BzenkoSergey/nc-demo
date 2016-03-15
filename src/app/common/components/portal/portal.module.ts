import * as angular from 'angular';
import header from './header/header.module.ts';
import sidebar from './sidebar/sidebar.module.ts';

import dashboard from './../dashboard/dashboard.module.ts';
import user from './../user/user.module.ts';
import deals from './../deals/deals.module.ts';
import design from './../design/design.module.ts';

let module = angular.module('portal', [
    header.name,
    sidebar.name,
    
    dashboard.name,
    user.name,
    deals.name,
    design.name,
    'ngComponentRouter'
]);

import component from './portal.component.ts';
module.component('portal', component);

module.value('$routerRootComponent', 'portal');

export default module;