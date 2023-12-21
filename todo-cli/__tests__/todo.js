/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();

const today = formattedDate(dateToday);

const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1)),
);

const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1)),
);

describe("This is a Todolist Test Suite", () => {
  beforeAll(() => {
    [
      {
        title: "Morning",
        completed: false,
        dueDate: yesterday,
      },
      {
        title: "Afternoon",
        completed: false,
        dueDate: today,
      },
      {
        title: "Night",
        completed: false,
        dueDate: tomorrow,
      },
    ].forEach(add);
  });
  test("This test should add new todo", () => {
    const counts = all.length;
    expect(all.length).toBe(counts);
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(counts + 1);
  });

  test("This test should mark a todo as complete", () => {
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);
  });

  test("This is an overdue test", () => {
    expect(overdue().length).toBe(1);
  });

  test("The tests which are dueToday test", () => {
    expect(dueToday().length).toBe(2);
  });

  test("The tests that are duelater test", () => {
    expect(dueLater().length).toBe(1);
  });
});
