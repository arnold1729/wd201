/* eslint-disable no-unused-vars */
const createTodoManager = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const completeTodo = (index) => {
    all[index].done = true;
  };

  const overdueTodos = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.done && item.deadline < today);
  };

  const TodosDueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.deadline === today);
  };

  const TodosDueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.done && item.deadline > today);
  };

  const fetchAll = () => all;

  return {
    fetchAll,
    add,
    completeTodo,
    overdueTodos,
    TodosDueToday,
    TodosDueLater,
  };
};

module.exports = createTodoManager;
