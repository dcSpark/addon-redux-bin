"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStateAtPathAction = exports.setStateAction = exports.mergeStateAction = exports.resetStateAction = void 0;

var _constants = require("../constants");

var resetStateAction = function resetStateAction() {
  return {
    type: _constants.ACTIONS_TYPES.RESET_REDUX_TYPE
  };
};

exports.resetStateAction = resetStateAction;

var mergeStateAction = function mergeStateAction() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: _constants.ACTIONS_TYPES.MERGE_STATE_TYPE,
    state: state
  };
};

exports.mergeStateAction = mergeStateAction;

var setStateAction = function setStateAction(state) {
  return {
    type: _constants.ACTIONS_TYPES.SET_STATE_TYPE,
    state: state
  };
};

exports.setStateAction = setStateAction;

var setStateAtPathAction = function setStateAtPathAction(path, value) {
  return {
    type: _constants.ACTIONS_TYPES.SET_STATE_AT_PATH_TYPE,
    path: path,
    value: value
  };
};

exports.setStateAtPathAction = setStateAtPathAction;