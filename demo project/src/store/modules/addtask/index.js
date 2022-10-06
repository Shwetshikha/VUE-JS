import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      addtask: [
        {
          id: '1',
          title: 'my first task',
          remark: 'something something',
          date: '01-01-2019',
          category: '1',
          status: '1',
        },
        {
          id: '2',
          title: 'my first task',
          remark: 'something something',
          date: '01-01-2019',
          category: '2',
          status: '2',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
