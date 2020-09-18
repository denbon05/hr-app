import { createAction } from 'redux-actions';

export const clickBell = createAction('CLICK_BELL');
export const inputChange = createAction('CHANGE_SEARCH_FIELD');
export const clickSearch = createAction('SEARCH');

export const addTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');