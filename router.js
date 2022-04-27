import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const page = (path) => () => import(`~/pages/${path}`).then((m) => m.default || m);

const routes = [
  { path: "/", name: "inicio", component: page("index.vue") },
  { path: "login", name: "login", component: page("auth/login.vue") },
  { path: "examenes", name: "examenes", component: page("examenes/show.vue") },
  { path: "examenes-admin", name: "examenes.admin", component: page("examenes/admin.vue") },
];

export function createRouter() {
  return new Router({
    routes,
    /* scrollBehavior, */
    mode: 'history',
  })
}
