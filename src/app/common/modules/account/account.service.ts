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

        AccountDataProvider
            .get(params)
            .then(function(data) {
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