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

var _reactIntl = require("react-intl");

var _iconBooleanInput = require("./icon--boolean-input.svg");

var _iconBooleanInput2 = _interopRequireDefault(_iconBooleanInput);

var _iconTextInput = require("./icon--text-input.svg");

var _iconTextInput2 = _interopRequireDefault(_iconTextInput);

var _iconLabel = require("./icon--label.svg");

var _iconLabel2 = _interopRequireDefault(_iconLabel);

var _customProcedures = require("./custom-procedures.css");

var _customProcedures2 = _interopRequireDefault(_customProcedures);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CustomProcedures = function CustomProcedures(props) {
  return _react2.default.createElement(
    _modal2.default,
    {
      className: _customProcedures2.default.modalContent,
      contentLabel: "Create new block",
      onRequestClose: props.onCancel
    },
    _react2.default.createElement(_box2.default, {
      className: _customProcedures2.default.workspace,
      componentRef: props.componentRef
    }),
    _react2.default.createElement(
      _box2.default,
      { className: _customProcedures2.default.body },
      _react2.default.createElement(
        "div",
        { className: _customProcedures2.default.optionsRow },
        _react2.default.createElement(
          "div",
          {
            className: _customProcedures2.default.optionCard,
            role: "button",
            tabIndex: "0",
            onClick: props.onAddTextNumber
          },
          _react2.default.createElement("img", {
            className: _customProcedures2.default.optionIcon,
            src: _iconTextInput2.default
          }),
          _react2.default.createElement(
            "div",
            { className: _customProcedures2.default.optionTitle },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              defaultMessage: "Add an input",
              description: "Label for button to add a number/text input",
              id: "gui.customProcedures.addAnInputNumberText"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: _customProcedures2.default.optionDescription },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              defaultMessage: "number or text",
              description: "Description of the number/text input type",
              id: "gui.customProcedures.numberTextType"
            })
          )
        ),
        _react2.default.createElement(
          "div",
          {
            className: _customProcedures2.default.optionCard,
            role: "button",
            tabIndex: "0",
            onClick: props.onAddBoolean
          },
          _react2.default.createElement("img", {
            className: _customProcedures2.default.optionIcon,
            src: _iconBooleanInput2.default
          }),
          _react2.default.createElement(
            "div",
            { className: _customProcedures2.default.optionTitle },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              defaultMessage: "Add an input",
              description: "Label for button to add a boolean input",
              id: "gui.customProcedures.addAnInputBoolean"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: _customProcedures2.default.optionDescription },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              defaultMessage: "boolean",
              description: "Description of the boolean input type",
              id: "gui.customProcedures.booleanType"
            })
          )
        ),
        _react2.default.createElement(
          "div",
          {
            className: _customProcedures2.default.optionCard,
            role: "button",
            tabIndex: "0",
            onClick: props.onAddLabel
          },
          _react2.default.createElement("img", {
            className: _customProcedures2.default.optionIcon,
            src: _iconLabel2.default
          }),
          _react2.default.createElement(
            "div",
            { className: _customProcedures2.default.optionTitle },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              defaultMessage: "Add a label",
              description: "Label for button to add a label",
              id: "gui.customProcedures.addALabel"
            })
          )
        )
      ),
      _react2.default.createElement("div", {
        className: _customProcedures2.default.checkboxRow
      }),
      _react2.default.createElement(
        _box2.default,
        { className: _customProcedures2.default.buttonRow },
        _react2.default.createElement(
          "button",
          {
            className: _customProcedures2.default.cancelButton,
            onClick: props.onCancel
          },
          _react2.default.createElement(_reactIntl.FormattedMessage, {
            defaultMessage: "Cancel",
            description: "Label for button to cancel custom procedure edits",
            id: "gui.customProcedures.cancel"
          })
        ),
        _react2.default.createElement(
          "button",
          {
            className: _customProcedures2.default.okButton,
            onClick: props.onOk
          },
          _react2.default.createElement(_reactIntl.FormattedMessage, {
            defaultMessage: "OK",
            description: "Label for button to save new custom procedure",
            id: "gui.customProcedures.ok"
          })
        )
      )
    )
  );
};

CustomProcedures.propTypes = {
  componentRef: _propTypes2.default.func.isRequired,
  onAddBoolean: _propTypes2.default.func.isRequired,
  onAddLabel: _propTypes2.default.func.isRequired,
  onAddTextNumber: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onOk: _propTypes2.default.func.isRequired
};

exports.default = CustomProcedures;