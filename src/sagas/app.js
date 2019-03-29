import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'modules/history';
import axios from 'axios';
import {reset} from 'redux-form';

import { ActionTypes } from 'constants/index';

import { fetchRecordsFailure, fetchRecordsSuccess } from 'actions';

import { LocalStorage } from 'utils/LocalStorage';
import { getRecords } from 'reducers/app';

const LS = new LocalStorage();

export function* fetchPosts() {
  try {
    const result = yield axios.get('/posts.json');
    yield put(fetchRecordsSuccess(result.data));
    yield put({ type: ActionTypes.SAVE_TO_LOCALSTORAGE });
  } catch (e) {
    console.log(e);
    yield put(fetchRecordsFailure());
  }
}

export function* setToLs() {
  const data = yield select(getRecords);
  yield LS.add('records', data);
}

export function* addRecord({ payload }) {
  yield put({ type: ActionTypes.ADD_RECORD_SUCCESS, payload });
  yield put({ type: ActionTypes.SAVE_TO_LOCALSTORAGE });
  yield put(reset('recordForm'));
  yield push('/home');
}

export function* removeRecord({ payload }) {
  yield put({ type: ActionTypes.REMOVE_RECORD_SUCCESS, payload });
  yield put({ type: ActionTypes.SAVE_TO_LOCALSTORAGE });
}


export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_RECORDS, fetchPosts),
    takeLatest(ActionTypes.ADD_RECORD, addRecord),
    takeLatest(ActionTypes.REMOVE_RECORD, removeRecord),
    takeEvery(ActionTypes.SAVE_TO_LOCALSTORAGE, setToLs),

  ]);
}
