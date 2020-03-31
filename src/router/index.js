import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Create from '../views/tournament/Create.vue';
import Overview from '../views/tournament/Overview.vue';
import ListOverview from '../views/tournament/ListOverview.vue';
import Tournament from '../views/Tournament.vue';
import Login from '../views/Login.vue';
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournament,
    children: [{
        path: 'create',
        component: Create,
      },
      {
        path: 'overview',
        component: ListOverview,
      }
    ]
  },
  {
    path: '/tournaments/details/:id',
    name: 'Details',
    component: Overview
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login') {
    if (!firebase.auth().currentUser) {
      console.log('not logged in')
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      console.log('logged in')
      next();
    }
  } else {
    next();
  }
});

export default router