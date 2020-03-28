import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Create from '../views/tournament/Create.vue';
import Overview from '../views/tournament/Overview.vue';
import Tournament from '../views/Tournament.vue';

Vue.use(VueRouter)

const routes = [{
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
        component: Overview,
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
})

export default router