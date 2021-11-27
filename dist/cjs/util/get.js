"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var PATH_SEPARATOR = /[,[\].]+?/;

var reducePath = function reducePath(res, key) {
  return res === null || res === void 0 ? void 0 : res[key];
};

var get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var result = path.split(PATH_SEPARATOR).reduce(reducePath, obj);
  return result === undefined || result === obj ? defaultValue : result;
};

var _default = get;
exports["default"] = _default;