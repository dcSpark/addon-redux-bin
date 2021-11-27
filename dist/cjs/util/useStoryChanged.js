"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _api = require("@storybook/api");

var s = function s(_s) {
  return _s === undefined ? '' : _s;
};

var useStoryChanged = function useStoryChanged() {
  var api = (0, _api.useStorybookApi)();
  var storyId = s(api.getUrlState().storyId);
  var storyIdRef = (0, _react.useRef)('');
  var storyChanged = storyId !== '' && storyIdRef.current !== storyId;
  storyIdRef.current = storyId;
  return storyChanged;
};

var _default = useStoryChanged;
exports["default"] = _default;