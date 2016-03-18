import UsersDataProvider from './users.provider.ts';

function ComponentCtrl($scope) {
    var users = [];
    this.users = users;

    this.$routerOnActivate = function(next) {
        UsersDataProvider
            .get()
            .then(function(response) {
                const list = response.body();
                $scope.$applyAsync(function() {
                    list.forEach(element => {
                        users.push(element.data());
                    });
                });
            });
    };
}
  
  
export default {
    controller: ComponentCtrl,
    templateUrl: 'app/common/components/user/user.html',
};