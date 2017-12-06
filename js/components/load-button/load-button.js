"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("../button/button.jsx");

var _button2 = _interopRequireDefault(_button);

var _loadButton = require("./load-button.css");

var _loadButton2 = _interopRequireDefault(_loadButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var LoadButtonComponent = function LoadButtonComponent(_ref) {
  var inputRef = _ref.inputRef,
    onChange = _ref.onChange,
    onClick = _ref.onClick,
    title = _ref.title,
    props = _objectWithoutProperties(_ref, [
      "inputRef",
      "onChange",
      "onClick",
      "title"
    ]);

  return _react2.default.createElement(
    "span",
    props,
    _react2.default.createElement(
      _button2.default,
      { onClick: onClick },
      title
    ),
    _react2.default.createElement("input", {
      className: _loadButton2.default.fileInput,
      ref: inputRef,
      type: "file",
      onChange: onChange
    })
  );
};

LoadButtonComponent.propTypes = {
  className: _propTypes2.default.string,
  inputRef: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string
};
LoadButtonComponent.defaultProps = {
  title: "Load"
};
exports.default = LoadButtonComponent;