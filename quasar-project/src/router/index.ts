// src/router/index.js (or index.ts)
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory } from 'vue-router';
import routes from './routes';

export default function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token');

    if (to.matched.some(record => record.meta.requiresAuth) && !token) {

      next({ path: '/login' });
    } else {

      next();
    }
  });

  return Router;
}