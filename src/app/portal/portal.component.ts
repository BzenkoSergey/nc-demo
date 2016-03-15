let navbarComponent = {
  templateUrl: 'app/portal/portal.html',
  
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
  ]
};

export default navbarComponent;