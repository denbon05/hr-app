
import { createSelector } from 'reselect';
// import database from 'firebase/database';
// console.log(database, 'DATABASE');

const forSheetColection = ['modallAddOn', 'submitOn', 'allIds', 'byId'];

export const getAddModalState = ({ addModal: { byId, allIds } }) => ({ byId, allIds });

export const workersSelector = createSelector(
  getAddModalState,
  ({ byId, allIds }) => allIds.map((id) => byId[id])
);