import DealsStatsDataProvider from './stats.provider.ts';

function ComponentCtrl($scope) {
    var ctrl = this;
    this.stats = {};

    DealsStatsDataProvider
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
    templateUrl: 'app/common/components/deals/stats/stats.html',
};