export default {
  addTask(context, data) {
    const taskData = {
      id: '25',
      title: data.title,
      remark: data.remark,
      date: data.date,
      category: data.category,
      status: data.status,
    };
    context.commit('addTask', taskData);
  },
};
