class Timesheet {
  timesheets = new Map();

  submitTimesheet(projectName, duration) {
    this.#validate(projectName, duration);

    const current = this.timesheets.get(projectName) ?? 0;
    this.timesheets.set(projectName, current + duration);
    return true;
  }

  getTimesheets() {
    return [...this.timesheets.values()];
  }

  getTotalTimesheetHours(projectName) {
    return this.timesheets.get(projectName) ?? 0;
  }

  #validate(projectName, duration) {
    if (typeof projectName !== "string" || projectName.trim() === "") {
      throw new TypeError("projectName must be a non-empty string");
    }
    if (typeof duration !== "number" || !Number.isFinite(duration)) {
      throw new TypeError("duration must be a number");
    }
    if (duration <= 0) {
      throw new RangeError("duration must be greater than 0");
    }
    if (duration % 0.5 !== 0) {
      throw new RangeError("duration must be in half-hour units");
    }
  }
}

module.exports = Timesheet;