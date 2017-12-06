"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _waveform = require("./waveform.css");

var _waveform2 = _interopRequireDefault(_waveform);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var Waveform = function Waveform(props) {
  var width = props.width,
    height = props.height,
    data = props.data;

  var cappedData = [0].concat(_toConsumableArray(data), [0]);

  var points = [].concat(
    _toConsumableArray(
      cappedData.map(function(v, i) {
        return [width * i / cappedData.length, height * v / 2];
      })
    ),
    _toConsumableArray(
      cappedData.reverse().map(function(v, i) {
        return [
          width * (cappedData.length - i - 1) / cappedData.length,
          -height * v / 2
        ];
      })
    )
  );

  var pathComponents = points.map(function(_ref, i) {
    var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

    var _points = _slicedToArray(points[i < points.length - 1 ? i + 1 : 0], 2),
      nx = _points[0],
      ny = _points[1];

    return "Q" + x + " " + y + " " + (x + nx) / 2 + " " + (y + ny) / 2;
  });

  return _react2.default.createElement(
    "svg",
    {
      className: _waveform2.default.container,
      viewBox: "0 0 " + width + " " + height
    },
    _react2.default.createElement(
      "g",
      { transform: "scale(1, -1) translate(0, -" + height / 2 + ")" },
      _react2.default.createElement("path", {
        className: _waveform2.default.waveformPath,
        d: "M0 0" + pathComponents.join(" ") + "Z",
        strokeLinejoin: "round",
        strokeWidth: 2
      })
    )
  );
};

Waveform.propTypes = {
  data: _propTypes2.default.arrayOf(_propTypes2.default.number),
  height: _propTypes2.default.number,
  width: _propTypes2.default.number
};

exports.default = Waveform;