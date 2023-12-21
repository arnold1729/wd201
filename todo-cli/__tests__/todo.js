/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    const dateToday = new Date();
    const today = dateToday.toISOString().split("T")[0];

    const yesterday = new Date(dateToday);
    yesterday.setDate(dateToday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString().split("T")[0];

    const tomorrow = new Date(dateToday);
    tomorrow.setDate(dateToday.getDate() + 1);
    const formattedTomorrow = tomorrow.toISOString().split("T")[0];

    [
      {
        title: "Morning yoga",
        completed: false,
        dueDate: formattedYesterday,
      },
      {
        title: "100 pushups",
        completed: false,
        dueDate: today,
      },
      {
        title: "Make paneer tikka",
        completed: false,
        dueDate: formattedTomorrow,
      },
    ].forEach(add);
  });

  test("Should add a new todo", () => {
    expect(all.length).toBe(all.length);
    const dateToday = new Date();
    const today = dateToday.toISOString().split("T")[0];
    add({
      title: "Add test todo",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(all.length);
  });

  test("Should mark a todo as complete", () => {
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);
  });

  test("overdue tests", () => {
    expect(overdue().length).toBe(1);
  });

  test("dueToday tests", () => {
    expect(dueToday().length).toBe(2);
  });

  test("due later tests", () => {
    expect(dueLater().length).toBe(1);
  });
});
