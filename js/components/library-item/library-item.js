"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _lodash = require("lodash.bindall");

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _libraryItem = require("./library-item.css");

var _libraryItem2 = _interopRequireDefault(_libraryItem);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var LibraryItem = (function(_React$PureComponent) {
  _inherits(LibraryItem, _React$PureComponent);

  function LibraryItem(props) {
    _classCallCheck(this, LibraryItem);

    var _this = _possibleConstructorReturn(
      this,
      (LibraryItem.__proto__ || Object.getPrototypeOf(LibraryItem))
        .call(this, props)
    );

    (0, _lodash2.default)(_this, [
      "handleClick",
      "handleMouseEnter",
      "handleMouseLeave"
    ]);
    return _this;
  }

  _createClass(LibraryItem, [
    {
      key: "handleClick",
      value: function handleClick(e) {
        this.props.onSelect(this.props.id);
        e.preventDefault();
      }
    },
    {
      key: "handleMouseEnter",
      value: function handleMouseEnter() {
        this.props.onMouseEnter(this.props.id);
      }
    },
    {
      key: "handleMouseLeave",
      value: function handleMouseLeave() {
        this.props.onMouseLeave(this.props.id);
      }
    },
    {
      key: "render",
      value: function render() {
        return this.props.featured
          ? _react2.default.createElement(
              "div",
              {
                className: (0, _classnames2.default)(
                  _libraryItem2.default.libraryItem,
                  _libraryItem2.default.featuredItem
                ),
                onClick: this.handleClick
              },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("img", {
                  className: _libraryItem2.default.featuredImage,
                  src: this.props.iconURL
                })
              ),
              _react2.default.createElement(
                "div",
                {
                  className: _libraryItem2.default.featuredText
                },
                _react2.default.createElement(
                  "span",
                  { className: _libraryItem2.default.libraryItemName },
                  this.props.name
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  "span",
                  { className: _libraryItem2.default.featuredDescription },
                  this.props.description
                )
              )
            )
          : _react2.default.createElement(
              _box2.default,
              {
                className: _libraryItem2.default.libraryItem,
                onClick: this.handleClick,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave
              },
              _react2.default.createElement(
                _box2.default,
                {
                  className:
                    _libraryItem2.default.libraryItemImageContainerWrapper
                },
                _react2.default.createElement(
                  _box2.default,
                  {
                    className: _libraryItem2.default.libraryItemImageContainer
                  },
                  _react2.default.createElement("img", {
                    className: _libraryItem2.default.libraryItemImage,
                    src: this.props.iconURL
                  })
                )
              ),
              _react2.default.createElement(
                "span",
                { className: _libraryItem2.default.libraryItemName },
                this.props.name
              )
            );
      }
    }
  ]);

  return LibraryItem;
})(_react2.default.PureComponent);

LibraryItem.propTypes = {
  description: _propTypes2.default.string,
  featured: _propTypes2.default.bool,
  iconURL: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired,
  onMouseEnter: _propTypes2.default.func.isRequired,
  onMouseLeave: _propTypes2.default.func.isRequired,
  onSelect: _propTypes2.default.func.isRequired
};

exports.default = LibraryItem;