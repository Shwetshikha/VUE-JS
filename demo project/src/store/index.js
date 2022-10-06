//STORE.JS//

import { createStore } from 'vuex';
import addtaskModule from './modules/addtask/index.js';
import auth from './modules/auth/index';

const store = createStore({
  modules: {
    addtask: addtaskModule,
    auth,
  },
});

export default store;
