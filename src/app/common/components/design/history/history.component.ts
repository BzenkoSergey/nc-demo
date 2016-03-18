import HistoryStatsDataProvider from './history.provider.ts';

function ComponentCtrl($scope) {
    var ctrl = this;
    this.history = {};

    HistoryStatsDataProvider
        .get()
        .then(function(response) {
            const entity = response.body();
            const data = entity.data();

            $scope.$applyAsync(function() {
                ctrl.history = data;
            });
        });
}
  
export default {
    controller: ComponentCtrl,
    templateUrl: 'app/common/components/design/history/history.html',
};