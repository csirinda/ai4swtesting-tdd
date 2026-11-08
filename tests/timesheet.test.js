const Timesheet = require("../src/timesheet");

describe("Timesheet", () => {
  test("submit returns true when given a project name and hours", () => {
    const timesheet = new Timesheet();

    expect(timesheet.submitTimesheet("Project Alpha", 8)).toBe(true);
  });

  test("timesheets that are added can be retrieved as a list", () => {
    const timesheet = new Timesheet();

    timesheet.submitTimesheet("Project 1", 8);
    timesheet.submitTimesheet("Project 2", 8);
    timesheet.submitTimesheet("Project 3", 8);

    expect(timesheet.getTimesheets()).toHaveLength(3);
  });
});