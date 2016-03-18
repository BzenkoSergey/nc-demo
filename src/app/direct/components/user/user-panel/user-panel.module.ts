import * as angular from 'angular';

import adminPanel from './admin/admin.module.ts';
import guestPanel from './guest/guest.module.ts';

let module = angular.module('user-panel', [
    adminPanel.name,
    guestPanel.name
]);

import component from './user-panel.component.ts';
module.component('userPanel', component);

export default module;