"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _loadButton = require("../../containers/load-button.jsx");

var _loadButton2 = _interopRequireDefault(_loadButton);

var _saveButton = require("../../containers/save-button.jsx");

var _saveButton2 = _interopRequireDefault(_saveButton);

var _languageSelector = require("../../containers/language-selector.jsx");

var _languageSelector2 = _interopRequireDefault(_languageSelector);

var _menuBar = require("./menu-bar.css");

var _menuBar2 = _interopRequireDefault(_menuBar);

var _scratchLogo = require("./scratch-logo.svg");

var _scratchLogo2 = _interopRequireDefault(_scratchLogo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var MenuBar = function MenuBar() {
  return _react2.default.createElement(
    _box2.default,
    {
      className: (0, _classnames2.default)(
        _defineProperty({}, _menuBar2.default.menuBar, true)
      )
    },
    _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)(
          _menuBar2.default.logoWrapper,
          _menuBar2.default.menuItem
        )
      },
      _react2.default.createElement("img", {
        alt: "Scratch",
        className: _menuBar2.default.scratchLogo,
        src: _scratchLogo2.default
      })
    ),
    _react2.default.createElement(_saveButton2.default, {
      className: _menuBar2.default.menuItem
    }),
    _react2.default.createElement(_loadButton2.default, {
      className: _menuBar2.default.menuItem
    }),
    _react2.default.createElement(_languageSelector2.default, {
      className: _menuBar2.default.menuItem
    })
  );
};

exports.default = MenuBar;