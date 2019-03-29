import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  CREATE_RECORD: undefined,
  CREATE_RECORD_FAILURE: undefined,
  CREATE_RECORD_SUCCESS: undefined,
  FETCH_RECORDS: undefined,
  FETCH_RECORDS_SUCCESS: undefined,
  FETCH_RECORDS_FAILURE: undefined,
  REMOVE_RECORD: undefined,
  REMOVE_RECORD_SUCCESS: undefined,
  ADD_RECORD: undefined,
  ADD_RECORD_SUCCESS: undefined,
  ADD_RECORD_FAILURE: undefined,
  SAVE_TO_LOCALSTORAGE: undefined
});

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
