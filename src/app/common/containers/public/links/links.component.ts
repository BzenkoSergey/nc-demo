class Component implements ng.IComponentOptions {
    public templateUrl: string;

    constructor() {
        this.templateUrl = 'app/common/containers/public/links/links.html';
    }

}

export default new Component();