import { ACTIONS_TYPES } from '../constants';
export var resetStateAction = function resetStateAction() {
  return {
    type: ACTIONS_TYPES.RESET_REDUX_TYPE
  };
};
export var mergeStateAction = function mergeStateAction() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: ACTIONS_TYPES.MERGE_STATE_TYPE,
    state: state
  };
};
export var setStateAction = function setStateAction(state) {
  return {
    type: ACTIONS_TYPES.SET_STATE_TYPE,
    state: state
  };
};
export var setStateAtPathAction = function setStateAtPathAction(path, value) {
  return {
    type: ACTIONS_TYPES.SET_STATE_AT_PATH_TYPE,
    path: path,
    value: value
  };
};