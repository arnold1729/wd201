/* eslint-disable no-undef */
let todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todo test cases", () => {
  beforeAll(() => {
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "Driving test",
        completed: false,
        dueDate: new Date(today.getTime() - 1 * oneDay).toLocaleDateString(
          "en-CA",
        ),
      },
      {
        title: "Endsem study",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "100 pushups",
        completed: false,
        dueDate: new Date(today.getTime() + 1 * oneDay).toLocaleDateString(
          "en-CA",
        ),
      },
    ].forEach(add);
  });
  test("Add a new todo", () => {
    expect(all.length).toEqual(3);

    add({
      title: "Make Paneer tikka",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(4);
  });

  test("Todo mark as complete test", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("overdue test", () => {
    expect(overdue().length).toBe(0);
  });

  test("due today test", () => {
    expect(dueToday().length).toBe(2);
  });

  test("due later test", () => {
    expect(dueLater().length).toBe(1);
  });
});
