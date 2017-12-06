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

var _scratchVm = require("scratch-vm");

var _scratchVm2 = _interopRequireDefault(_scratchVm);

var _backdropLibrary = require("../../containers/backdrop-library.jsx");

var _backdropLibrary2 = _interopRequireDefault(_backdropLibrary);

var _costumeLibrary = require("../../containers/costume-library.jsx");

var _costumeLibrary2 = _interopRequireDefault(_costumeLibrary);

var _soundLibrary = require("../../containers/sound-library.jsx");

var _soundLibrary2 = _interopRequireDefault(_soundLibrary);

var _spriteLibrary = require("../../containers/sprite-library.jsx");

var _spriteLibrary2 = _interopRequireDefault(_spriteLibrary);

var _spriteSelector = require("../sprite-selector/sprite-selector.jsx");

var _spriteSelector2 = _interopRequireDefault(_spriteSelector);

var _stageSelector = require("../../containers/stage-selector.jsx");

var _stageSelector2 = _interopRequireDefault(_stageSelector);

var _targetPane = require("./target-pane.css");

var _targetPane2 = _interopRequireDefault(_targetPane);

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

/*
 * Pane that contains the sprite selector, sprite info, stage selector,
 * and the new sprite, costume and backdrop buttons
 * @param {object} props Props for the component
 * @returns {React.Component} rendered component
 */
var TargetPane = function TargetPane(_ref) {
  var editingTarget = _ref.editingTarget,
    backdropLibraryVisible = _ref.backdropLibraryVisible,
    costumeLibraryVisible = _ref.costumeLibraryVisible,
    soundLibraryVisible = _ref.soundLibraryVisible,
    spriteLibraryVisible = _ref.spriteLibraryVisible,
    onChangeSpriteDirection = _ref.onChangeSpriteDirection,
    onChangeSpriteName = _ref.onChangeSpriteName,
    onChangeSpriteRotationStyle = _ref.onChangeSpriteRotationStyle,
    onChangeSpriteVisibility = _ref.onChangeSpriteVisibility,
    onChangeSpriteX = _ref.onChangeSpriteX,
    onChangeSpriteY = _ref.onChangeSpriteY,
    onDeleteSprite = _ref.onDeleteSprite,
    onDuplicateSprite = _ref.onDuplicateSprite,
    onNewSpriteClick = _ref.onNewSpriteClick,
    onRequestCloseBackdropLibrary = _ref.onRequestCloseBackdropLibrary,
    onRequestCloseCostumeLibrary = _ref.onRequestCloseCostumeLibrary,
    onRequestCloseSoundLibrary = _ref.onRequestCloseSoundLibrary,
    onRequestCloseSpriteLibrary = _ref.onRequestCloseSpriteLibrary,
    onSelectSprite = _ref.onSelectSprite,
    stage = _ref.stage,
    sprites = _ref.sprites,
    vm = _ref.vm,
    componentProps = _objectWithoutProperties(_ref, [
      "editingTarget",
      "backdropLibraryVisible",
      "costumeLibraryVisible",
      "soundLibraryVisible",
      "spriteLibraryVisible",
      "onChangeSpriteDirection",
      "onChangeSpriteName",
      "onChangeSpriteRotationStyle",
      "onChangeSpriteVisibility",
      "onChangeSpriteX",
      "onChangeSpriteY",
      "onDeleteSprite",
      "onDuplicateSprite",
      "onNewSpriteClick",
      "onRequestCloseBackdropLibrary",
      "onRequestCloseCostumeLibrary",
      "onRequestCloseSoundLibrary",
      "onRequestCloseSpriteLibrary",
      "onSelectSprite",
      "stage",
      "sprites",
      "vm"
    ]);

  return _react2.default.createElement(
    "div",
    _extends(
      {
        className: _targetPane2.default.targetPane
      },
      componentProps
    ),
    _react2.default.createElement(_spriteSelector2.default, {
      selectedId: editingTarget,
      sprites: sprites,
      onChangeSpriteDirection: onChangeSpriteDirection,
      onChangeSpriteName: onChangeSpriteName,
      onChangeSpriteRotationStyle: onChangeSpriteRotationStyle,
      onChangeSpriteVisibility: onChangeSpriteVisibility,
      onChangeSpriteX: onChangeSpriteX,
      onChangeSpriteY: onChangeSpriteY,
      onDeleteSprite: onDeleteSprite,
      onDuplicateSprite: onDuplicateSprite,
      onNewSpriteClick: onNewSpriteClick,
      onSelectSprite: onSelectSprite
    }),
    _react2.default.createElement(
      "div",
      { className: _targetPane2.default.stageSelectorWrapper },
      stage.id &&
        _react2.default.createElement(_stageSelector2.default, {
          assetId: stage.costume && stage.costume.assetId,
          backdropCount: stage.costumeCount,
          id: stage.id,
          selected: stage.id === editingTarget,
          onSelect: onSelectSprite
        }),
      _react2.default.createElement(
        "div",
        null,
        spriteLibraryVisible
          ? _react2.default.createElement(_spriteLibrary2.default, {
              vm: vm,
              onRequestClose: onRequestCloseSpriteLibrary
            })
          : null,
        costumeLibraryVisible
          ? _react2.default.createElement(_costumeLibrary2.default, {
              vm: vm,
              onRequestClose: onRequestCloseCostumeLibrary
            })
          : null,
        soundLibraryVisible
          ? _react2.default.createElement(_soundLibrary2.default, {
              vm: vm,
              onRequestClose: onRequestCloseSoundLibrary
            })
          : null,
        backdropLibraryVisible
          ? _react2.default.createElement(_backdropLibrary2.default, {
              vm: vm,
              onRequestClose: onRequestCloseBackdropLibrary
            })
          : null
      )
    )
  );
};

