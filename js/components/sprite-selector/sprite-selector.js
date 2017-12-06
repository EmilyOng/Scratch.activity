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

var _reactIntl = require("react-intl");

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _spriteInfo = require("../../containers/sprite-info.jsx");

var _spriteInfo2 = _interopRequireDefault(_spriteInfo);

var _spriteSelectorItem = require("../../containers/sprite-selector-item.jsx");

var _spriteSelectorItem2 = _interopRequireDefault(_spriteSelectorItem);

var _iconButton = require("../icon-button/icon-button.jsx");

var _iconButton2 = _interopRequireDefault(_iconButton);

var _spriteSelector = require("./sprite-selector.css");

var _spriteSelector2 = _interopRequireDefault(_spriteSelector);

var _iconSprite = require("./icon--sprite.svg");

var _iconSprite2 = _interopRequireDefault(_iconSprite);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var addSpriteMessage = _react2.default.createElement(
  _reactIntl.FormattedMessage,
  {
    defaultMessage: "Add Sprite",
    description: "Button to add a sprite in the target pane",
    id: "gui.spriteSelector.addSprite"
  }
);

var SpriteSelectorComponent = function SpriteSelectorComponent(props) {
  var onChangeSpriteDirection = props.onChangeSpriteDirection,
    onChangeSpriteName = props.onChangeSpriteName,
    onChangeSpriteRotationStyle = props.onChangeSpriteRotationStyle,
    onChangeSpriteVisibility = props.onChangeSpriteVisibility,
    onChangeSpriteX = props.onChangeSpriteX,
    onChangeSpriteY = props.onChangeSpriteY,
    onDeleteSprite = props.onDeleteSprite,
    onDuplicateSprite = props.onDuplicateSprite,
    onNewSpriteClick = props.onNewSpriteClick,
    onSelectSprite = props.onSelectSprite,
    selectedId = props.selectedId,
    sprites = props.sprites,
    componentProps = _objectWithoutProperties(props, [
      "onChangeSpriteDirection",
      "onChangeSpriteName",
      "onChangeSpriteRotationStyle",
      "onChangeSpriteVisibility",
      "onChangeSpriteX",
      "onChangeSpriteY",
      "onDeleteSprite",
      "onDuplicateSprite",
      "onNewSpriteClick",
      "onSelectSprite",
      "selectedId",
      "sprites"
    ]);

  var selectedSprite = sprites[selectedId];
  var spriteInfoDisabled = false;
  if (typeof selectedSprite === "undefined") {
    selectedSprite = {};
    spriteInfoDisabled = true;
  }
  return _react2.default.createElement(
    _box2.default,
    _extends(
      {
        className: _spriteSelector2.default.spriteSelector
      },
      componentProps
    ),
    _react2.default.createElement(_spriteInfo2.default, {
      direction: selectedSprite.direction,
      disabled: spriteInfoDisabled,
      name: selectedSprite.name,
      rotationStyle: selectedSprite.rotationStyle,
      visible: selectedSprite.visible,
      x: selectedSprite.x,
      y: selectedSprite.y,
      onChangeDirection: onChangeSpriteDirection,
      onChangeName: onChangeSpriteName,
      onChangeRotationStyle: onChangeSpriteRotationStyle,
      onChangeVisibility: onChangeSpriteVisibility,
      onChangeX: onChangeSpriteX,
      onChangeY: onChangeSpriteY
    }),
    _react2.default.createElement(
      _box2.default,
      { className: _spriteSelector2.default.scrollWrapper },
      _react2.default.createElement(
        _box2.default,
        { className: _spriteSelector2.default.itemsWrapper },
        Object.keys(sprites)
          // Re-order by list order
          .sort(function(id1, id2) {
            return sprites[id1].order - sprites[id2].order;
          })
          .map(function(id) {
            return sprites[id];
          })
          .map(function(sprite) {
            return _react2.default.createElement(_spriteSelectorItem2.default, {
              assetId: sprite.costume && sprite.costume.assetId,
              className: _spriteSelector2.default.sprite,
              id: sprite.id,
              key: sprite.id,
              name: sprite.name,
              selected: sprite.id === selectedId,
              onClick: onSelectSprite,
              onDeleteButtonClick: onDeleteSprite,
              onDuplicateButtonClick: onDuplicateSprite
            });
          })
      )
    ),
    _react2.default.createElement(_iconButton2.default, {
      className: _spriteSelector2.default.addButton,
      img: _iconSprite2.default,
      title: addSpriteMessage,
      onClick: onNewSpriteClick
    })
  );
};

SpriteSelectorComponent.propTypes = {
  onChangeSpriteDirection: _propTypes2.default.func,
  onChangeSpriteName: _propTypes2.default.func,
  onChangeSpriteRotationStyle: _propTypes2.default.func,
  onChangeSpriteVisibility: _propTypes2.default.func,
  onChangeSpriteX: _propTypes2.default.func,
  onChangeSpriteY: _propTypes2.default.func,
  onDeleteSprite: _propTypes2.default.func,
  onDuplicateSprite: _propTypes2.default.func,
  onNewSpriteClick: _propTypes2.default.func,
  onSelectSprite: _propTypes2.default.func,
  selectedId: _propTypes2.default.string,
  sprites: _propTypes2.default.shape({
    id: _propTypes2.default.shape({
      costume: _propTypes2.default.shape({
        url: _propTypes2.default.string,
        name: _propTypes2.default.string.isRequired,
        bitmapResolution: _propTypes2.default.number.isRequired,
        rotationCenterX: _propTypes2.default.number.isRequired,
        rotationCenterY: _propTypes2.default.number.isRequired
      }),
      name: _propTypes2.default.string.isRequired,
      order: _propTypes2.default.number.isRequired
    })
  })
};

exports.default = SpriteSelectorComponent;