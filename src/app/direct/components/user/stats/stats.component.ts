import UsersStatsDataProvider from './stats.provider.ts';

function ComponentCtrl($scope) {
    var ctrl = this;
    this.stats = {};

    UsersStatsDataProvider
        .get()
        .then(function(response) {
            const entity = response.body();
            const data = entity.data();

            $scope.$applyAsync(function() {
                ctrl.stats = data;
            });
        });
}

export default {
    controller: ComponentCtrl,
    templateUrl: 'app/direct/components/user/stats/stats.html',
};