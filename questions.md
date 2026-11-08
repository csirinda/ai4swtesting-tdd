QUESTIONS: ACCURACY AND CONSISTENCY
User Story: Track time against projects
==================================================

# ACCURACY

## [1] What does "half hour units" mean in practice?

Question - What does "half hour units" mean in practice?
Explanation - The feature says time is tracked in half hour units, but is that a fixed increment (0.5, 1.0, 1.5) or a minimum? What happens if someone worked 20 minutes or 45 minutes: is it rounded up, rounded down, rejected, or rounded to the nearest unit?

## [2] What is the minimum and maximum amount of time that can be entered?

Question - What is the minimum and maximum amount of time that can be entered?
Explanation - Can a user enter 0 hours or a negative value? Is there an upper limit per entry or per day, given that a day has only 24 hours (48 units)?

## [3] How is the time entered, and in what format?

Question - How is the time entered, and in what format?
Explanation - The text doesn't say whether the user types decimal hours (1.5), hours and minutes (1h 30m), or selects the number of half hour units. Without a defined format, we can't verify that the entered value matches what is stored and displayed.

## [4] What counts as a "specific project"?

Question - What counts as a "specific project"?
Explanation - Where does the list of projects come from? Can users create their own, or are they predefined by an admin? Can a user enter a project that is closed, archived, or deleted, and how is the project validated as existing?

## [5] What does "complete a timesheet" mean?

Question - What does "complete a timesheet" mean?
Explanation - Is a timesheet a single entry, a day, or a week? Is there a submit or finalize action, and what happens to entries that don't have both a project and time? Can an incomplete timesheet be saved as a draft?

## [6] What is the period covered by a timesheet, and which dates can time be tracked against?

Question - What is the period covered by a timesheet, and which dates can time be tracked against?
Explanation - Can users record time in the past or the future? The user story mentions keeping a "history," but no date or time period is specified for entries.

# CONSISTENCY

## [7] Is "track time" consistent with "complete a timesheet"?

Question - Is "track time" consistent with "complete a timesheet"?
Explanation - The story says the user wants to track time against projects, but the features talk about completing a timesheet. Are these the same activity, or is tracking (e.g., a running timer) different from entering time on a timesheet? Which one is the feature actually describing?

## [8] Can one timesheet contain multiple projects, and how does the total reconcile?

Question - Can one timesheet contain multiple projects, and how does the total reconcile?
Explanation - The story implies tracking against individual projects, but the features say "a project and amount of time must be entered," which sounds like one project per entry. If there are multiple entries per day, how are totals calculated and do they stay consistent with the half hour rule?

## [9] Does "only I should be able to see my tracked time" conflict with the "history" goal and common business needs?

Question - Does "only I should be able to see my tracked time" conflict with the "history" goal and common business needs?
Explanation - Should managers, project owners, admins, or payroll/reporting be able to see this data? If they can't, how will the history be used beyond the individual, and does that match the intent of the story?

## [10] Who can edit or delete tracked time, and does the history stay consistent afterward?

Question - Who can edit or delete tracked time, and does the history stay consistent afterward?
Explanation - The story wants a reliable history of time spent, but doesn't say whether entries can be changed or removed after they're saved. If they can, is the original value retained, and do historical totals per project update consistently?

==================================================
END OF QUESTIONS
