import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/drag-demo1',
    name: 'drag-demo1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "drag-demo1" */ '../views/drag-demo1.vue'),
  },
  {
    path: '/drag-demo2',
    name: 'drag-demo2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "drag-demo2" */ '../views/drag-demo2.vue'),
  },
  {
    path: '/code-mirror',
    name: 'code-mirror',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "drag-demo2" */ '../views/code-mirror.vue'),
  },
  {
    path: '/code-mirror-http-load',
    name: 'code-mirror-http-load',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "code-mirror-http-load" */ '../views/code-mirror-http-load.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
