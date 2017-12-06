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

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash.bindall");

var _lodash2 = _interopRequireDefault(_lodash);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _loupe = require("./loupe.css");

var _loupe2 = _interopRequireDefault(_loupe);

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var zoomScale = 3;

var LoupeComponent = (function(_React$Component) {
  _inherits(LoupeComponent, _React$Component);

  function LoupeComponent(props) {
    _classCallCheck(this, LoupeComponent);

    var _this = _possibleConstructorReturn(
      this,
      (LoupeComponent.__proto__ || Object.getPrototypeOf(LoupeComponent))
        .call(this, props)
    );

    (0, _lodash2.default)(_this, ["setCanvas"]);
    return _this;
  }

  _createClass(LoupeComponent, [
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.draw();
      }
    },
    {
      key: "draw",
      value: function draw() {
        var boxSize = 6 / zoomScale;
        var boxLineWidth = 1 / zoomScale;
        var colorRingWidth = 15 / zoomScale;

        var ctx = this.canvas.getContext("2d");
        var _props$colorInfo = this.props.colorInfo,
          color = _props$colorInfo.color,
          data = _props$colorInfo.data,
          width = _props$colorInfo.width,
          height = _props$colorInfo.height;

        this.canvas.width = zoomScale * width;
        this.canvas.height = zoomScale * height;

        // In order to scale the image data, must draw to a tmp canvas first
        var tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = width;
        tmpCanvas.height = height;
        var tmpCtx = tmpCanvas.getContext("2d");
        var imageData = tmpCtx.createImageData(width, height);
        imageData.data.set(data);
        tmpCtx.putImageData(imageData, 0, 0);

        // Scale the loupe canvas and draw the zoomed image
        ctx.save();
        ctx.scale(zoomScale, zoomScale);
        ctx.drawImage(tmpCanvas, 0, 0, width, height);

        // Draw an outlined square at the cursor position (cursor is hidden)
        ctx.lineWidth = boxLineWidth;
        ctx.strokeStyle = "black";
        ctx.fillStyle =
          "rgba(" +
          color.r +
          ", " +
          color.g +
          ", " +
          color.b +
          ", " +
          color.a +
          ")";
        ctx.beginPath();
        ctx.rect(
          width / 2 - boxSize / 2,
          height / 2 - boxSize / 2,
          boxSize,
          boxSize
        );
        ctx.fill();
        ctx.stroke();

        // Draw a thick ring around the loupe showing the current color
        ctx.strokeStyle =
          "rgba(" +
          color.r +
          ", " +
          color.g +
          ", " +
          color.b +
          ", " +
          color.a +
          ")";
        ctx.lineWidth = colorRingWidth;
        ctx.beginPath();
        ctx.moveTo(width, height / 2);
        ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      key: "setCanvas",
      value: function setCanvas(element) {
        this.canvas = element;
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          colorInfo = _props.colorInfo,
          boxProps = _objectWithoutProperties(_props, ["colorInfo"]);

        return _react2.default.createElement(
          _box2.default,
          _extends({}, boxProps, {
            className: _loupe2.default.colorPicker,
            componentRef: this.setCanvas,
            element: "canvas",
            height: colorInfo.height,
            style: {
              top: colorInfo.y - zoomScale * colorInfo.height / 2,
              left: colorInfo.x - zoomScale * colorInfo.width / 2,
              width: colorInfo.width * zoomScale,
              height: colorInfo.height * zoomScale
            },
            width: colorInfo.width
          })
        );
      }
    }
  ]);

  return LoupeComponent;
})(_react2.default.Component);

LoupeComponent.propTypes = {
  colorInfo: _propTypes2.default.shape({
    color: _propTypes2.default.shape({
      r: _propTypes2.default.number,
      g: _propTypes2.default.number,
      b: _propTypes2.default.number
    }),
    data: _propTypes2.default.instanceOf(Uint8Array),
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  })
};

exports.default = LoupeComponent;