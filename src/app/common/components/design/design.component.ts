import DesignDataProvider from './design.provider.ts';

function ComponentCtrl($scope) {
    var templates = [];
    this.templates = templates;

    this.$routerOnActivate = function(next) {
        DesignDataProvider
            .get()
            .then(function(response) {
                const list = response.body();
                $scope.$applyAsync(function() {
                    list.forEach(element => {
                        templates.push(element.data());
                    });
                });
            });
    };
}
  
  
export default {
    controller: ComponentCtrl,
    templateUrl: 'app/common/components/design/design.html',
};