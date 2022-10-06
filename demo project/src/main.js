import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TheLandingPage from './components/landingpage/TheLandingPage.vue';
import TheDashboard from './components/dashboard/TheDashboard.vue';
import TheList from './components/list/TheList.vue';
import TheLogin from './components/login/TheLogin.vue';
import TheSignup from './components/signup/TheSignup.vue';
import CreateTask from './components/Createtask/CreateTask.vue';
import BaseButton from './components/ui/BaseButton.vue';
// import NotFound from './components/nav/NotFound.vue';
import Footer from './components/footer/Footer.vue';
import ShowTask from './components/Createtask/ShowTask.vue';
import store from './store/index.js';
import post from './components/dashboard/post.vue';
import EditTask from './components/Createtask/EditTask.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import Addtodo from './components/Createtask/Addtodo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/landingpage' },
    { name: 'landingpage', path: '/landingpage', component: TheLandingPage },
    { name: 'home', path: '/dashboard', component: TheDashboard },
    { name: 'list', path: '/list', component: TheList },
    { name: 'login', path: '/login', component: TheLogin },
    { path: '/signup', component: TheSignup },
    { path: '/footer', component: Footer },
    { name: 'createtask', path: '/createtask', component: CreateTask },
    { path: '/showtask', component: ShowTask },
    { name: 'Update', path: '/update/:taskId', component: EditTask },
    { name: 'post', path: '/post', component: post },
    { name: 'showtask', path: '/showtask', component: ShowTask },
    { name: 'todo', path: '/Addtodo', component: Addtodo },
    // { path: '/:notFound(.*)', component: NotFound },
  ],
});

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-button', BaseButton);
app.component('create-task', CreateTask);
app.component('base-dialog', BaseDialog);

app.mount('#app');
