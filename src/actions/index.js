import { createAction } from 'redux-actions';

export const clickBell = createAction('CLICK_BELL');
export const inputChange = createAction('CHANGE_SEARCH_FIELD');
export const clickSearch = createAction('SEARCH');

export const toogleAddModal = createAction('TOOGLE_ADD_MODAL');
export const addWorker = createAction('ADD_WORKER');
export const confirmAdding = createAction('CONFIRM_WORKER_ADDING');

export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');