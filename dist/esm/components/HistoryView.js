function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useState } from 'react';
import { parse } from '../util/jsonHelper';
import { ACTIONS_TYPES, EVENTS, STATE_ID_HISTORY } from '../constants';
import { useAddonState, useChannel } from '@storybook/api';
import { styled } from '@storybook/theming';

var reducer = function reducer(events, event) {
  if (events === undefined) events = [];
  return [].concat(_toConsumableArray(events), [event]);
};

var JsonCellStyle = styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    whiteSpace: 'pre',
    height: '1.5em',
    lineHeight: '1.2em',
    overflow: 'hidden',
    paddingTop: '0.2em',
    cursor: 'pointer'
  };
});
var ThStyle = styled.th(function (_ref2) {
  var theme = _ref2.theme;
  return {
    borderBottom: "1px solid ".concat(theme.color.medium),
    textAlign: 'left',
    padding: '0.5em',
    background: theme.color.secondary,
    color: theme.color.tertiary
  };
});
var TdStyle = styled.td(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: '0 0.5em',
    margin: '0',
    borderBottom: "1px solid ".concat(theme.color.medium),
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    lineHeight: '1.8em',
    color: theme.color.dark
  };
});
var TableStyle = styled.table(function (_ref4) {
  var theme = _ref4.theme;
  return {
    borderCollapse: 'collapse',
    width: '100%'
  };
});

var Json = function Json(_ref5) {
  var data = _ref5.data;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var onClick = function onClick() {
    setExpanded(!expanded);
  };

  var style = {
    height: 'initial'
  };
  return /*#__PURE__*/React.createElement(JsonCellStyle, {
    style: expanded ? style : undefined,
    onClick: onClick
  }, JSON.stringify(data, null, 2));
};

var Header = function Header() {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(ThStyle, null, "Time"), /*#__PURE__*/React.createElement(ThStyle, null, "Type"), /*#__PURE__*/React.createElement(ThStyle, null, "Action"), /*#__PURE__*/React.createElement(ThStyle, null, "Diff"), /*#__PURE__*/React.createElement(ThStyle, null, "Previous State"), /*#__PURE__*/React.createElement(ThStyle, null, "Current State"), /*#__PURE__*/React.createElement(ThStyle, null, " "));
};

var s = function s(i) {
  return String(i);
};

var formatDate = function formatDate(d) {
  try {
    return s(d.getHours()) + ':' + s(d.getMinutes()) + ':' + s(d.getSeconds()) + '.' + s(d.getMilliseconds());
  } catch (err) {
    return '';
  }
};

var Row = function Row(_ref6) {
  var date = _ref6.date,
      action = _ref6.action,
      diff = _ref6.diff,
      prev = _ref6.prev,
      state = _ref6.state,
      emit = _ref6.emit;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(TdStyle, null, formatDate(date)), /*#__PURE__*/React.createElement(TdStyle, null, /*#__PURE__*/React.createElement("b", null, action.type)), /*#__PURE__*/React.createElement(TdStyle, null, /*#__PURE__*/React.createElement(Json, {
    data: action
  })), /*#__PURE__*/React.createElement(TdStyle, null, /*#__PURE__*/React.createElement(Json, {
    data: parse(diff)
  })), /*#__PURE__*/React.createElement(TdStyle, null, /*#__PURE__*/React.createElement(Json, {
    data: parse(prev)
  })), /*#__PURE__*/React.createElement(TdStyle, null, /*#__PURE__*/React.createElement(Json, {
    data: parse(state)
  })), /*#__PURE__*/React.createElement(TdStyle, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return emit(EVENTS.SET_STATE, state);
    }
  }, "Load")));
};

var HistoryView = function HistoryView() {
  var _useAddonState = useAddonState(STATE_ID_HISTORY, []),
      _useAddonState2 = _slicedToArray(_useAddonState, 2),
      events = _useAddonState2[0],
      setEvents = _useAddonState2[1];

  var emit = useChannel(_defineProperty({}, EVENTS.ON_DISPATCH, function (ev) {
    if (Object.values(ACTIONS_TYPES).includes(ev.action.type)) {
      return;
    }

    setEvents(function (events) {
      return reducer(events, ev);
    });
  }));
  return /*#__PURE__*/React.createElement(TableStyle, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(Header, null)), /*#__PURE__*/React.createElement("tbody", null, events.map(function (event) {
    return /*#__PURE__*/React.createElement(Row, _extends({
      key: event.id,
      emit: emit
    }, event));
  })));
};

export default HistoryView;