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

var _iconFilter = require("./icon--filter.svg");

var _iconFilter2 = _interopRequireDefault(_iconFilter);

var _iconX = require("./icon--x.svg");

var _iconX2 = _interopRequireDefault(_iconX);

var _filter = require("./filter.css");

var _filter2 = _interopRequireDefault(_filter);

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

var FilterComponent = function FilterComponent(props) {
  var _classNames;

  var onChange = props.onChange,
    onClear = props.onClear,
    placeholderText = props.placeholderText,
    filterQuery = props.filterQuery;

  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)(
        ((_classNames = {}),
        _defineProperty(_classNames, _filter2.default.filter, true),
        _defineProperty(
          _classNames,
          _filter2.default.isActive,
          filterQuery.length > 0
        ),
        _classNames)
      )
    },
    _react2.default.createElement("img", {
      className: _filter2.default.filterIcon,
      src: _iconFilter2.default
    }),
    _react2.default.createElement("input", {
      autoFocus: true,
      className: _filter2.default.filterInput,
      placeholder: placeholderText,
      type: "text",
      value: filterQuery,
      onChange: onChange
    }),
    _react2.default.createElement(
      "div",
      {
        className: _filter2.default.xIconWrapper,
        onClick: onClear
      },
      _react2.default.createElement("img", {
        className: _filter2.default.xIcon,
        src: _iconX2.default
      })
    )
  );
};

FilterComponent.propTypes = {
  filterQuery: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  placeholderText: _propTypes2.default.string
};
FilterComponent.defaultProps = {
  placeholderText: "what are you looking for?"
};
exports.default = FilterComponent;