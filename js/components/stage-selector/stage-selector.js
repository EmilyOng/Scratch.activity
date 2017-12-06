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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require("react-intl");

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _iconButton = require("../icon-button/icon-button.jsx");

var _iconButton2 = _interopRequireDefault(_iconButton);

var _costumeCanvas = require("../costume-canvas/costume-canvas.jsx");

var _costumeCanvas2 = _interopRequireDefault(_costumeCanvas);

var _stageSelector = require("./stage-selector.css");

var _stageSelector2 = _interopRequireDefault(_stageSelector);

var _iconBackdrop = require("./icon--backdrop.svg");

var _iconBackdrop2 = _interopRequireDefault(_iconBackdrop);

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

var addBackdropMessage = _react2.default.createElement(
  _reactIntl.FormattedMessage,
  {
    defaultMessage: "Add Backdrop",
    description: "Button to add a backdrop in the target pane",
    id: "gui.stageSelector.targetPaneAddBackdrop"
  }
);

var StageSelector = function StageSelector(props) {
  var backdropCount = props.backdropCount,
    selected = props.selected,
    url = props.url,
    onClick = props.onClick,
    onNewBackdropClick = props.onNewBackdropClick,
    componentProps = _objectWithoutProperties(props, [
      "backdropCount",
      "selected",
      "url",
      "onClick",
      "onNewBackdropClick"
    ]);

  return _react2.default.createElement(
    _box2.default,
    _extends(
      {
        className: (0, _classnames2.default)(
          _stageSelector2.default.stageSelector,
          _defineProperty({}, _stageSelector2.default.isSelected, selected)
        ),
        onClick: onClick
      },
      componentProps
    ),
    _react2.default.createElement(
      "div",
      { className: _stageSelector2.default.header },
      _react2.default.createElement(
        "div",
        { className: _stageSelector2.default.headerTitle },
        "Stage"
      )
    ),
    url
      ? _react2.default.createElement(_costumeCanvas2.default, {
          className: _stageSelector2.default.costumeCanvas,
          height: 42,
          url: url,
          width: 56
        })
      : null,
    _react2.default.createElement(
      "div",
      { className: _stageSelector2.default.label },
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Backdrops",
        description: "Label for the backdrops in the stage selector",
        id: "gui.stageSelector.backdrops"
      })
    ),
    _react2.default.createElement(
      "div",
      { className: _stageSelector2.default.count },
      backdropCount
    ),
    _react2.default.createElement(_iconButton2.default, {
      className: _stageSelector2.default.addButton,
      img: _iconBackdrop2.default,
      title: addBackdropMessage,
      onClick: onNewBackdropClick
    })
  );
};

StageSelector.propTypes = {
  backdropCount: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func,
  onNewBackdropClick: _propTypes2.default.func,
  selected: _propTypes2.default.bool.isRequired,
  url: _propTypes2.default.string
};
exports.default = StageSelector;