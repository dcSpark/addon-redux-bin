export var parse = function parse(json) {
  if (json === undefined) {
    return undefined;
  }

  try {
    return JSON.parse(json !== null && json !== void 0 ? json : '{}');
  } catch (err) {
    return {};
  }
};
export var stringify = function stringify(obj) {
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