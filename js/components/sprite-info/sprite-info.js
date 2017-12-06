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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _label = require("../forms/label.jsx");

var _label2 = _interopRequireDefault(_label);

var _input = require("../forms/input.jsx");

var _input2 = _interopRequireDefault(_input);

var _bufferedInputHoc = require("../forms/buffered-input-hoc.jsx");

var _bufferedInputHoc2 = _interopRequireDefault(_bufferedInputHoc);

var _layoutConstants = require("../../lib/layout-constants.js");

var _layoutConstants2 = _interopRequireDefault(_layoutConstants);

var _spriteInfo = require("./sprite-info.css");

var _spriteInfo2 = _interopRequireDefault(_spriteInfo);

var _iconX = require("./icon--x.svg");

var _iconX2 = _interopRequireDefault(_iconX);

var _iconY = require("./icon--y.svg");

var _iconY2 = _interopRequireDefault(_iconY);

var _iconShow = require("./icon--show.svg");

var _iconShow2 = _interopRequireDefault(_iconShow);

var _iconHide = require("./icon--hide.svg");

var _iconHide2 = _interopRequireDefault(_iconHide);

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

var BufferedInput = (0, _bufferedInputHoc2.default)(_input2.default);
var ROTATION_STYLES = ["left-right", "don't rotate", "all around"];

