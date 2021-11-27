"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENTS = exports.ACTIONS_TYPES = exports.ARG_REDUX_SET_STATE = exports.ARG_REDUX_PATH = exports.PARAM_REDUX_MERGE_STATE = exports.PANEL_ID_STORE = exports.PANEL_ID_HISTORY = exports.STATE_ID_STORE = exports.STATE_ID_HISTORY = exports.ADDON_ID = void 0;
var ADDON_ID = 'storybook/addon-redux';
exports.ADDON_ID = ADDON_ID;
var STATE_ID_HISTORY = "".concat(ADDON_ID, "/useState/history");
exports.STATE_ID_HISTORY = STATE_ID_HISTORY;
var STATE_ID_STORE = "".concat(ADDON_ID, "/useState/store");
exports.STATE_ID_STORE = STATE_ID_STORE;
var PANEL_ID_HISTORY = "".concat(ADDON_ID, "/panel/history");
exports.PANEL_ID_HISTORY = PANEL_ID_HISTORY;
var PANEL_ID_STORE = "".concat(ADDON_ID, "/panel/store");
exports.PANEL_ID_STORE = PANEL_ID_STORE;
var PARAM_REDUX_MERGE_STATE = 'PARAM_REDUX_MERGE_STATE';
exports.PARAM_REDUX_MERGE_STATE = PARAM_REDUX_MERGE_STATE;
var ARG_REDUX_PATH = 'ARG_REDUX_PATH';
exports.ARG_REDUX_PATH = ARG_REDUX_PATH;
var ARG_REDUX_SET_STATE = 'ARG_REDUX_SET_STATE';
exports.ARG_REDUX_SET_STATE = ARG_REDUX_SET_STATE;
var ACTIONS_TYPES = {
  RESET_REDUX_TYPE: '@@WITH_RESET_REDUX',
  MERGE_STATE_TYPE: '@@WITH_REDUX_MERGE_STATE',
  SET_STATE_TYPE: '@@WITH_REDUX_SET_STATE',
  SET_STATE_AT_PATH_TYPE: '@@SET_STATE_AT_PATH_TYPE'
};
exports.ACTIONS_TYPES = ACTIONS_TYPES;
var EVENTS = {
  INIT: "".concat(ADDON_ID, "/init"),
  ON_DISPATCH: "".concat(ADDON_ID, "/on_dispatch"),
  SET_STATE: "".concat(ADDON_ID, "/set_state"),
  SET_STATE_AT_PATH: "".concat(ADDON_ID, "/set_state_at_path"),
  MERGE_STATE: "".concat(ADDON_ID, "/merge_state"),
  DISPATCH: "".concat(ADDON_ID, "/dispatch")
};
exports.EVENTS = EVENTS;