export default [
  { // Auth Routes
    path: '/',
    component: () => import('layouts/auth'),
    children: [
                {
                  path: 'login',
                  name: 'Login',
                  component: () => import('pages/Auth/signin'),
                  meta: {
                    auth: false
                  }
                },
                {
                  path: 'register',
                  name: 'Register',
                  component: () => import('pages/Auth/signup'),
                  meta: {
                    auth: false
                  }
                },
                {
                  path: 'home',
                  name: 'DashBoard',
                  component: () => import('pages/dashboard'),
                  meta: {
                    auth: true
                  }
                },
              ]
  },

  

]