"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _jsonHelper = require("../util/jsonHelper");

var _constants = require("../constants");

var _api = require("@storybook/api");

var _useStoryChanged = _interopRequireDefault(require("../util/useStoryChanged"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSetStateFromParameter = function useSetStateFromParameter() {
  var emit = (0, _api.useChannel)({});
  var mergeStateRef = (0, _react.useRef)('');
  var mergeState = (0, _api.useParameter)(_constants.PARAM_REDUX_MERGE_STATE, '');
  var storyChanged = (0, _useStoryChanged["default"])();
  (0, _react.useEffect)(function () {
    var mergeStateChanged = mergeState !== mergeStateRef.current;
    mergeStateRef.current = mergeState;

    if (mergeState !== '' && (storyChanged || mergeStateChanged)) {
      emit(_constants.EVENTS.MERGE_STATE, (0, _jsonHelper.stringify)(mergeState));
    }
  }, [mergeState, storyChanged]);
};

var _default = useSetStateFromParameter;
exports["default"] = _default;