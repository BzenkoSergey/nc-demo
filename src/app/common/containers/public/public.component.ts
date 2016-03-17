let descriptor = {
  templateUrl: 'app/common/containers/public/public.html',
  
  $routeConfig: [
    {
        path: '/home', 
        name: 'Home', 
        component: 'publicHome', 
        useAsDefault: true
    },
    {
        path: '/login', 
        name: 'Login', 
        component: 'publicLogin'
    },
    {
        path: '/about',
        name: 'About', 
        component: 'publicAbout' 
    },
    {
        path: '/get-started',
        name: 'GetStarted', 
        component: 'publicGetStarted' 
    }
  ]
};

export default descriptor;