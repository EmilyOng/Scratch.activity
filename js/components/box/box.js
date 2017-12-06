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

var _reactStyleProptype = require("react-style-proptype");

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _box = require("./box.css");

var _box2 = _interopRequireDefault(_box);

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

var getRandomColor = (function() {
  // In "DEBUG" mode this is used to output a random background color for each
  // box. The function gives the same "random" set for each seed, allowing re-
  // renders of the same content to give the same random display.
  var random = (function(seed) {
    var mW = seed;
    var mZ = 987654321;
    var mask = 0xffffffff;
    return function() {
      mZ = (36969 * (mZ & 65535) + (mZ >> 16)) & mask;
      mW = (18000 * (mW & 65535) + (mW >> 16)) & mask;
      var result = ((mZ << 16) + mW) & mask;
      result /= 4294967296;
      return result + 1;
    };
  })(601);
  return function() {
    var r = Math.max(parseInt(random() * 100, 10) % 256, 1);
    var g = Math.max(parseInt(random() * 100, 10) % 256, 1);
    var b = Math.max(parseInt(random() * 100, 10) % 256, 1);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
})();

var Box = function Box(props) {
  var alignContent = props.alignContent,
    alignItems = props.alignItems,
    alignSelf = props.alignSelf,
    basis = props.basis,
    children = props.children,
    className = props.className,
    componentRef = props.componentRef,
    direction = props.direction,
    element = props.element,
    grow = props.grow,
    height = props.height,
    justifyContent = props.justifyContent,
    width = props.width,
    wrap = props.wrap,
    shrink = props.shrink,
    style = props.style,
    componentProps = _objectWithoutProperties(props, [
      "alignContent",
      "alignItems",
      "alignSelf",
      "basis",
      "children",
      "className",
      "componentRef",
      "direction",
      "element",
      "grow",
      "height",
      "justifyContent",
      "width",
      "wrap",
      "shrink",
      "style"
    ]);

  return _react2.default.createElement(
    element,
    _extends(
      {
        className: (0, _classnames2.default)(className, _box2.default.box),
        ref: componentRef,
        style: Object.assign(
          {
            alignContent: alignContent,
            alignItems: alignItems,
            alignSelf: alignSelf,
            flexBasis: basis,
            flexDirection: direction,
            flexGrow: grow,
            flexShrink: shrink,
            flexWrap: wrap,
            justifyContent: justifyContent,
            width: width,
            height: height
          },
          process.env.DEBUG
            ? {
                backgroundColor: getRandomColor(),
                outline: "1px solid black"
              }
            : {},
          style
        )
      },
      componentProps
    ),
    children
  );
};
Box.propTypes = {
  /** Defines how the browser distributes space between and around content items vertically within this box. */
  alignContent: _propTypes2.default.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "stretch"
  ]),
  /** Defines how the browser distributes space between and around flex items horizontally within this box. */
  alignItems: _propTypes2.default.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  /** Specifies how this box should be aligned inside of its container (requires the container to be flexable). */
  alignSelf: _propTypes2.default.oneOf([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  /** Specifies the initial length of this box */
  basis: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.oneOf(["auto"])
  ]),
  /** Specifies the the HTML nodes which will be child elements of this box. */
  children: _propTypes2.default.node,
  /** Specifies the class name that will be set on this box */
  className: _propTypes2.default.string,
  /**
     * A callback function whose first parameter is the underlying dom elements.
     * This call back will be executed immediately after the component is mounted or unmounted
     */
  componentRef: _propTypes2.default.func,
  /** https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  direction: _propTypes2.default.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  /** Specifies the type of HTML element of this box. Defaults to div. */
  element: _propTypes2.default.string,
  /** Specifies the flex grow factor of a flex item. */
  grow: _propTypes2.default.number,
  /** The height in pixels (if specified as a number) or a string if different units are required. */
  height: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string
  ]),
  /** https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content */
  justifyContent: _propTypes2.default.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around"
  ]),
  /** Specifies the flex shrink factor of a flex item. */
  shrink: _propTypes2.default.number,
  /** An object whose keys are css property names and whose values correspond the the css property. */
  style: _reactStyleProptype2.default,
  /** The width in pixels (if specified as a number) or a string if different units are required. */
  width: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string
  ]),
  /** How whitespace should wrap within this block. */
  wrap: _propTypes2.default.oneOf(["nowrap", "wrap", "wrap-reverse"])
};
Box.defaultProps = {
  element: "div",
  style: {}
};
exports.default = Box;