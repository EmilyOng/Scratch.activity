"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _iconGreenFlag = require("./icon--green-flag.svg");

var _iconGreenFlag2 = _interopRequireDefault(_iconGreenFlag);

var _greenFlag = require("./green-flag.css");

var _greenFlag2 = _interopRequireDefault(_greenFlag);

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

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var GreenFlagComponent = function GreenFlagComponent(props) {
  var active = props.active,
    className = props.className,
    onClick = props.onClick,
    title = props.title,
    componentProps = _objectWithoutProperties(props, [
      "active",
      "className",
      "onClick",
      "title"
    ]);

  return _react2.default.createElement(
    "img",
    _extends(
      {
        className: (0, _classnames2.default)(
          className,
          _greenFlag2.default.greenFlag,
          _defineProperty({}, _greenFlag2.default.isActive, active)
        ),
        src: _iconGreenFlag2.default,
        title: title,
        onClick: onClick
      },
      componentProps
    )
  );
};
GreenFlagComponent.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string
};
GreenFlagComponent.defaultProps = {
  active: false,
  title: "Go"
};
exports.default = GreenFlagComponent;