import AccountService from './../../../../common/modules/account/account.service.ts';

class ComponentCtrl {
    public account: any;
    
    constructor($rootScope) {
        this.account = AccountService.get();
        $rootScope.$on('authorized', () => {
            this.account = AccountService.get();
        });
        $rootScope.$on('unauthorized', () => {
            this.account = null;
        });
    }
}

export default {
    templateUrl: 'app/direct/components/user/user-panel/user-panel.html',
    controller: ComponentCtrl
};