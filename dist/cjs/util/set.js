"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PATH_SEPARATOR = /[^.[\]]+/g;

var isNotObject = function isNotObject(o) {
  return Object(o) !== o;
};

var isArrayIndexable = function isArrayIndexable(s) {
  return Math.abs(s) >> 0 === +s;
};

var seedObject = function seedObject(nextPathPart) {
  return isArrayIndexable(nextPathPart) ? [] : {};
};

var set = function set(obj, path, value) {
  var _path$match;

  if (path === null || path === undefined) return obj;
  if (isNotObject(obj)) return obj;
  var aPath = (_path$match = path.match(PATH_SEPARATOR)) !== null && _path$match !== void 0 ? _path$match : [];
  var max = aPath.length - 1;
  var clone;
  var prevBranch;
  var prevPath;

  var reduceObjectBranch = function reduceObjectBranch(branch, pathPart, i) {
    var branchClone = Array.isArray(branch) ? _toConsumableArray(branch) : _objectSpread({}, branch); // mutate cloned branch

    if (i === max) {
      branchClone[pathPart] = value;
    } else if (isNotObject(branchClone[pathPart])) {
      branchClone[pathPart] = seedObject(aPath[i + 1]);
    } // update cloned object with the new branch


    if (i === 0) {
      clone = branchClone;
      prevBranch = clone;
    } else {
      prevBranch[prevPath] = branchClone;
      prevBranch = branchClone;
    }

    prevPath = pathPart; // return the next branch for iteration

    return branchClone[pathPart];
  };

  aPath.reduce(reduceObjectBranch, obj);
  return clone;
};

var _default = set;
exports["default"] = _default;