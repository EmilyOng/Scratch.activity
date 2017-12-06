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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactModal = require("react-modal");

var _reactModal2 = _interopRequireDefault(_reactModal);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _closeButton = require("../close-button/close-button.jsx");

var _closeButton2 = _interopRequireDefault(_closeButton);

var _filter = require("../filter/filter.jsx");

var _filter2 = _interopRequireDefault(_filter);

var _modal = require("./modal.css");

var _modal2 = _interopRequireDefault(_modal);

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

var ModalComponent = (function(_React$Component) {
  _inherits(ModalComponent, _React$Component);

  function ModalComponent() {
    _classCallCheck(this, ModalComponent);

    return _possibleConstructorReturn(
      this,
      (ModalComponent.__proto__ || Object.getPrototypeOf(ModalComponent))
        .apply(this, arguments)
    );
  }

  _createClass(ModalComponent, [
    {
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: true,
            className: (0, _classnames2.default)(
              _modal2.default.modalContent,
              this.props.className
            ),
            contentLabel: this.props.contentLabel,
            overlayClassName: _modal2.default.modalOverlay,
            ref: function ref(m) {
              return (_this2.modal = m);
            },
            onRequestClose: this.props.onRequestClose
          },
          _react2.default.createElement(
            _box2.default,
            {
              direction: "column",
              grow: 1
            },
            _react2.default.createElement(
              "div",
              { className: _modal2.default.header },
              _react2.default.createElement(
                "div",
                {
                  className: (0, _classnames2.default)(
                    _modal2.default.headerItem,
                    _modal2.default.headerItemFilter
                  )
                },
                this.props.onFilterChange
                  ? _react2.default.createElement(_filter2.default, {
                      filterQuery: this.props.filterQuery,
                      onChange: this.props.onFilterChange,
                      onClear: this.props.onFilterClear
                    })
                  : null
              ),
              _react2.default.createElement(
                "div",
                {
                  className: (0, _classnames2.default)(
                    _modal2.default.headerItem,
                    _modal2.default.headerItemTitle
                  )
                },
                this.props.contentLabel
              ),
              _react2.default.createElement(
                "div",
                {
                  className: (0, _classnames2.default)(
                    _modal2.default.headerItem,
                    _modal2.default.headerItemClose
                  )
                },
                _react2.default.createElement(_closeButton2.default, {
                  size: _closeButton2.default.SIZE_LARGE,
                  onClick: this.props.onRequestClose
                })
              )
            ),
            this.props.children
          )
        );
      }
    }
  ]);

  return ModalComponent;
})(_react2.default.Component);

ModalComponent.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string.isRequired,
  filterQuery: _propTypes2.default.string,
  onFilterChange: _propTypes2.default.func,
  onFilterClear: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func
};

exports.default = ModalComponent;