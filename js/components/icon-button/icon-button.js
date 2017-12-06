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

var _iconButton = require("./icon-button.css");

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var IconButton = function IconButton(_ref) {
  var img = _ref.img,
    className = _ref.className,
    title = _ref.title,
    onClick = _ref.onClick;
  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)(
        _iconButton2.default.container,
        className
      ),
      role: "button",
      onClick: onClick
    },
    _react2.default.createElement("img", {
      className: _iconButton2.default.icon,
      src: img
    }),
    _react2.default.createElement(
      "div",
      { className: _iconButton2.default.title },
      title
    )
  );
};

IconButton.propTypes = {
  className: _propTypes2.default.string,
  img: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.node.isRequired
};

exports.default = IconButton;