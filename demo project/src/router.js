import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/landingpage' },
    { path: '/landingpage', component: null },
    { path: '/nav', component: null },
    { path: '/dashboard', component: null },
    { path: '/list', component: null },
    { path: '/login', component: null },
    { path: '/signup', component: null },
    { path: '/createtask', component: null },
    {
      path: '/createtask/:id',
      component: null,
      children: [{ path: '/createtask/showtask' }],
    },
    { path: '/:notFound(.*)', component: null },
  ],
});
export default router;
