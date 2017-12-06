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

var _iconStopAll = require("./icon--stop-all.svg");

var _iconStopAll2 = _interopRequireDefault(_iconStopAll);

var _stopAll = require("./stop-all.css");

var _stopAll2 = _interopRequireDefault(_stopAll);

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

var StopAllComponent = function StopAllComponent(props) {
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
          _stopAll2.default.stopAll,
          _defineProperty({}, _stopAll2.default.isActive, active)
        ),
        src: _iconStopAll2.default,
        title: title,
        onClick: onClick
      },
      componentProps
    )
  );
};

StopAllComponent.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string
};

StopAllComponent.defaultProps = {
  active: false,
  title: "Stop"
};

exports.default = StopAllComponent;