
import { createSelector } from 'reselect';
import database from 'firebase/database';
console.log(database, 'DATABASE');

export const getTasks = (state) => state.tasks;
export const tasksSelector = createSelector(
  getTasks,
  (tasks) => Object.values(tasks),
);