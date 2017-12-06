"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require("react-intl");

var _iconTurbo = require("./icon--turbo.svg");

var _iconTurbo2 = _interopRequireDefault(_iconTurbo);

var _turboMode = require("./turbo-mode.css");

var _turboMode2 = _interopRequireDefault(_turboMode);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TurboMode = function TurboMode() {
  return _react2.default.createElement(
    "div",
    { className: _turboMode2.default.turboContainer },
    _react2.default.createElement("img", {
      className: _turboMode2.default.turboIcon,
      src: _iconTurbo2.default
    }),
    _react2.default.createElement(
      "div",
      { className: _turboMode2.default.turboLabel },
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Turbo Mode",
        description: "Label indicating turbo mode is active",
        id: "gui.turboMode.active"
      })
    )
  );
};

exports.default = TurboMode;