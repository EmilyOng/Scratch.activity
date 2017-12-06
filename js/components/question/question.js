"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _question = require("./question.css");

var _question2 = _interopRequireDefault(_question);

var _input = require("../forms/input.jsx");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var QuestionComponent = function QuestionComponent(props) {
  var answer = props.answer,
    question = props.question,
    onChange = props.onChange,
    onClick = props.onClick,
    onKeyPress = props.onKeyPress;

  return _react2.default.createElement(
    "div",
    { className: _question2.default.questionWrapper },
    _react2.default.createElement(
      "div",
      { className: _question2.default.questionContainer },
      question
        ? _react2.default.createElement(
            "div",
            { className: _question2.default.questionLabel },
            question
          )
        : null,
      _react2.default.createElement(
        "div",
        { className: _question2.default.questionInput },
        _react2.default.createElement(_input2.default, {
          autoFocus: true,
          value: answer,
          onChange: onChange,
          onKeyPress: onKeyPress
        }),
        _react2.default.createElement(
          "button",
          {
            className: _question2.default.questionSubmitButton,
            onClick: onClick
          },
          "\u2714\uFE0E"
        )
      )
    )
  );
};

QuestionComponent.propTypes = {
  answer: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onKeyPress: _propTypes2.default.func.isRequired,
  question: _propTypes2.default.string
};

exports.default = QuestionComponent;