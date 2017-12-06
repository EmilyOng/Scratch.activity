"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _modal = require("../modal/modal.jsx");

var _modal2 = _interopRequireDefault(_modal);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _prompt = require("./prompt.css");

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PromptComponent = function PromptComponent(props) {
  return _react2.default.createElement(
    _modal2.default,
    {
      className: _prompt2.default.modalContent,
      contentLabel: props.title,
      onRequestClose: props.onCancel
    },
    _react2.default.createElement(
      _box2.default,
      { className: _prompt2.default.body },
      _react2.default.createElement(
        _box2.default,
        { className: _prompt2.default.label },
        props.label
      ),
      _react2.default.createElement(
        _box2.default,
        null,
        _react2.default.createElement("input", {
          autoFocus: true,
          className: _prompt2.default.input,
          placeholder: props.placeholder,
          onChange: props.onChange,
          onKeyPress: props.onKeyPress
        })
      ),
      _react2.default.createElement(
        _box2.default,
        { className: _prompt2.default.buttonRow },
        _react2.default.createElement(
          "button",
          {
            className: _prompt2.default.cancelButton,
            onClick: props.onCancel
          },
          "Cancel"
        ),
        _react2.default.createElement(
          "button",
          {
            className: _prompt2.default.okButton,
            onClick: props.onOk
          },
          "OK"
        )
      )
    )
  );
};

PromptComponent.propTypes = {
  label: _propTypes2.default.string.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onKeyPress: _propTypes2.default.func.isRequired,
  onOk: _propTypes2.default.func.isRequired,
  placeholder: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired
};

exports.default = PromptComponent;