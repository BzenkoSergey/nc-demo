import AccountService from './../account/account.service.ts';

class AuthService {
    private authorized: boolean;
    
    public isAuthorized() {
        return this.authorized;
    }
    
    public login(params) {
        var self = this;
        
        return AccountService
            .fetch(params)
            .then(function(account: any) {
                self.setAuthorized(account.email);
            });
    }
    
    public authorize (): Q.Promise<{}> {
        var token = this.getToken();
        var defer = Q.defer(),
            promise = defer.promise;
                
        if(!token) {
            defer.reject(false);
            return promise;
        }

        this.login({
                email: token
            })
            .then(function() {
                defer.resolve();
            })
            .catch(function() {
                defer.reject(false);
            });
        
        return promise;
    }
    
    public logOut() {
        this.clenToken();
        this.authorized = false;
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
    
    private clenToken() {
        window.localStorage.removeItem('token');
    }
}

export default new AuthService();