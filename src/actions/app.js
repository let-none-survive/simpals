import { ActionTypes } from '../constants';

export const fetchRecords = () => ({
  type: ActionTypes.FETCH_RECORDS,
});

export const fetchRecordsSuccess = records => ({
  type: ActionTypes.FETCH_RECORDS_SUCCESS,
  payload: records,
});
export const fetchRecordsFailure = () => ({
  type: ActionTypes.FETCH_RECORDS_FAILURE,
});

export const deleteRecord = id => ({
  type: ActionTypes.REMOVE_RECORD,
  payload: id,
});

export const addRecord = payload => ({
  type: ActionTypes.ADD_RECORD,
  payload
});
