"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _audioTrimmer = require("./audio-trimmer.css");

var _audioTrimmer2 = _interopRequireDefault(_audioTrimmer);

var _iconHandle = require("./icon--handle.svg");

var _iconHandle2 = _interopRequireDefault(_iconHandle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AudioTrimmer = function AudioTrimmer(props) {
  return _react2.default.createElement(
    "div",
    {
      className: _audioTrimmer2.default.absolute,
      ref: props.containerRef
    },
    props.trimStart === null
      ? null
      : _react2.default.createElement(
          _box2.default,
          {
            className: (0, _classnames2.default)(
              _audioTrimmer2.default.absolute,
              _audioTrimmer2.default.trimBackground,
              _audioTrimmer2.default.startTrimBackground
            ),
            style: {
              width: 100 * props.trimStart + "%"
            },
            onMouseDown: props.onTrimStartMouseDown,
            onTouchStart: props.onTrimStartMouseDown
          },
          _react2.default.createElement(_box2.default, {
            className: (0, _classnames2.default)(
              _audioTrimmer2.default.absolute,
              _audioTrimmer2.default.trimBackgroundMask
            )
          }),
          _react2.default.createElement(
            _box2.default,
            {
              className: (0, _classnames2.default)(
                _audioTrimmer2.default.trimLine,
                _audioTrimmer2.default.startTrimLine
              )
            },
            _react2.default.createElement(
              _box2.default,
              {
                className: (0, _classnames2.default)(
                  _audioTrimmer2.default.trimHandle,
                  _audioTrimmer2.default.topTrimHandle,
                  _audioTrimmer2.default.startTrimHandle
                )
              },
              _react2.default.createElement("img", {
                src: _iconHandle2.default
              })
            ),
            _react2.default.createElement(
              _box2.default,
              {
                className: (0, _classnames2.default)(
                  _audioTrimmer2.default.trimHandle,
                  _audioTrimmer2.default.bottomTrimHandle,
                  _audioTrimmer2.default.startTrimHandle
                )
              },
              _react2.default.createElement("img", {
                src: _iconHandle2.default
              })
            )
          )
        ),
    props.playhead
      ? _react2.default.createElement(_box2.default, {
          className: (0, _classnames2.default)(
            _audioTrimmer2.default.trimLine,
            _audioTrimmer2.default.playhead
          ),
          style: {
            left: 100 * props.playhead + "%"
          }
        })
      : null,
    props.trimEnd === null
      ? null
      : _react2.default.createElement(
          _box2.default,
          {
            className: (0, _classnames2.default)(
              _audioTrimmer2.default.absolute,
              _audioTrimmer2.default.trimBackground,
              _audioTrimmer2.default.endTrimBackground
            ),
            style: {
              left: 100 * props.trimEnd + "%",
              width: 100 - 100 * props.trimEnd + "%"
            },
            onMouseDown: props.onTrimEndMouseDown,
            onTouchStart: props.onTrimEndMouseDown
          },
          _react2.default.createElement(_box2.default, {
            className: (0, _classnames2.default)(
              _audioTrimmer2.default.absolute,
              _audioTrimmer2.default.trimBackgroundMask
            )
          }),
          _react2.default.createElement(
            _box2.default,
            {
              className: (0, _classnames2.default)(
                _audioTrimmer2.default.trimLine,
                _audioTrimmer2.default.endTrimLine
              )
            },
            _react2.default.createElement(
              _box2.default,
              {
                className: (0, _classnames2.default)(
                  _audioTrimmer2.default.trimHandle,
                  _audioTrimmer2.default.topTrimHandle,
                  _audioTrimmer2.default.endTrimHandle
                )
              },
              _react2.default.createElement("img", {
                src: _iconHandle2.default
              })
            ),
            _react2.default.createElement(
              _box2.default,
              {
                className: (0, _classnames2.default)(
                  _audioTrimmer2.default.trimHandle,
                  _audioTrimmer2.default.bottomTrimHandle,
                  _audioTrimmer2.default.endTrimHandle
                )
              },
              _react2.default.createElement("img", {
                src: _iconHandle2.default
              })
            )
          )
        )
  );
};

AudioTrimmer.propTypes = {
  containerRef: _propTypes2.default.func,
  onTrimEndMouseDown: _propTypes2.default.func.isRequired,
  onTrimStartMouseDown: _propTypes2.default.func.isRequired,
  playhead: _propTypes2.default.number,
  trimEnd: _propTypes2.default.number,
  trimStart: _propTypes2.default.number
};

exports.default = AudioTrimmer;