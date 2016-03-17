import * as angular from 'angular';
// import auth from './../../modules/auth/auth.module.ts';

import header from './header/header.module.ts';
import sidebar from './sidebar/sidebar.module.ts';

import dashboard from './dashboard/dashboard.module.ts';
import user from './../../components/user/user.module.ts';
import deals from './../../components/deals/deals.module.ts';
import design from './../../components/design/design.module.ts';

let module = angular.module('portal', [
    header.name,
    sidebar.name,
    
    dashboard.name,
    user.name,
    deals.name,
    design.name
]);

import component from './portal.component.ts';
module.component('portal', component);

export default module;