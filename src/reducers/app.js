import { ActionTypes } from '../constants';
import {LocalStorage} from '../utils/LocalStorage';
import uuidv4 from 'uuid/v4';
const LS = new LocalStorage();

const records = LS.get('records') ? LS.get('records') : [];

const initialState = {
  records: records,
  isLoading: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_RECORDS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        records: [...payload],
        isLoading: false,
      };
    case ActionTypes.FETCH_RECORDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ActionTypes.REMOVE_RECORD_SUCCESS:
      const newData = state.records.filter(record => record.id !== payload);
      return {
        ...state,
        records: [...newData]
      };
    case ActionTypes.ADD_RECORD_SUCCESS:
      const newRecord = {
        id: uuidv4(),
        ...payload,
        tags: payload.tags.split(', ')
      };

      return {
        ...state,
        records: [newRecord, ...state.records]
      };
    default:
      return state;
  }
};

export const getRecords = state => state.app.records;
