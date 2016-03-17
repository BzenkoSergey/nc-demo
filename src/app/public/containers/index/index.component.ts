let descriptor = {
    templateUrl: 'app/common/containers/index/index.html',

    $routeConfig: [
        {
            path: '/public/...', 
            name: 'Public', 
            component: 'public', 
            useAsDefault: true
        }
    ]
};

export default descriptor;