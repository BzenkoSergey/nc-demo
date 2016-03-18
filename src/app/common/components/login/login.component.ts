import AuthService from './../../modules/auth/auth.service.ts';

function ComponentCtrl($rootScope, $rootRouter) {
    this.email = 'test@test.test';
    this.password = '123456';
    this.login = login;
    
    AuthService.logOut();
    $rootScope.$broadcast('unauthorized');

    function login() {
        return AuthService.login({
            email: this.email,
            password: this.password
        }).then(function() {
            $rootScope.$broadcast('authorized');
            $rootRouter.navigate(['Portal']);
        });
    }
}

class Component implements ng.IComponentOptions {

    public controller: any;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.controller = ComponentCtrl;
        this.controllerAs = '$ctrl';
        this.templateUrl = 'app/common/components/login/login.html';
    }

}

export default new Component();