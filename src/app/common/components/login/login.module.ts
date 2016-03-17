import * as angular from 'angular';

let module = angular.module('public.login', []);
module.run(function($rootScope, $rootRouter) {
    $rootScope.$on('unauthorized', function() {
        console.log('unauthorized');
        $rootRouter.navigate(['Public','Login']);
    });
});

import component from './login.component.ts';
module.component('publicLogin', component);

export default module;