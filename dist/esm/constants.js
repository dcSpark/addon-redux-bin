export var ADDON_ID = 'storybook/addon-redux';
export var STATE_ID_HISTORY = "".concat(ADDON_ID, "/useState/history");
export var STATE_ID_STORE = "".concat(ADDON_ID, "/useState/store");
export var PANEL_ID_HISTORY = "".concat(ADDON_ID, "/panel/history");
export var PANEL_ID_STORE = "".concat(ADDON_ID, "/panel/store");
export var PARAM_REDUX_MERGE_STATE = 'PARAM_REDUX_MERGE_STATE';
export var ARG_REDUX_PATH = 'ARG_REDUX_PATH';
export var ARG_REDUX_SET_STATE = 'ARG_REDUX_SET_STATE';
export var ACTIONS_TYPES = {
  RESET_REDUX_TYPE: '@@WITH_RESET_REDUX',
  MERGE_STATE_TYPE: '@@WITH_REDUX_MERGE_STATE',
  SET_STATE_TYPE: '@@WITH_REDUX_SET_STATE',
  SET_STATE_AT_PATH_TYPE: '@@SET_STATE_AT_PATH_TYPE'
};
export var EVENTS = {
  INIT: "".concat(ADDON_ID, "/init"),
  ON_DISPATCH: "".concat(ADDON_ID, "/on_dispatch"),
  SET_STATE: "".concat(ADDON_ID, "/set_state"),
  SET_STATE_AT_PATH: "".concat(ADDON_ID, "/set_state_at_path"),
  MERGE_STATE: "".concat(ADDON_ID, "/merge_state"),
  DISPATCH: "".concat(ADDON_ID, "/dispatch")
};