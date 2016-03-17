import Account from './../account/account.service.ts';

class AuthService {
    private authorized: boolean;
    
    public isAuthorized() {
        return this.authorized;
    }
    
    public login(params) {
        return Account
            .fetch(params)
            .then(function(account: any) {
                this.setAuthorized(account.token);
            });
    }
    
    public authorize (): Q.Promise<{}> {
        var token = this.getToken();
        if(!token) {
            var defer = Q.defer(),
                promise = defer.promise;
                
            defer.reject(false);
            return promise;
        }

        this.login({
                token: token
            })
            .then(function() {
                defer.resolve();
            })
            .catch(function() {
                defer.reject(false);
            });
        
        return promise;
    }
    
    private setAuthorized(token) {
        this.saveToken(token);
        this.authorized = true;
    }
    
    private getToken() {
        return window.localStorage.getItem('token');
    }
    
    private saveToken(token) {
        window.localStorage.setItem('token', token);
    }
}

export default new AuthService();