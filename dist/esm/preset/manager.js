import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import StateView from '../components/StateView';
import { color } from '@storybook/theming';
import { ADDON_ID, PANEL_ID_HISTORY, PANEL_ID_STORE } from '../constants';
import HistoryView from '../components/HistoryView';

var injectCss = function injectCss() {
  var css = "\n  .addon-redux-editor .jsoneditor {\n    border: none;\n  }\n\n  .addon-redux-editor .jsoneditor-menu {\n    background-color: ".concat(color.secondary, ";\n    border-bottom: none;\n    border-top: none;\n  }\n\n  .addon-redux-editor .jsoneditor-contextmenu .jsoneditor-menu {\n    background: #ffffff;\n  }\n\n  .jsoneditor-modal .pico-modal-header {\n    background: ").concat(color.secondary, ";\n  }\n  ");
  var head = document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  head.appendChild(style);
  style.appendChild(document.createTextNode(css));
};

var StorePanel = function StorePanel(props) {
  return /*#__PURE__*/React.createElement(AddonPanel, props, /*#__PURE__*/React.createElement(StateView, null));
};

var HistoryPanel = function HistoryPanel(props) {
  return /*#__PURE__*/React.createElement(AddonPanel, props, /*#__PURE__*/React.createElement(HistoryView, null));
};

addons.register(ADDON_ID, function () {
  injectCss();
  addons.add(PANEL_ID_STORE, {
    type: types.PANEL,
    title: 'Redux Store',
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: StorePanel
  });
  addons.add(PANEL_ID_HISTORY, {
    type: types.PANEL,
    title: 'Redux History',
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === 'story';
    },
    render: HistoryPanel
  });
});