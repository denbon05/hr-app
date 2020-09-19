import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions/index.js';

const reminder = handleActions({
  [actions.clickBell](state) {
    const { bellClicked } = state;
    state.bellClicked = !bellClicked;
    return { ...state };
  }
}, { bellClicked: false });

const navForm = handleActions({
  [actions.clickSearch](state) {

  },
  // [actions.inputChange](state, {payload: { value } }) {

  // }
}, { currentValue: '', searchOn: false });

const modals = handleActions({
  [actions.showAddModal](state, { payload: modalAddShow }) {
    return { ...state, modallAddOn: modalAddShow };
  },
  [actions.addWorker](state) {
    // const { byId, allIds } = state;
    // return {
    //   byId: { ...byId, [task.id]: task },
    //   allIds: [task.id, ...allIds],
    // };
  },
}, { modallAddOn: false });

const tasks = handleActions({
  [actions.confirmAdding](state, { payload: { inputedWorkerInfo } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },
  [actions.removeTask](state, { payload: { id } }) {
    const { byId, allIds } = state;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [actions.toggleTaskState](state, { payload: { id } }) {
    const task = state.byId[id];
    const newState = task.state === 'active' ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return {
      ...state,
      byId: { ...state.byId, [task.id]: updatedTask },
    };
  },
}, { byId: {}, allIds: [], openAddModal: false,  });

export default combineReducers({
  modals,
  reminder,
  navForm,
  tasks,
  form: formReducer,
});