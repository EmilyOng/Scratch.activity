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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _selector = require("./selector.jsx");

var _selector2 = _interopRequireDefault(_selector);

var _assetPanel = require("./asset-panel.css");

var _assetPanel2 = _interopRequireDefault(_assetPanel);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AssetPanel = function AssetPanel(props) {
  return _react2.default.createElement(
    _box2.default,
    { className: _assetPanel2.default.wrapper },
    _react2.default.createElement(
      _selector2.default,
      _extends(
        {
          className: _assetPanel2.default.selector
        },
        props
      )
    ),
    _react2.default.createElement(
      _box2.default,
      { className: _assetPanel2.default.detailArea },
      props.children
    )
  );
};

AssetPanel.propTypes = _extends({}, _selector2.default.propTypes);

exports.default = AssetPanel;