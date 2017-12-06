"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _label = require("./label.css");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Label = function Label(props) {
  return _react2.default.createElement(
    "label",
    { className: _label2.default.inputGroup },
    _react2.default.createElement(
      "span",
      {
        className: props.secondary
          ? _label2.default.inputLabelSecondary
          : _label2.default.inputLabel
      },
      props.text
    ),
    props.children
  );
};

Label.propTypes = {
  children: _propTypes2.default.node,
  secondary: _propTypes2.default.bool,
  text: _propTypes2.default.string.isRequired
};

Label.defaultProps = {
  secondary: false
};

exports.default = Label;