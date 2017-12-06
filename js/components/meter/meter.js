"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _meter = require("./meter.css");

var _meter2 = _interopRequireDefault(_meter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Meter = function Meter(props) {
  var level = props.level,
    width = props.width,
    height = props.height;

  var nGreen = 11;
  var nYellow = 5;
  var nRed = 3;

  var nBars = nGreen + nYellow + nRed;

  var barSpacing = 2.5;
  var barRounding = 3;
  var barHeight = (height - barSpacing * (nBars + 1)) / nBars;

  var nBarsToMask = nBars - Math.floor(level * nBars);

  return _react2.default.createElement(
    "svg",
    {
      className: _meter2.default.container,
      height: height,
      width: width
    },
    Array(nBars)
      .fill(0)
      .map(function(value, index) {
        return _react2.default.createElement("rect", {
          className:
            index < nGreen
              ? _meter2.default.green
              : index < nGreen + nYellow
                ? _meter2.default.yellow
                : _meter2.default.red,
          height: barHeight,
          key: index,
          rx: barRounding,
          ry: barRounding,
          width: width - 2,
          x: 1,
          y: height - (barSpacing + barHeight) * (index + 1)
        });
      }),
    _react2.default.createElement("rect", {
      fill: "white",
      height: nBarsToMask * (barHeight + barSpacing) + barSpacing / 2,
      opacity: "0.75",
      width: width,
      x: 0,
      y: 0
    })
  );
};

Meter.propTypes = {
  height: _propTypes2.default.number,
  level: _propTypes2.default.number,
  width: _propTypes2.default.number
};

exports.default = Meter;