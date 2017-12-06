"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _svgToImage = require("svg-to-image");

var _svgToImage2 = _interopRequireDefault(_svgToImage);

var _xhr = require("xhr");

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

/**
 * @fileoverview
 * A component for rendering Scratch costume URLs to canvases.
 * Use for sprite library, costume library, sprite selector, etc.
 * Props include width, height, and direction (direction in Scratch value).
 */

var CostumeCanvas = (function(_React$Component) {
  _inherits(CostumeCanvas, _React$Component);

  function CostumeCanvas() {
    _classCallCheck(this, CostumeCanvas);

    return _possibleConstructorReturn(
      this,
      (CostumeCanvas.__proto__ || Object.getPrototypeOf(CostumeCanvas))
        .apply(this, arguments)
    );
  }

  _createClass(CostumeCanvas, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.load();
      }
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
          this.load();
        } else if (
          prevProps.width !== this.props.width ||
          prevProps.height !== this.props.height ||
          prevProps.direction !== this.props.direction
        ) {
          this.draw();
        }
      }
    },
    {
      key: "draw",
      value: function draw() {
        if (!this.canvas) {
          return;
        }

        // Draw the costume to the rendered canvas.
        var img = this.img;
        var context = this.canvas.getContext("2d");

        // Scale to fit.
        var scale = void 0;

        // Choose the larger dimension to scale by.
        if (img.width > img.height) {
          scale = this.canvas.width / img.width;
        } else {
          scale = this.canvas.height / img.height;
        }

        // Rotate by the Scratch-value direction.
        var angle = (-90 + this.props.direction) * Math.PI / 180;

        // Rotation origin point will be center of the canvas.
        var contextTranslateX = this.canvas.width / 2;
        var contextTranslateY = this.canvas.height / 2;

        // First, clear the canvas.
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Translate the context to the center of the canvas,
        // then rotate canvas drawing by `angle`.
        context.translate(contextTranslateX, contextTranslateY);
        context.rotate(angle);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          -(scale * img.width / 2),
          -(scale * img.height / 2),
          scale * img.width,
          scale * img.height
        );

        // Reset the canvas rotation and translation to 0, (0, 0).
        context.rotate(-angle);
        context.translate(-contextTranslateX, -contextTranslateY);
      }
    },
    {
      key: "load",
      value: function load() {
        var _this2 = this;

        // Draw the icon on our canvas.
        var url = this.props.url;
        if (url.indexOf(".svg") > -1) {
          // Vector graphics: need to download with XDR and rasterize.
          // Queue request asynchronously.
          setTimeout(function() {
            _xhr2.default.get(
              {
                useXDR: true,
                url: url
              },
              function(err, response, body) {
                if (!err) {
                  (0, _svgToImage2.default)(body, function(svgErr, img) {
                    if (!svgErr) {
                      _this2.img = img;
                      _this2.draw();
                    }
                  });
                }
              }
            );
          }, 0);
        } else {
          // Raster graphics: create Image and draw it.
          var img = new Image();
          img.src = url;
          img.onload = function() {
            _this2.img = img;
            _this2.draw();
          };
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _this3 = this;

        return _react2.default.createElement("canvas", {
          className: this.props.className,
          height: this.props.height,
          width: this.props.width,
          ref: function ref(c) {
            return (_this3.canvas = c);
          } // eslint-disable-line react/jsx-sort-props
        });
      }
    }
  ]);

  return CostumeCanvas;
})(_react2.default.Component);

CostumeCanvas.defaultProps = {
  width: 100,
  height: 100,
  direction: 90
};

CostumeCanvas.propTypes = {
  className: _propTypes2.default.string,
  direction: _propTypes2.default.number,
  height: _propTypes2.default.number,
  url: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number
};

exports.default = CostumeCanvas;