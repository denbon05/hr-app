import { createAction } from 'redux-actions';

// ADD MODAL
export const toogleAddModal = createAction('TOOGLE_ADD_MODAL');
export const onchangeName = createAction('INPUTE_NAME');
export const onchangePhoneNumber = createAction('INPUT_PHONE');
export const onchangeAddress = createAction('INPUTE_ADDRESS');
export const onchangePassportNumber = createAction('INPUT_PASSPORT');
export const selctBirthDayDate = createAction('SELECT_BITHDAY_DATE');
export const onchangeJob = createAction('INPUT_JOB');
export const polandFirmToogle = createAction('TOOGLE_CHECK_POLAND_FIRM');
export const onchangeBankAccountNum = createAction('INPUTE_BANK_ACCOUNT_NUM');
export const chooseWayOfStay = createAction('CHOOSE_WAY_OF_STAY');
export const getStartVisaDate = createAction('GET_START_VISA');
export const getEndVisaDate = createAction('GET_END_VISA');
export const selctArriveDate = createAction('SELECT_ARRIVE_DATE');
export const selectDepartureDate = createAction('SELECT_DEPARTURE_DATE');
export const onchangeCountLegalDays = createAction('INPUTE_COUNT_LEGAL_DAY');
export const selectPIPDate = createAction('SELECT_PIP_DATE');
export const selectConclusionDate = createAction('SELECT_CONCLUSION_DATE');
export const onchangeNotes = createAction('INPUTE_NOTES');
export const addWorker = createAction('ADD_WORKER');
//  CONFIGURATION
export const toogleConfigModal = createAction('SET_CONFIGURATION');
export const changeFilter = createAction('CHANGE_FILTER');
// REMINDER
export const clickBell = createAction('CLICK_BELL');
export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');
// SEARCH
export const inputChange = createAction('CHANGE_SEARCH_FIELD');
export const clickSearch = createAction('SEARCH');
