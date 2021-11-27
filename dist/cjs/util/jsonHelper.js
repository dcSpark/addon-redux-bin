"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = exports.parse = void 0;

var parse = function parse(json) {
  if (json === undefined) {
    return undefined;
  }

  try {
    return JSON.parse(json !== null && json !== void 0 ? json : '{}');
  } catch (err) {
    return {};
  }
};

exports.parse = parse;

var stringify = function stringify(obj) {
  if (obj === undefined) {
    return undefined;
  }

  if (typeof obj === 'string') {
    obj = parse(obj);
  }

  try {
    return JSON.stringify(obj);
  } catch (err) {
    return '{}';
  }
};

exports.stringify = stringify;