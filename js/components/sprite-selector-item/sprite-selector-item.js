"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _costumeCanvas = require("../costume-canvas/costume-canvas.jsx");

var _costumeCanvas2 = _interopRequireDefault(_costumeCanvas);

var _closeButton = require("../close-button/close-button.jsx");

var _closeButton2 = _interopRequireDefault(_closeButton);

var _spriteSelectorItem = require("./sprite-selector-item.css");

var _spriteSelectorItem2 = _interopRequireDefault(_spriteSelectorItem);

var _reactContextmenu = require("react-contextmenu");

var _contextMenu = require("../context-menu/context-menu.jsx");

var _reactIntl = require("react-intl");

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

// react-contextmenu requires unique id to match trigger and context menu
var contextMenuId = 0;

var SpriteSelectorItem = function SpriteSelectorItem(props) {
  return _react2.default.createElement(
    _reactContextmenu.ContextMenuTrigger,
    {
      attributes: {
        className: (0, _classnames2.default)(
          props.className,
          _spriteSelectorItem2.default.spriteSelectorItem,
          _defineProperty(
            {},
            _spriteSelectorItem2.default.isSelected,
            props.selected
          )
        ),
        onClick: props.onClick
      },
      id: props.name + "-" + contextMenuId
    },
    props.selected
      ? _react2.default.createElement(_closeButton2.default, {
          className: _spriteSelectorItem2.default.deleteButton,
          size: _closeButton2.default.SIZE_SMALL,
          onClick: props.onDeleteButtonClick
        })
      : null,
    props.costumeURL
      ? _react2.default.createElement(_costumeCanvas2.default, {
          className: _spriteSelectorItem2.default.spriteImage,
          height: 32,
          url: props.costumeURL,
          width: 32
        })
      : null,
    _react2.default.createElement(
      "div",
      { className: _spriteSelectorItem2.default.spriteName },
      props.name
    ),
    _react2.default.createElement(
      _contextMenu.ContextMenu,
      { id: props.name + "-" + contextMenuId++ },
      props.onDuplicateButtonClick
        ? _react2.default.createElement(
            _contextMenu.MenuItem,
            { onClick: props.onDuplicateButtonClick },
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              defaultMessage: "duplicate",
              description: "Menu item to duplicate in the right click menu",
              id: "gui.spriteSelectorItem.contextMenuDuplicate"
            })
          )
        : null,
      _react2.default.createElement(
        _contextMenu.MenuItem,
        { onClick: props.onDeleteButtonClick },
        _react2.default.createElement(_reactIntl.FormattedMessage, {
          defaultMessage: "delete",
          description: "Menu item to delete in the right click menu",
          id: "gui.spriteSelectorItem.contextMenuDelete"
        })
      )
    )
  );
};

SpriteSelectorItem.propTypes = {
  className: _propTypes2.default.string,
  costumeURL: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func,
  onDeleteButtonClick: _propTypes2.default.func.isRequired,
  onDuplicateButtonClick: _propTypes2.default.func,
  selected: _propTypes2.default.bool.isRequired
};

exports.default = SpriteSelectorItem;