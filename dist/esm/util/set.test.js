import set from './set';
test('hit', function () {
  var start = {
    foo: [undefined, {
      bar: {
        baz: 'prev'
      }
    }]
  };
  var result = set(start, 'foo.1.bar.a', 'howdy');
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
  var output = set(input, 'a.c', 'd');
  expect(JSON.stringify(input)).toEqual(inputJson);
  expect(output).toEqual({
    a: {
      b: 'c',
      c: 'd'
    }
  });
});