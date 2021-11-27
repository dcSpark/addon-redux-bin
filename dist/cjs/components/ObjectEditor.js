"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsoneditor = _interopRequireDefault(require("jsoneditor"));

require("jsoneditor/dist/jsoneditor.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var equals = function equals(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

var useEditor = function useEditor(onChange) {
  var containerRef = (0, _react.useRef)(null);
  var editorRef = (0, _react.useRef)();

  if (editorRef.current == null && containerRef.current != null) {
    var options = {
      mode: 'tree',
      onChangeJSON: onChange
    };
    editorRef.current = new _jsoneditor["default"](containerRef.current, options);
  }

  return {
    editorRef: editorRef,
    containerRef: containerRef
  };
};

var ObjectEditor = function ObjectEditor(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  var valueRef = (0, _react.useRef)({});
  var onChangeWrapper = (0, _react.useCallback)(function (v) {
    valueRef.current = v;
    onChange(v);
  }, []);

  var _useEditor = useEditor(onChangeWrapper),
      editorRef = _useEditor.editorRef,
      containerRef = _useEditor.containerRef;

  if (!equals(valueRef.current, value)) {
    var _editorRef$current;

    valueRef.current = value;
    (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.update(value);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef,
    className: "addon-redux-editor"
  });
};

var _default = ObjectEditor;
exports["default"] = _default;