import { createSelector } from 'reselect';
import _, { keys } from 'lodash';
// import database from 'firebase/database';
// console.log(database, 'DATABASE');

const forSheetColection = ['modallAddOn', 'submitOn', 'allIds', 'byId'];

const getWorkers = ({ addModal: { byId, allIds } }) => allIds.map((id) => byId[id]);
const getTitlesWithValuesOnOf = ({ configModal: { titles, valuesOnOf } }) => ({ titles, valuesOnOf});

export const workersSelector = createSelector(
  getWorkers,
  getTitlesWithValuesOnOf,
  (workers, { valuesOnOf }) => {
    const infoForShowing = workers.map((workerInfo) => {
      const filtredInfo = Object.keys(workerInfo).reduce((acc, key) => {
        if (!valuesOnOf[key]) return acc;
        acc[key] = workerInfo[key];
        return acc;
      }, {});
      filtredInfo.id = workerInfo.id;
      return filtredInfo;
    });
    return infoForShowing;
  }
);

export const tableTitles = createSelector(
  getTitlesWithValuesOnOf,
  ({ titles, valuesOnOf }) => Object.keys(titles).reduce((acc, key) => {
    if (!valuesOnOf[key]) return acc;
    acc[key] = titles[key];
    return acc;
  }, {})
);