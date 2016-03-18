import DealsDataProvider from './deals.provider.ts';

function ComponentCtrl($scope) {
    var deals = [];
    this.deals = deals;

    this.$routerOnActivate = function(next) {
        DealsDataProvider
            .get()
            .then(function(response) {
                const list = response.body();
                $scope.$applyAsync(function() {
                    list.forEach(element => {
                        deals.push(element.data());
                    });
                });
            });
    };
}
  
  
export default {
    controller: ComponentCtrl,
    templateUrl: 'app/common/components/deals/deals.html',
};