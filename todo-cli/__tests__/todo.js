/* eslint-disable no-undef */
//rushabhs code

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

describe("Todolist test Suite", () => {
  beforeAll(() => {
    [
      {
        title: "Subah ki chai",
        completed: false,
        dueDate: yesterday,
      },
      {
        title: "Shaam ki Chai",
        completed: false,
        dueDate: today,
      },
      {
        title: "Raat ki chai",
        completed: false,
        dueDate: tomorrow,
      },
    ].forEach(add);
  });
  test("Should add new todo", () => {
    const cnt = all.length;
    expect(all.length).toBe(cnt);
    add({
      title: "The  test for todos",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(cnt + 1);
  });

  test("Mark a todo as completed", () => {
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);
  });

  test("Overdue test", () => {
    expect(overdue().length).toBe(1);
  });

  test("DueToday test", () => {
    expect(dueToday().length).toBe(2);
  });

  test("Duelater test", () => {
    expect(dueLater().length).toBe(1);
  });
});
