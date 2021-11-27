"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _constants = require("../constants");

var _api = require("@storybook/api");

var _useArgsSyncMapReduxPath = _interopRequireDefault(require("./useArgsSyncMapReduxPath"));

var _useArgsSyncMapReduxSet = _interopRequireDefault(require("./useArgsSyncMapReduxSet"));

var _jsonHelper = require("../util/jsonHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useSyncReduxArgs = function useSyncReduxArgs(state) {
  var emit = (0, _api.useChannel)({});

  var _useArgs = (0, _api.useArgs)(),
      _useArgs2 = _slicedToArray(_useArgs, 1),
      args = _useArgs2[0];

  var ref = (0, _react.useRef)({});
  var argSyncPathMap = (0, _useArgsSyncMapReduxPath["default"])();
  var argSyncSetMap = (0, _useArgsSyncMapReduxSet["default"])();
  argSyncPathMap.forEach(function (entry) {
    var value = args[entry.name];

    if (value !== ref.current[entry.name]) {
      ref.current[entry.name] = value;
      setTimeout(function () {
        return emit(_constants.EVENTS.SET_STATE_AT_PATH, entry.path, value);
      }, 0);
    }
  });
  argSyncSetMap.forEach(function (entry) {
    var value = args[entry.name];

    if (value !== ref.current[entry.name]) {
      ref.current[entry.name] = value;
      setTimeout(function () {
        var newState = entry.setter(value, args, state);
        emit(_constants.EVENTS.SET_STATE, (0, _jsonHelper.stringify)(newState));
      }, 0);
    }
  });
};

var _default = useSyncReduxArgs;
exports["default"] = _default;