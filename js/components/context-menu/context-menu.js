"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.ContextMenu = undefined;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactContextmenu = require("react-contextmenu");

var _contextMenu = require("./context-menu.css");

var _contextMenu2 = _interopRequireDefault(_contextMenu);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledContextMenu = function StyledContextMenu(props) {
  return _react2.default.createElement(
    _reactContextmenu.ContextMenu,
    _extends({}, props, {
      className: _contextMenu2.default.contextMenu
    })
  );
};

var StyledMenuItem = function StyledMenuItem(props) {
  return _react2.default.createElement(
    _reactContextmenu.MenuItem,
    _extends({}, props, {
      attributes: { className: _contextMenu2.default.menuItem }
    })
  );
};

exports.ContextMenu = StyledContextMenu;
exports.MenuItem = StyledMenuItem;