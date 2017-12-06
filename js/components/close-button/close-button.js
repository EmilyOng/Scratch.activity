"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _closeButton = require("./close-button.css");

var _closeButton2 = _interopRequireDefault(_closeButton);

var _iconClose = require("./icon--close.svg");

var _iconClose2 = _interopRequireDefault(_iconClose);

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

var CloseButton = function CloseButton(props) {
  var _classNames;

  return _react2.default.createElement(
    "div",
    {
      "aria-label": "Close",
      className: (0, _classnames2.default)(
        _closeButton2.default.closeButton,
        props.className,
        ((_classNames = {}),
        _defineProperty(
          _classNames,
          _closeButton2.default.small,
          props.size === CloseButton.SIZE_SMALL
        ),
        _defineProperty(
          _classNames,
          _closeButton2.default.large,
          props.size === CloseButton.SIZE_LARGE
        ),
        _classNames)
      ),
      role: "button",
      onClick: props.onClick
    },
    _react2.default.createElement("img", {
      className: _closeButton2.default.closeIcon,
      src: _iconClose2.default
    })
  );
};

CloseButton.SIZE_SMALL = "small";
CloseButton.SIZE_LARGE = "large";

CloseButton.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  size: _propTypes2.default.oneOf([
    CloseButton.SIZE_SMALL,
    CloseButton.SIZE_LARGE
  ])
};

CloseButton.defaultProps = {
  size: CloseButton.SIZE_LARGE
};

exports.default = CloseButton;