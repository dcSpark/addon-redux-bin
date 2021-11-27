import React, { useCallback, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

var equals = function equals(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

var useEditor = function useEditor(onChange) {
  var containerRef = useRef(null);
  var editorRef = useRef();

  if (editorRef.current == null && containerRef.current != null) {
    var options = {
      mode: 'tree',
      onChangeJSON: onChange
    };
    editorRef.current = new JSONEditor(containerRef.current, options);
  }

  return {
    editorRef: editorRef,
    containerRef: containerRef
  };
};

var ObjectEditor = function ObjectEditor(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  var valueRef = useRef({});
  var onChangeWrapper = useCallback(function (v) {
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

  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "addon-redux-editor"
  });
};

export default ObjectEditor;