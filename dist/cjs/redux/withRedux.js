"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _coreEvents = require("@storybook/core-events");

var _reactRedux = require("react-redux");

var _jsondiffpatch = require("jsondiffpatch");

var _jsonHelper = require("../util/jsonHelper");

var _constants = require("../constants");

var _actionCreators = require("./actionCreators");

var _enhancer = require("./enhancer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nextId = 0;

var _default = function _default() {
  return function (story) {
    var _useChannel, _store$__WITH_REDUX_E;

    var store = (0, _enhancer.getStore)();
    var emit = (0, _addons.useChannel)((_useChannel = {}, _defineProperty(_useChannel, _constants.EVENTS.SET_STATE, function (stateJson) {
      return store.dispatch((0, _actionCreators.setStateAction)((0, _jsonHelper.parse)(stateJson)));
    }), _defineProperty(_useChannel, _constants.EVENTS.SET_STATE_AT_PATH, function (path, value) {
      return store.dispatch((0, _actionCreators.setStateAtPathAction)(path, value));
    }), _defineProperty(_useChannel, _constants.EVENTS.MERGE_STATE, function (stateJson) {
      return store.dispatch((0, _actionCreators.mergeStateAction)((0, _jsonHelper.parse)(stateJson)));
    }), _defineProperty(_useChannel, _constants.EVENTS.DISPATCH, function (action) {
      return store.dispatch(action);
    }), _defineProperty(_useChannel, _coreEvents.STORY_CHANGED, function (_action) {
      return store.dispatch((0, _actionCreators.resetStateAction)());
    }), _useChannel));

    var onDispatchListener = function onDispatchListener(action, prev, state) {
      var diff = (0, _jsondiffpatch.diff)(prev, state);
      var date = new Date();
      var event = {
        id: nextId++,
        date: date,
        action: action,
        diff: JSON.stringify(diff),
        prev: JSON.stringify(prev),
        state: JSON.stringify(state)
      };
      emit(_constants.EVENTS.ON_DISPATCH, event);
    };

    var initEvent = {
      state: JSON.stringify(store.getState())
    };
    emit(_constants.EVENTS.INIT, initEvent);
    if (store.__WITH_REDUX_ENABLED__ === undefined) throw new Error('withRedux enhancer is not enabled in the store');
    (_store$__WITH_REDUX_E = store.__WITH_REDUX_ENABLED__) === null || _store$__WITH_REDUX_E === void 0 ? void 0 : _store$__WITH_REDUX_E.listenToStateChange(onDispatchListener);
    return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, " ", story(), " ");
  };
};

exports["default"] = _default;