import * as Q from 'q';
import AccountModel from './account.model.ts';
import AccountDataProvider from './account.provider.ts';

class AccountService {
    private account: any;
    
    public get() {
        return this.account;
    }

    public fetch(params) {
        var self = this;
        
        var defer = Q.defer(),
            promise = defer.promise;
            
        var DataProvider = (function() {
            if(!!~params.email.indexOf('admin@')) {
                return AccountDataProvider.one('data', 'admin.json');
            }
            return AccountDataProvider.one('data', 'guest.json');
        })();

        DataProvider
            .get(params)
            .then(function(response) {
                const entity = response.body();
                const data = entity.data();

                if(params.email === 'admin@admin.com') {
                    data.role = 'admin';
                }
                
                self.account = new AccountModel(data);
                defer.resolve(self.account);
            })
            .catch(function() {
                defer.reject(false);
            });
            
        return promise;
    }
}

export default new AccountService();