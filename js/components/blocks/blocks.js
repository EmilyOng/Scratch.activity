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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _blocks = require("./blocks.css");

var _blocks2 = _interopRequireDefault(_blocks);

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

var BlocksComponent = function BlocksComponent(props) {
  var componentRef = props.componentRef,
    componentProps = _objectWithoutProperties(props, ["componentRef"]);

  return _react2.default.createElement(
    _box2.default,
    _extends(
      {
        className: _blocks2.default.blocks,
        componentRef: componentRef
      },
      componentProps
    )
  );
};
BlocksComponent.propTypes = {
  componentRef: _propTypes2.default.func
};
exports.default = BlocksComponent;