import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import AddToken from './views/AddToken.vue';
import GetToken from './views/GetToken.vue';
import Blog from './views/Blog.vue';
import Security from './views/Security.vue';
import Memberspage from './views/Memberspage.vue';
import Beneficiariespage from './views/Beneficiariespage.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: "/addtoken",
      component: AddToken
    },
    {
      path: "/gettokens",
      name: 'gettokens',
      component: GetToken
    },
    {
      path: "/blog",
      name: 'Blog',
      component: Blog
    },
    {
      path: "/security",
      name: 'Security',
      component: Security
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/members',
      name: 'Memberspage',
      component: Memberspage
    },
    {
      path: '/beneficiaries',
      name: 'Beneficiariespage',
      component: Beneficiariespage
    },
    {
      path: '/contactus',
      name: 'contactUs',
      // lazy-loaded
      component: () => import('./views/ContactUs.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home', '/contactus', '/members', '/beneficiaries'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/home');
    } else {
      next();
    }
  });