/* eslint-disable no-unused-vars */
const createTodoManager = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const completeTodo = (index) => {
    all[index].completed = true;
  };

  const overdueTodos = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const TodosDueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate === today);
  };

  const TodosDueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate > today);
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
