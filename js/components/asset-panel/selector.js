"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _spriteSelectorItem = require("../../containers/sprite-selector-item.jsx");

var _spriteSelectorItem2 = _interopRequireDefault(_spriteSelectorItem);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _iconButton = require("../icon-button/icon-button.jsx");

var _iconButton2 = _interopRequireDefault(_iconButton);

var _selector = require("./selector.css");

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Selector = function Selector(props) {
  var buttons = props.buttons,
    items = props.items,
    selectedItemIndex = props.selectedItemIndex,
    onDeleteClick = props.onDeleteClick,
    onItemClick = props.onItemClick;

  return _react2.default.createElement(
    _box2.default,
    { className: _selector2.default.wrapper },
    _react2.default.createElement(
      _box2.default,
      { className: _selector2.default.listArea },
      items.map(function(item, index) {
        return _react2.default.createElement(_spriteSelectorItem2.default, {
          assetId: item.assetId,
          className: _selector2.default.listItem,
          costumeURL: item.url,
          id: index,
          key: "asset-" + index,
          name: item.name,
          selected: index === selectedItemIndex,
          onClick: onItemClick,
          onDeleteButtonClick: onDeleteClick
        });
      })
    ),
    _react2.default.createElement(
      _box2.default,
      { className: _selector2.default.newButtons },
      buttons.map(function(_ref, index) {
        var message = _ref.message,
          img = _ref.img,
          onClick = _ref.onClick;
        return _react2.default.createElement(_iconButton2.default, {
          img: img,
          key: index,
          title: message,
          onClick: onClick
        });
      })
    )
  );
};

Selector.propTypes = {
  buttons: _propTypes2.default.arrayOf(
    _propTypes2.default.shape({
      message: _propTypes2.default.node.isRequired,
      img: _propTypes2.default.string.isRequired,
      onClick: _propTypes2.default.func.isRequired
    })
  ),
  items: _propTypes2.default.arrayOf(
    _propTypes2.default.shape({
      url: _propTypes2.default.string,
      name: _propTypes2.default.string.isRequired
    })
  ),
  onDeleteClick: _propTypes2.default.func.isRequired,
  onItemClick: _propTypes2.default.func.isRequired,
  selectedItemIndex: _propTypes2.default.number.isRequired
};

exports.default = Selector;
