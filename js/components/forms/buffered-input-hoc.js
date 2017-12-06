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

exports.default = function(Input) {
  var BufferedInput = (function(_React$Component) {
    _inherits(BufferedInput, _React$Component);

    function BufferedInput(props) {
      _classCallCheck(this, BufferedInput);

      var _this = _possibleConstructorReturn(
        this,
        (BufferedInput.__proto__ || Object.getPrototypeOf(BufferedInput))
          .call(this, props)
      );

      (0, _lodash2.default)(_this, [
        "handleChange",
        "handleKeyPress",
        "handleFlush"
      ]);
      _this.state = {
        value: null
      };
      return _this;
    }

    _createClass(BufferedInput, [
      {
        key: "handleKeyPress",
        value: function handleKeyPress(e) {
          if (e.key === "Enter") {
            this.handleFlush();
            e.target.blur();
          }
        }
      },
      {
        key: "handleFlush",
        value: function handleFlush() {
          var isNumeric = typeof this.props.value === "number";
          var validatesNumeric = isNumeric ? !isNaN(this.state.value) : true;
          if (this.state.value !== null && validatesNumeric) {
            this.props.onSubmit(
              isNumeric ? Number(this.state.value) : this.state.value
            );
          }
          this.setState({ value: null });
        }
      },
      {
        key: "handleChange",
        value: function handleChange(e) {
          this.setState({ value: e.target.value });
        }
      },
      {
        key: "render",
        value: function render() {
          var bufferedValue =
            this.state.value === null ? this.props.value : this.state.value;
          return _react2.default.createElement(
            Input,
            _extends({}, this.props, {
              value: bufferedValue,
              onBlur: this.handleFlush,
              onChange: this.handleChange,
              onKeyPress: this.handleKeyPress
            })
          );
        }
      }
    ]);

    return BufferedInput;
  })(_react2.default.Component);

  BufferedInput.propTypes = {
    onSubmit: _propTypes2.default.func.isRequired,
    value: _propTypes2.default.oneOfType([
      _propTypes2.default.string,
      _propTypes2.default.number
    ])
  };

  return BufferedInput;
};

var _lodash = require("lodash.bindall");

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
 * Higher Order Component to manage inputs that submit on blur and <enter>
 * @param {React.Component} Input text input that consumes onChange, onBlur, onKeyPress
 * @returns {React.Component} Buffered input that calls onSubmit on blur and <enter>
 */