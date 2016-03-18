import AuthService from './../../../../modules/auth/auth.service.ts';

class Component {
    private $rootScope: any;
    constructor($rootScope: any) {
        this.$rootScope = $rootScope;
    }
    
    public logOut() {
        AuthService.logOut();
        this.$rootScope.$broadcast('unauthorized');
    }
}

export default {
    templateUrl: 'app/common/containers/portal/sidebar/links/links.html',
    controller: Component,
    controllerAs: '$ctrl'
};