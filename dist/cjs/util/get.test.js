"use strict";

var _get = _interopRequireDefault(require("./get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('hit', function () {
  expect((0, _get["default"])({
    foo: [{}, {
      bar: 'howdy'
    }]
  }, 'foo.1.bar')).toBe('howdy');
});
test('miss', function () {
  expect((0, _get["default"])({
    foo: [{}, {
      bar: 'howdy'
    }]
  }, 'fooa.6.barz')).toBe(undefined);
  expect((0, _get["default"])({}, 'fooa.6.barz')).toBe(undefined);
  expect((0, _get["default"])(null, 'fooa.6.barz')).toBe(undefined);
  expect((0, _get["default"])(undefined, 'fooa.6.barz')).toBe(undefined);
  expect((0, _get["default"])(15, 'fooa.6.barz')).toBe(undefined);
  expect((0, _get["default"])('15', 'fooa.6.barz')).toBe(undefined);
});
test('default', function () {
  expect((0, _get["default"])({
    foo: [{}, {
      bar: 'howdy'
    }]
  }, 'fooa.6.barz', 'hi')).toBe('hi');
});