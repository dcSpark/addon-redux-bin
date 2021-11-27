"use strict";

var _set = _interopRequireDefault(require("./set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('hit', function () {
  var start = {
    foo: [undefined, {
      bar: {
        baz: 'prev'
      }
    }]
  };
  var result = (0, _set["default"])(start, 'foo.1.bar.a', 'howdy');
  expect(result).toEqual({
    foo: [undefined, {
      bar: {
        baz: 'prev',
        a: 'howdy'
      }
    }]
  });
});
test('do not mutate', function () {
  var input = {
    a: {
      b: 'c'
    }
  };
  var inputJson = JSON.stringify(input);
  var output = (0, _set["default"])(input, 'a.c', 'd');
  expect(JSON.stringify(input)).toEqual(inputJson);
  expect(output).toEqual({
    a: {
      b: 'c',
      c: 'd'
    }
  });
});