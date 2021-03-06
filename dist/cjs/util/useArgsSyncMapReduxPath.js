"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _api = require("@storybook/api");

var _constants = require("../constants");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var syncEnabled = function syncEnabled(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      data = _ref2[1];

  return data[_constants.ARG_REDUX_PATH];
};

var toString = function toString(o) {
  return o == null ? '' : o.toString();
};

var useSyncMap = function useSyncMap() {
  var types = (0, _api.useArgTypes)();
  var syncMapRef = (0, _react.useRef)([]);
  var typesRef = (0, _react.useRef)();
  var typesChanged = typesRef.current !== types;

  if (typesRef.current !== types) {
    typesRef.current = types;
  }

  if (typesChanged) {
    syncMapRef.current = Object.entries(types).filter(syncEnabled).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          data = _ref4[1];

      return {
        name: name,
        path: toString(data[_constants.ARG_REDUX_PATH])
      };
    });
  }

  return syncMapRef.current;
};

var _default = useSyncMap;
exports["default"] = _default;