var SpriteInfo = (function(_React$Component) {
  _inherits(SpriteInfo, _React$Component);

  function SpriteInfo() {
    _classCallCheck(this, SpriteInfo);

    return _possibleConstructorReturn(
      this,
      (SpriteInfo.__proto__ || Object.getPrototypeOf(SpriteInfo))
        .apply(this, arguments)
    );
  }

  _createClass(SpriteInfo, [
    {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return (
          this.props.direction !== nextProps.direction ||
          this.props.disabled !== nextProps.disabled ||
          this.props.name !== nextProps.name ||
          this.props.rotationStyle !== nextProps.rotationStyle ||
          this.props.visible !== nextProps.visible ||
          this.props.x !== nextProps.x ||
          this.props.y !== nextProps.y
        );
      }
    },
    {
      key: "render",
      value: function render() {
        var _classNames, _classNames2;

        return _react2.default.createElement(
          _box2.default,
          {
            className: _spriteInfo2.default.spriteInfo
          },
          _react2.default.createElement(
            "div",
            {
              className: (0, _classnames2.default)(
                _spriteInfo2.default.row,
                _spriteInfo2.default.rowPrimary
              )
            },
            _react2.default.createElement(
              "div",
              { className: _spriteInfo2.default.group },
              _react2.default.createElement(
                _label2.default,
                { text: "Sprite" },
                _react2.default.createElement(BufferedInput, {
                  disabled: this.props.disabled,
                  placeholder: "Name",
                  tabIndex: "1",
                  type: "text",
                  value: this.props.disabled ? "" : this.props.name,
                  onSubmit: this.props.onChangeName
                })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: _spriteInfo2.default.group },
              _react2.default.createElement(
                _reactResponsive2.default,
                { minWidth: _layoutConstants2.default.fullSizeMinWidth },
                _react2.default.createElement(
                  "div",
                  { className: _spriteInfo2.default.iconWrapper },
                  _react2.default.createElement("img", {
                    "aria-hidden": "true",
                    className: (0, _classnames2.default)(
                      _spriteInfo2.default.xIcon,
                      _spriteInfo2.default.icon
                    ),
                    src: _iconX2.default
                  })
                )
              ),
              _react2.default.createElement(
                _label2.default,
                { text: "x" },
                _react2.default.createElement(BufferedInput, {
                  small: true,
                  disabled: this.props.disabled,
                  placeholder: "x",
                  tabIndex: "2",
                  type: "text",
                  value: this.props.disabled ? "" : this.props.x,
                  onSubmit: this.props.onChangeX
                })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: _spriteInfo2.default.group },
              _react2.default.createElement(
                _reactResponsive2.default,
                { minWidth: _layoutConstants2.default.fullSizeMinWidth },
                _react2.default.createElement(
                  "div",
                  { className: _spriteInfo2.default.iconWrapper },
                  _react2.default.createElement("img", {
                    "aria-hidden": "true",
                    className: (0, _classnames2.default)(
                      _spriteInfo2.default.yIcon,
                      _spriteInfo2.default.icon
                    ),
                    src: _iconY2.default
                  })
                )
              ),
              _react2.default.createElement(
                _label2.default,
                { text: "y" },
                _react2.default.createElement(BufferedInput, {
                  small: true,
                  disabled: this.props.disabled,
                  placeholder: "y",
                  tabIndex: "3",
                  type: "text",
                  value: this.props.disabled ? "" : this.props.y,
                  onSubmit: this.props.onChangeY
                })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            {
              className: (0, _classnames2.default)(
                _spriteInfo2.default.row,
                _spriteInfo2.default.rowSecondary
              )
            },
            _react2.default.createElement(
              "div",
              { className: _spriteInfo2.default.group },
              _react2.default.createElement(
                _reactResponsive2.default,
                { minWidth: _layoutConstants2.default.fullSizeMinWidth },
                _react2.default.createElement(_label2.default, {
                  secondary: true,
                  text: "Show"
                })
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "div",
                  {
                    className: (0, _classnames2.default)(
                      _spriteInfo2.default.radio,
                      _spriteInfo2.default.radioLeft,
                      _spriteInfo2.default.iconWrapper,
                      ((_classNames = {}),
                      _defineProperty(
                        _classNames,
                        _spriteInfo2.default.isActive,
                        this.props.visible && !this.props.disabled
                      ),
                      _defineProperty(
                        _classNames,
                        _spriteInfo2.default.isDisabled,
                        this.props.disabled
                      ),
                      _classNames)
                    ),
                    tabIndex: "4",
                    onClick: this.props.onClickVisible,
                    onKeyPress: this.props.onPressVisible
                  },
                  _react2.default.createElement("img", {
                    className: _spriteInfo2.default.icon,
                    src: _iconShow2.default
                  })
                ),
                _react2.default.createElement(
                  "div",
                  {
                    className: (0, _classnames2.default)(
                      _spriteInfo2.default.radio,
                      _spriteInfo2.default.radioRight,
                      _spriteInfo2.default.iconWrapper,
                      ((_classNames2 = {}),
                      _defineProperty(
                        _classNames2,
                        _spriteInfo2.default.isActive,
                        !this.props.visible && !this.props.disabled
                      ),
                      _defineProperty(
                        _classNames2,
                        _spriteInfo2.default.isDisabled,
                        this.props.disabled
                      ),
                      _classNames2)
                    ),
                    tabIndex: "5",
                    onClick: this.props.onClickNotVisible,
                    onKeyPress: this.props.onPressNotVisible
                  },
                  _react2.default.createElement("img", {
                    className: _spriteInfo2.default.icon,
                    src: _iconHide2.default
                  })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: _spriteInfo2.default.group },
              _react2.default.createElement(
                _label2.default,
                {
                  secondary: true,
                  text: "Direction"
                },
                _react2.default.createElement(BufferedInput, {
                  small: true,
                  disabled: this.props.disabled,
                  label: "Direction",
                  tabIndex: "6",
                  type: "text",
                  value: this.props.disabled ? "" : this.props.direction,
                  onSubmit: this.props.onChangeDirection
                })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: _spriteInfo2.default.group },
              _react2.default.createElement(
                _label2.default,
                {
                  secondary: true,
                  text: "Rotation"
                },
                _react2.default.createElement(
                  "select",
                  {
                    className: (0, _classnames2.default)(
                      _spriteInfo2.default.selectForm,
                      _spriteInfo2.default.rotationSelect
                    ),
                    disabled: this.props.disabled,
                    value: this.props.rotationStyle,
                    onChange: this.props.onChangeRotationStyle
                  },
                  ROTATION_STYLES.map(function(style) {
                    return _react2.default.createElement(
                      "option",
                      {
                        key: style,
                        value: style
                      },
                      style
                    );
                  })
                )
              )
            )
          )
        );
      }
    }
  ]);

  return SpriteInfo;
})(_react2.default.Component);

SpriteInfo.propTypes = {
  direction: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ]),
  disabled: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  onChangeDirection: _propTypes2.default.func,
  onChangeName: _propTypes2.default.func,
  onChangeRotationStyle: _propTypes2.default.func,
  onChangeX: _propTypes2.default.func,
  onChangeY: _propTypes2.default.func,
  onClickNotVisible: _propTypes2.default.func,
  onClickVisible: _propTypes2.default.func,
  onPressNotVisible: _propTypes2.default.func,
  onPressVisible: _propTypes2.default.func,
  rotationStyle: _propTypes2.default.oneOf(ROTATION_STYLES),
  visible: _propTypes2.default.bool,
  x: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ]),
  y: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ])
};

exports.default = SpriteInfo;