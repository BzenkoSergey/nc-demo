let descriptor = {
    templateUrl: 'app/direct/containers/index/index.html',

    $routeConfig: [
        {
            path: '/public/...', 
            name: 'Public', 
            component: 'public', 
            useAsDefault: true
        },
        {
            path: '/portal/...',
            name: 'Portal', 
            component: 'portal' 
        }
    ]
};

export default descriptor;