function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { useChannel } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import { Provider } from 'react-redux';
import { diff as differ } from 'jsondiffpatch';
import { parse } from '../util/jsonHelper';
import { EVENTS } from '../constants';
import { resetStateAction, mergeStateAction, setStateAction, setStateAtPathAction } from './actionCreators';
import { getStore } from './enhancer';
var nextId = 0;
export default (function () {
  return function (story) {
    var _useChannel, _store$__WITH_REDUX_E;

    var store = getStore();
    var emit = useChannel((_useChannel = {}, _defineProperty(_useChannel, EVENTS.SET_STATE, function (stateJson) {
      return store.dispatch(setStateAction(parse(stateJson)));
    }), _defineProperty(_useChannel, EVENTS.SET_STATE_AT_PATH, function (path, value) {
      return store.dispatch(setStateAtPathAction(path, value));
    }), _defineProperty(_useChannel, EVENTS.MERGE_STATE, function (stateJson) {
      return store.dispatch(mergeStateAction(parse(stateJson)));
    }), _defineProperty(_useChannel, EVENTS.DISPATCH, function (action) {
      return store.dispatch(action);
    }), _defineProperty(_useChannel, STORY_CHANGED, function (_action) {
      return store.dispatch(resetStateAction());
    }), _useChannel));

    var onDispatchListener = function onDispatchListener(action, prev, state) {
      var diff = differ(prev, state);
      var date = new Date();
      var event = {
        id: nextId++,
        date: date,
        action: action,
        diff: JSON.stringify(diff),
        prev: JSON.stringify(prev),
        state: JSON.stringify(state)
      };
      emit(EVENTS.ON_DISPATCH, event);
    };

    var initEvent = {
      state: JSON.stringify(store.getState())
    };
    emit(EVENTS.INIT, initEvent);
    if (store.__WITH_REDUX_ENABLED__ === undefined) throw new Error('withRedux enhancer is not enabled in the store');
    (_store$__WITH_REDUX_E = store.__WITH_REDUX_ENABLED__) === null || _store$__WITH_REDUX_E === void 0 ? void 0 : _store$__WITH_REDUX_E.listenToStateChange(onDispatchListener);
    return /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, " ", story(), " ");
  };
});