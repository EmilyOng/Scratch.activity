"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _scratchL10n = require("scratch-l10n");

var _scratchL10n2 = _interopRequireDefault(_scratchL10n);

var _languageIcon = require("./language-icon.svg");

var _languageIcon2 = _interopRequireDefault(_languageIcon);

var _languageSelector = require("./language-selector.css");

var _languageSelector2 = _interopRequireDefault(_languageSelector);

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

var LanguageSelector = function LanguageSelector(_ref) {
  var currentLocale = _ref.currentLocale,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, ["currentLocale", "onChange"]);

  return _react2.default.createElement(
    _box2.default,
    props,
    _react2.default.createElement(
      "div",
      { className: _languageSelector2.default.group },
      _react2.default.createElement("img", {
        className: _languageSelector2.default.languageIcon,
        src: _languageIcon2.default
      }),
      _react2.default.createElement(
        "select",
        {
          "aria-label": "language selector",
          className: _languageSelector2.default.languageSelect,
          value: currentLocale,
          onChange: onChange
        },
        Object.keys(_scratchL10n2.default).map(function(locale) {
          return _react2.default.createElement(
            "option",
            {
              key: locale,
              value: locale
            },
            _scratchL10n2.default[locale].name
          );
        })
      )
    )
  );
};

LanguageSelector.propTypes = {
  currentLocale: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

exports.default = LanguageSelector;