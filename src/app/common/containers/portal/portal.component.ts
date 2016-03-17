import * as Q from 'q';
import AuthService from './../../modules/auth/auth.service.ts';

let navbarComponent = {
    templateUrl: 'app/common/containers/portal/portal.html',
    $routeConfig: [
        {
            path: '/dashboard', 
            name: 'Dashboard', 
            component: 'dashboard', 
            useAsDefault: true
        },
        {
            path: '/user', 
            name: 'User', 
            component: 'user' 
        },
        {
            path: '/deals', 
            name: 'Deals', 
            component: 'deals' 
        },
        {
            path: '/design', 
            name: 'Design', 
            component: 'design' 
        }
    ],
    $canActivate: function($rootScope): Q.Promise<{}> {
        var defer = Q.defer(),
            promise = defer.promise;
            
        if(AuthService.isAuthorized()) {
            defer.reject(false);
            return promise;
        }

        AuthService
            .authorize()
            .then(function() {
                defer.resolve();
            })
            .catch(function() {
                $rootScope.$broadcast('unauthorized');
                defer.resolve(false);
            });

        return promise;
    }
};

export default navbarComponent;