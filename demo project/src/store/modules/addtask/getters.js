export default {
  addtask(state) {
    return state.addtask;
  },
  hasaddtask(state) {
    return state.addtask && state.addtask.length > 0;
  },
};
