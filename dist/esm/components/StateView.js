function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import ObjectEditor from './ObjectEditor';
import { EVENTS, STATE_ID_STORE } from '../constants';
import { useAddonState, useChannel } from '@storybook/api';
import useSyncReduxArgs from '../util/useSyncReduxArgs';
import useSetStateFromParameter from '../util/useSetStateFromParameter';
import { parse } from '../util/jsonHelper';
import { STORY_CHANGED } from '@storybook/core-events';

var StateViewContainer = function StateViewContainer() {
  var _useChannel;

  var _useAddonState = useAddonState(STATE_ID_STORE),
      _useAddonState2 = _slicedToArray(_useAddonState, 2),
      state = _useAddonState2[0],
      setState = _useAddonState2[1];
  /*
   * We need to wait until after addon-redux is initialized
   * Otherwise, we will receive the story args before the store is created
   * If the store is loaded asynchronously
   */


  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      initialized = _React$useState2[0],
      setInitialized = _React$useState2[1];

  var emit = useChannel((_useChannel = {}, _defineProperty(_useChannel, EVENTS.ON_DISPATCH, function (ev) {
    return setState(parse(ev.state));
  }), _defineProperty(_useChannel, EVENTS.INIT, function (ev) {
    setInitialized(true);
    return setState(parse(ev.state));
  }), _defineProperty(_useChannel, STORY_CHANGED, function (_action) {
    setInitialized(false);
  }), _useChannel));
  var onChange = React.useCallback(function (value) {
    emit(EVENTS.SET_STATE, JSON.stringify(value));
  }, []);

  if (!initialized) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Loading...");
  } else {
    return /*#__PURE__*/React.createElement(StateView, {
      state: state,
      onChange: onChange
    });
  }
};

var StateView = function StateView(args) {
  useSetStateFromParameter();
  useSyncReduxArgs(args.state);
  return /*#__PURE__*/React.createElement(ObjectEditor, {
    value: args.state,
    onChange: args.onChange
  });
};

export default StateViewContainer;