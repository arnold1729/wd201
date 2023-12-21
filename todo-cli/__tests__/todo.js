/* eslint-disable no-undef */
const createTodoManager = require("../todo");

const {
  fetchAll,
  completeTodo,
  add,
  overdueTodos,
  TodosDueToday,
  TodosDueLater,
} = createTodoManager();

const currentDate = new Date();

const todayDate = new Date(currentDate);
todayDate.setHours(0, 0, 0, 0);

const yesterdayDate = new Date(currentDate);
yesterdayDate.setDate(currentDate.getDate() - 1);
yesterdayDate.setHours(0, 0, 0, 0);

const tomorrowDate = new Date(currentDate);
tomorrowDate.setDate(currentDate.getDate() + 1);
tomorrowDate.setHours(0, 0, 0, 0);

describe("Customized Todolist Testing Suite", () => {
  beforeAll(() => {
    const Todos = [
      {
        title: "Morning yoga",
        done: false,
        deadline: yesterdayDate.toISOString().split("T")[0],
      },
      {
        title: "100 pushups",
        done: false,
        deadline: todayDate.toISOString().split("T")[0],
      },
      {
        title: "Make paneer tikka",
        done: false,
        deadline: tomorrowDate.toISOString().split("T")[0],
      },
    ];
    Todos.forEach((Todo) => add(Todo));
  });

  test("Adding a new Todo", () => {
    const initialTodoCount = fetchAll().length;
    expect(fetchAll().length).toBe(initialTodoCount);
    add({
      title: "Adding a test Todo",
      done: false,
      deadline: todayDate.toISOString().split("T")[0],
    });
    expect(fetchAll().length).toBe(initialTodoCount + 1);
  });

  test("Marking a Todo as done", () => {
    expect(fetchAll()[1].done).toBe(false);
    completeTodo(1);
    expect(fetchAll()[1].done).toBe(true);
  });

  test("Checking overdue Todos", () => {
    expect(overdueTodos().length).toBe(2);
  });

  test("Todos due today", () => {
    expect(TodosDueToday().length).toBe(1);
  });

  test("Todos due later", () => {
    expect(TodosDueLater().length).toBe(0);
  });
});
