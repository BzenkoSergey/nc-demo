import * as angular from 'angular';
import header from './header/header.module.ts';
import sidebar from './sidebar/sidebar.module.ts';

import dashboard from './../components/dashboard/dashboard.module.ts';
import user from './../components/user/user.module.ts';
import deals from './../components/deals/deals.module.ts';
import design from './../components/design/design.module.ts';

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