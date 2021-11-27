"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _components = require("@storybook/components");

var _StateView = _interopRequireDefault(require("../components/StateView"));

var _theming = require("@storybook/theming");

var _constants = require("../constants");

var _HistoryView = _interopRequireDefault(require("../components/HistoryView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var injectCss = function injectCss() {
  var css = "\n  .addon-redux-editor .jsoneditor {\n    border: none;\n  }\n\n  .addon-redux-editor .jsoneditor-menu {\n    background-color: ".concat(_theming.color.secondary, ";\n    border-bottom: none;\n    border-top: none;\n  }\n\n  .addon-redux-editor .jsoneditor-contextmenu .jsoneditor-menu {\n    background: #ffffff;\n  }\n\n  .jsoneditor-modal .pico-modal-header {\n    background: ").concat(_theming.color.secondary, ";\n  }\n  ");
  var head = document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  head.appendChild(style);
  style.appendChild(document.createTextNode(css));
};

var StorePanel = function StorePanel(props) {
  return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, props, /*#__PURE__*/_react["default"].createElement(_StateView["default"], null));
};

var HistoryPanel = function HistoryPanel(props) {
  return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, props, /*#__PURE__*/_react["default"].createElement(_HistoryView["default"], null));
};

_addons.addons.register(_constants.ADDON_ID, function () {
  injectCss();

  _addons.addons.add(_constants.PANEL_ID_STORE, {
    type: _addons.types.PANEL,
    title: 'Redux Store',
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: StorePanel
  });

  _addons.addons.add(_constants.PANEL_ID_HISTORY, {
    type: _addons.types.PANEL,
    title: 'Redux History',
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === 'story';
    },
    render: HistoryPanel
  });
});