var spriteShape = _propTypes2.default.shape({
  costume: _propTypes2.default.shape({
    url: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    bitmapResolution: _propTypes2.default.number.isRequired,
    rotationCenterX: _propTypes2.default.number.isRequired,
    rotationCenterY: _propTypes2.default.number.isRequired
  }),
  direction: _propTypes2.default.number,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  order: _propTypes2.default.number,
  rotationStyle: _propTypes2.default.string,
  visibility: _propTypes2.default.bool,
  x: _propTypes2.default.number,
  y: _propTypes2.default.number
});

TargetPane.propTypes = {
  backdropLibraryVisible: _propTypes2.default.bool,
  costumeLibraryVisible: _propTypes2.default.bool,
  editingTarget: _propTypes2.default.string,
  extensionLibraryVisible: _propTypes2.default.bool,
  onChangeSpriteDirection: _propTypes2.default.func,
  onChangeSpriteName: _propTypes2.default.func,
  onChangeSpriteRotationStyle: _propTypes2.default.func,
  onChangeSpriteVisibility: _propTypes2.default.func,
  onChangeSpriteX: _propTypes2.default.func,
  onChangeSpriteY: _propTypes2.default.func,
  onDeleteSprite: _propTypes2.default.func,
  onDuplicateSprite: _propTypes2.default.func,
  onNewSpriteClick: _propTypes2.default.func,
  onRequestCloseBackdropLibrary: _propTypes2.default.func,
  onRequestCloseCostumeLibrary: _propTypes2.default.func,
  onRequestCloseExtensionLibrary: _propTypes2.default.func,
  onRequestCloseSoundLibrary: _propTypes2.default.func,
  onRequestCloseSpriteLibrary: _propTypes2.default.func,
  onSelectSprite: _propTypes2.default.func,
  soundLibraryVisible: _propTypes2.default.bool,
  spriteLibraryVisible: _propTypes2.default.bool,
  sprites: _propTypes2.default.objectOf(spriteShape),
  stage: spriteShape,
  vm: _propTypes2.default.instanceOf(_scratchVm2.default)
};

exports.default = TargetPane;