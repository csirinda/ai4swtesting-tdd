const Timesheet = require("../src/timesheet");

describe("Timesheet", () => {
  test("submit returns true when given a project name and hours", () => {
    const timesheet = new Timesheet();

    expect(timesheet.submitTimesheet("Project Alpha", 8)).toBe(true);
  });
});
