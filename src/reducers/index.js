import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
// import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions/index.js';

// MODALS

const addModalsState = {
  allIds: [],
  byId: {},
  modallAddOn: false,
  submitOn: false,
  name: null,
  phone: null,
  address: null,
  passportNumb: null,
  birthday: null,
  job: null,
  polandFirm: false,
  bankAccountNum: null,
  wayOfStay: null,
  startVisa: null,
  endVisa: null,
  arriveDate: null,
  departureDate: null,
  countLegalDayLost: null,
  datePIP: null,
  kartaPobytuDate: null,
  notes: null,
};

const addModal = handleActions({
  [actions.toogleAddModal](state) {
    const { modallAddOn } = state;
    state.modallAddOn = !modallAddOn;

    return { ...state };
  },
  [actions.onchangeName](state, { payload : { value } }) {
    state.name = value;
    return { ...state };
  },
  [actions.onchangePhoneNumber](state, { payload: { value } }) {
    state.phone = value;
    return { ...state };
  },
  [actions.onchangeAddress](state, { payload: { value } }) {
    state.address = value;
    return { ...state };
  },
  [actions.onchangePassportNumber](state, { payload: { value } }) {
    state.passportNumb = value;
    return { ...state };
  },
  [actions.selctBirthDayDate](state, { payload: { value } }) {
    state.birthday = value;
    return { ...state };
  },
  [actions.onchangeJob](state, { payload: { value } }) {
    state.job = value;
    return { ...state };
  },
  [actions.polandFirmToogle](state) {
    const { polandFirm } = state;
    state.polandFirm = !polandFirm;
    return { ...state };
  },
  [actions.onchangeBankAccountNum](state, { payload: { value } }) {
    state.bankAccountNum = value;
    return { ...state };
  },
  [actions.chooseWayOfStay](state, { payload: { id } }) {
    state.wayOfStay = id;
    return { ...state };
  },
  [actions.getStartVisaDate](state, { payload: { value } }) {
    state.startVisa = value;
    return { ...state };
  },
  [actions.getEndVisaDate](state, { payload: { value } }) {
    state.endVisa = value;
    return { ...state };
  },
  [actions.selctArriveDate](state, { payload: { value } }) {
    state.arriveDate = value;
    return { ...state };
  },
  [actions.selectDepartureDate](state, { payload: { value } }) {
    state.departureDate = value;
    return { ...state };
  },
  [actions.onchangeCountLegalDays](state, { payload: { value } }) {
    state.countLegalDayLost = value;
    return { ...state };
  },
  [actions.selectPIPDate](state, { payload: { value } }) {
    state.datePIP = value;
    return { ...state };
  },
  [actions.selectConclusionDate](state, { payload: { value } }) {
    state.kartaPobytuDate = value;
    return { ...state };
  },
  [actions.onchangeNotes](state, { payload: { value } }) {
    state.notes = value;
    return { ...state };
  },
  [actions.addWorker](state, { payload: { id } }) {
    const { byId, allIds, modallAddOn } = state;
    allIds.push(id);
    const newWorker = Object.entries(state).reduce((acc, [key, value]) => {
      if (
        key === 'modallAddOn'
        || key === 'submitOn'
        || key === 'allIds'
        || key === 'byId'
      ) {
        return acc;
      }
  
      acc[key] = value;
      state[key] = key === 'polandFirm' ? false : null;
      return acc;
    }, {});
    byId[id] = { ...newWorker, state: 'working' };
    state.modallAddOn = !modallAddOn;
    return { ...state };
  },
}, addModalsState);

// CONFIGURATION

const configState = {};

const configuration = handleActions({
  [actions.setConfiguration](state) {

  }
}, configState);

// REMINDER

const reminder = handleActions({
  [actions.clickBell](state) {
    const { bellClicked } = state;
    state.bellClicked = !bellClicked;
    return { ...state };
  }
}, { bellClicked: false });

// const tasks = handleActions({
//   [actions.confirmAdding](state, { payload: { inputedWorkerInfo } }) {
//     const { byId, allIds } = state;
//     return {
//       byId: { ...byId, [task.id]: task },
//       allIds: [task.id, ...allIds],
//     };
//   },
//   [actions.removeTask](state, { payload: { id } }) {
//     const { byId, allIds } = state;
//     return {
//       byId: _.omit(byId, id),
//       allIds: _.without(allIds, id),
//     };
//   },
//   [actions.toggleTaskState](state, { payload: { id } }) {
//     const task = state.byId[id];
//     const newState = task.state === 'active' ? 'finished' : 'active';
//     const updatedTask = { ...task, state: newState };
//     return {
//       ...state,
//       byId: { ...state.byId, [task.id]: updatedTask },
//     };
//   },
// }, { byId: {}, allIds: [], openAddModal: false,  });

// SEARCH

const navForm = handleActions({
  [actions.clickSearch](state) {

  },
}, { currentValue: '', searchOn: false });

export default combineReducers({
  addModal,
  configuration,
  reminder,
  navForm,
  // tasks,
  // form: formReducer,
});