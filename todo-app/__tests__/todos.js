/* eslint-disable no-undef */
const request = require("supertest");
// const cheerio = require("cheerio");
const db = require("../models/index");
const app = require("../app");

let server, agent;

describe("Todo test suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    server = app.listen(4000, () => {});
    agent = request.agent(server);
  });

  afterAll(async () => {
    await db.sequelize.close();
    server.close();
  });



  test("Create a sample due today item", async () => {
    const res = await agent.post("/todos").send({
      title: "Due-Today Todo",
      dueDate: new Date().toISOString().split("T")[0],
      completed: false,
    });

    expect(res.status).toBe(500);
  });

});