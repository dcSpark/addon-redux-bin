"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getStore = void 0;

var _constants = require("../constants");

var _set = _interopRequireDefault(require("../util/set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mergeReducer = function mergeReducer(state, action) {
  var rootState = state;
  var mergeInState = action.state;

  if (_typeof(rootState) === 'object') {
    return _objectSpread(_objectSpread({}, rootState), mergeInState);
  } else {
    return mergeInState;
  }
};

var setAtPathReducer = function setAtPathReducer(state, action) {
  return (0, _set["default"])(state, action.path, action.value);
};

var enhanceReducer = function enhanceReducer(mainReducer) {
  return function (state, action) {
    switch (action.type) {
      case _constants.ACTIONS_TYPES.MERGE_STATE_TYPE:
        return mergeReducer(state, action);

      case _constants.ACTIONS_TYPES.SET_STATE_AT_PATH_TYPE:
        return setAtPathReducer(state, action);

      case _constants.ACTIONS_TYPES.SET_STATE_TYPE:
        if (action.state === undefined) return mainReducer(undefined, {
          type: 'boo'
        });
        return action.state;

      case _constants.ACTIONS_TYPES.RESET_REDUX_TYPE:
        return mainReducer(undefined, action);

      default:
        return mainReducer(state, action);
    }
  };
};

var _store;

var getStore = function getStore() {
  return _store;
};

exports.getStore = getStore;

var enhancer = function enhancer(createStore) {
  return function (reducer, state) {
    var store = createStore(enhanceReducer(reducer), state);

    var enhanceDispatch = function enhanceDispatch(dispatch) {
      return function (action) {
        var prev = store.getState();
        var result = dispatch(action);
        var next = store.getState();
        if (listener !== null) listener(action, prev, next);
        return result;
      };
    };

    var listener = null;

    var enhancedStore = _objectSpread(_objectSpread({}, store), {}, {
      dispatch: enhanceDispatch(store.dispatch),
      __WITH_REDUX_ENABLED__: {
        listenToStateChange: function listenToStateChange(l) {
          return listener = l;
        }
      }
    });

    _store = enhancedStore;
    return enhancedStore;
  };
};

var _default = enhancer;
exports["default"] = _default;