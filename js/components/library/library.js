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

var _libraryItem = require("../library-item/library-item.jsx");

var _libraryItem2 = _interopRequireDefault(_libraryItem);

var _modal = require("../modal/modal.jsx");

var _modal2 = _interopRequireDefault(_modal);

var _library = require("./library.css");

var _library2 = _interopRequireDefault(_library);

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

var LibraryComponent = (function(_React$Component) {
  _inherits(LibraryComponent, _React$Component);

  function LibraryComponent(props) {
    _classCallCheck(this, LibraryComponent);

    var _this = _possibleConstructorReturn(
      this,
      (LibraryComponent.__proto__ || Object.getPrototypeOf(LibraryComponent))
        .call(this, props)
    );

    (0, _lodash2.default)(_this, [
      "handleFilterChange",
      "handleFilterClear",
      "handleMouseEnter",
      "handleMouseLeave",
      "handleSelect"
    ]);
    _this.state = {
      selectedItem: null,
      filterQuery: ""
    };
    return _this;
  }

  _createClass(LibraryComponent, [
    {
      key: "handleSelect",
      value: function handleSelect(id) {
        this.props.onRequestClose();
        this.props.onItemSelected(this.getFilteredData()[id]);
      }
    },
    {
      key: "handleMouseEnter",
      value: function handleMouseEnter(id) {
        if (this.props.onItemMouseEnter)
          this.props.onItemMouseEnter(this.getFilteredData()[id]);
      }
    },
    {
      key: "handleMouseLeave",
      value: function handleMouseLeave(id) {
        if (this.props.onItemMouseLeave)
          this.props.onItemMouseLeave(this.getFilteredData()[id]);
      }
    },
    {
      key: "handleFilterChange",
      value: function handleFilterChange(event) {
        this.setState({ filterQuery: event.target.value });
      }
    },
    {
      key: "handleFilterClear",
      value: function handleFilterClear() {
        this.setState({ filterQuery: "" });
      }
    },
    {
      key: "getFilteredData",
      value: function getFilteredData() {
        var _this2 = this;

        return this.props.data.filter(function(dataItem) {
          return (
            dataItem.name
              .toLowerCase()
              .indexOf(_this2.state.filterQuery.toLowerCase()) !== -1
          );
        });
      }
    },
    {
      key: "render",
      value: function render() {
        var _this3 = this;

        return _react2.default.createElement(
          _modal2.default,
          {
            className: _library2.default.modalContent,
            contentLabel: this.props.title,
            filterQuery: this.state.filterQuery,
            onFilterChange: this.handleFilterChange,
            onFilterClear: this.handleFilterClear,
            onRequestClose: this.props.onRequestClose
          },
          _react2.default.createElement(
            "div",
            { className: _library2.default.libraryScrollGrid },
            this.getFilteredData().map(function(dataItem, index) {
              var scratchURL = dataItem.md5
                ? "https://cdn.assets.scratch.mit.edu/internalapi/asset/" +
                  dataItem.md5 +
                  "/get/"
                : dataItem.rawURL;
              return _react2.default.createElement(_libraryItem2.default, {
                description: dataItem.description,
                featured: dataItem.featured,
                iconURL: scratchURL,
                id: index,
                key: "item_" + index,
                name: dataItem.name,
                onMouseEnter: _this3.handleMouseEnter,
                onMouseLeave: _this3.handleMouseLeave,
                onSelect: _this3.handleSelect
              });
            })
          )
        );
      }
    }
  ]);

  return LibraryComponent;
})(_react2.default.Component);

LibraryComponent.propTypes = {
  data: _propTypes2.default.arrayOf(
    /* eslint-disable react/no-unused-prop-types, lines-around-comment */
    // An item in the library
    _propTypes2.default.shape({
      // @todo remove md5/rawURL prop from library, refactor to use storage
      md5: _propTypes2.default.string,
      name: _propTypes2.default.string.isRequired,
      rawURL: _propTypes2.default.string
    })
    /* eslint-enable react/no-unused-prop-types, lines-around-comment */
  ),
  onItemMouseEnter: _propTypes2.default.func,
  onItemMouseLeave: _propTypes2.default.func,
  onItemSelected: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  title: _propTypes2.default.string.isRequired
};

exports.default = LibraryComponent;