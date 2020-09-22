import { createSelector } from 'reselect';
// import database from 'firebase/database';
// console.log(database, 'DATABASE');

const forSheetColection = ['modallAddOn', 'submitOn', 'allIds', 'byId'];

const getAddModalState = ({ addModal: { byId, allIds } }) => ({ byId, allIds });
const getTitlesWithValuesOnOf = ({ configModal: { titles, valuesOnOf } }) => ({ titles, valuesOnOf});

export const workersSelector = createSelector(
  getAddModalState,
  getTitlesWithValuesOnOf,
  ({ byId, allIds }, { titles, valuesOnOf }) => {
    const showingItems = allIds.map((item) => {

    });
  }
);