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

var _greenFlag = require("../green-flag/green-flag.jsx");

var _greenFlag2 = _interopRequireDefault(_greenFlag);

var _stopAll = require("../stop-all/stop-all.jsx");

var _stopAll2 = _interopRequireDefault(_stopAll);

var _turboMode = require("../turbo-mode/turbo-mode.jsx");

var _turboMode2 = _interopRequireDefault(_turboMode);

var _controls = require("./controls.css");

var _controls2 = _interopRequireDefault(_controls);

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

var Controls = function Controls(props) {
  var active = props.active,
    className = props.className,
    onGreenFlagClick = props.onGreenFlagClick,
    onStopAllClick = props.onStopAllClick,
    turbo = props.turbo,
    componentProps = _objectWithoutProperties(props, [
      "active",
      "className",
      "onGreenFlagClick",
      "onStopAllClick",
      "turbo"
    ]);

  return _react2.default.createElement(
    "div",
    _extends(
      {
        className: (0, _classnames2.default)(
          _controls2.default.controlsContainer,
          className
        )
      },
      componentProps
    ),
    _react2.default.createElement(_greenFlag2.default, {
      active: active,
      onClick: onGreenFlagClick
    }),
    _react2.default.createElement(_stopAll2.default, {
      active: active,
      onClick: onStopAllClick
    }),
    turbo ? _react2.default.createElement(_turboMode2.default, null) : null
  );
};

Controls.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onGreenFlagClick: _propTypes2.default.func.isRequired,
  onStopAllClick: _propTypes2.default.func.isRequired,
  turbo: _propTypes2.default.bool
};

Controls.defaultProps = {
  active: false,
  turbo: false
};

exports.default = Controls;