"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsonHelper = require("../util/jsonHelper");

var _constants = require("../constants");

var _api = require("@storybook/api");

var _theming = require("@storybook/theming");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var reducer = function reducer(events, event) {
  if (events === undefined) events = [];
  return [].concat(_toConsumableArray(events), [event]);
};

var JsonCellStyle = _theming.styled.div(function (_ref) {
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

var ThStyle = _theming.styled.th(function (_ref2) {
  var theme = _ref2.theme;
  return {
    borderBottom: "1px solid ".concat(theme.color.medium),
    textAlign: 'left',
    padding: '0.5em',
    background: theme.color.secondary,
    color: theme.color.tertiary
  };
});

var TdStyle = _theming.styled.td(function (_ref3) {
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

var TableStyle = _theming.styled.table(function (_ref4) {
  var theme = _ref4.theme;
  return {
    borderCollapse: 'collapse',
    width: '100%'
  };
});

var Json = function Json(_ref5) {
  var data = _ref5.data;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var onClick = function onClick() {
    setExpanded(!expanded);
  };

  var style = {
    height: 'initial'
  };
  return /*#__PURE__*/_react["default"].createElement(JsonCellStyle, {
    style: expanded ? style : undefined,
    onClick: onClick
  }, JSON.stringify(data, null, 2));
};

var Header = function Header() {
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement(ThStyle, null, "Time"), /*#__PURE__*/_react["default"].createElement(ThStyle, null, "Type"), /*#__PURE__*/_react["default"].createElement(ThStyle, null, "Action"), /*#__PURE__*/_react["default"].createElement(ThStyle, null, "Diff"), /*#__PURE__*/_react["default"].createElement(ThStyle, null, "Previous State"), /*#__PURE__*/_react["default"].createElement(ThStyle, null, "Current State"), /*#__PURE__*/_react["default"].createElement(ThStyle, null, " "));
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
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement(TdStyle, null, formatDate(date)), /*#__PURE__*/_react["default"].createElement(TdStyle, null, /*#__PURE__*/_react["default"].createElement("b", null, action.type)), /*#__PURE__*/_react["default"].createElement(TdStyle, null, /*#__PURE__*/_react["default"].createElement(Json, {
    data: action
  })), /*#__PURE__*/_react["default"].createElement(TdStyle, null, /*#__PURE__*/_react["default"].createElement(Json, {
    data: (0, _jsonHelper.parse)(diff)
  })), /*#__PURE__*/_react["default"].createElement(TdStyle, null, /*#__PURE__*/_react["default"].createElement(Json, {
    data: (0, _jsonHelper.parse)(prev)
  })), /*#__PURE__*/_react["default"].createElement(TdStyle, null, /*#__PURE__*/_react["default"].createElement(Json, {
    data: (0, _jsonHelper.parse)(state)
  })), /*#__PURE__*/_react["default"].createElement(TdStyle, null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return emit(_constants.EVENTS.SET_STATE, state);
    }
  }, "Load")));
};

var HistoryView = function HistoryView() {
  var _useAddonState = (0, _api.useAddonState)(_constants.STATE_ID_HISTORY, []),
      _useAddonState2 = _slicedToArray(_useAddonState, 2),
      events = _useAddonState2[0],
      setEvents = _useAddonState2[1];

  var emit = (0, _api.useChannel)(_defineProperty({}, _constants.EVENTS.ON_DISPATCH, function (ev) {
    if (Object.values(_constants.ACTIONS_TYPES).includes(ev.action.type)) {
      return;
    }

    setEvents(function (events) {
      return reducer(events, ev);
    });
  }));
  return /*#__PURE__*/_react["default"].createElement(TableStyle, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement(Header, null)), /*#__PURE__*/_react["default"].createElement("tbody", null, events.map(function (event) {
    return /*#__PURE__*/_react["default"].createElement(Row, _extends({
      key: event.id,
      emit: emit
    }, event));
  })));
};

var _default = HistoryView;
exports["default"] = _default;