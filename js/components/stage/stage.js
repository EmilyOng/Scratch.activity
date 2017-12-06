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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _loupe = require("../loupe/loupe.jsx");

var _loupe2 = _interopRequireDefault(_loupe);

var _monitorList = require("../../containers/monitor-list.jsx");

var _monitorList2 = _interopRequireDefault(_monitorList);

var _question = require("../../containers/question.jsx");

var _question2 = _interopRequireDefault(_question);

var _stage = require("./stage.css");

var _stage2 = _interopRequireDefault(_stage);

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

var StageComponent = function StageComponent(props) {
  var canvasRef = props.canvasRef,
    width = props.width,
    height = props.height,
    colorInfo = props.colorInfo,
    onDeactivateColorPicker = props.onDeactivateColorPicker,
    isColorPicking = props.isColorPicking,
    question = props.question,
    onQuestionAnswered = props.onQuestionAnswered,
    boxProps = _objectWithoutProperties(props, [
      "canvasRef",
      "width",
      "height",
      "colorInfo",
      "onDeactivateColorPicker",
      "isColorPicking",
      "question",
      "onQuestionAnswered"
    ]);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _box2.default,
      {
        className: (0, _classnames2.default)(
          _stage2.default.stageWrapper,
          _defineProperty({}, _stage2.default.withColorPicker, isColorPicking)
        )
      },
      _react2.default.createElement(
        _box2.default,
        _extends(
          {
            className: _stage2.default.stage,
            componentRef: canvasRef,
            element: "canvas",
            height: height,
            width: width
          },
          boxProps
        )
      ),
      _react2.default.createElement(
        _box2.default,
        { className: _stage2.default.monitorWrapper },
        _react2.default.createElement(_monitorList2.default, null)
      ),
      isColorPicking && colorInfo
        ? _react2.default.createElement(
            _box2.default,
            { className: _stage2.default.colorPickerWrapper },
            _react2.default.createElement(_loupe2.default, {
              colorInfo: colorInfo
            })
          )
        : null,
      question === null
        ? null
        : _react2.default.createElement(_question2.default, {
            question: question,
            onQuestionAnswered: onQuestionAnswered
          })
    ),
    isColorPicking
      ? _react2.default.createElement(_box2.default, {
          className: _stage2.default.colorPickerBackground,
          onClick: onDeactivateColorPicker
        })
      : null
  );
};
StageComponent.propTypes = {
  canvasRef: _propTypes2.default.func,
  colorInfo: _loupe2.default.propTypes.colorInfo,
  height: _propTypes2.default.number,
  isColorPicking: _propTypes2.default.bool,
  onDeactivateColorPicker: _propTypes2.default.func,
  onQuestionAnswered: _propTypes2.default.func,
  question: _propTypes2.default.string,
  width: _propTypes2.default.number
};
StageComponent.defaultProps = {
  canvasRef: function canvasRef() {},
  width: 480,
  height: 360
};
exports.default = StageComponent;