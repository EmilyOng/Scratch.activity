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

var _waveform = require("../waveform/waveform.jsx");

var _waveform2 = _interopRequireDefault(_waveform);

var _meter = require("../meter/meter.jsx");

var _meter2 = _interopRequireDefault(_meter);

var _audioTrimmer = require("../../containers/audio-trimmer.jsx");

var _audioTrimmer2 = _interopRequireDefault(_audioTrimmer);

var _recordModal = require("./record-modal.css");

var _recordModal2 = _interopRequireDefault(_recordModal);

var _iconBack = require("./icon--back.svg");

var _iconBack2 = _interopRequireDefault(_iconBack);

var _iconStopPlayback = require("./icon--stop-playback.svg");

var _iconStopPlayback2 = _interopRequireDefault(_iconStopPlayback);

var _iconPlay = require("./icon--play.svg");

var _iconPlay2 = _interopRequireDefault(_iconPlay);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PlaybackStep = function PlaybackStep(props) {
  return _react2.default.createElement(
    _box2.default,
    null,
    _react2.default.createElement(
      _box2.default,
      { className: _recordModal2.default.visualizationContainer },
      _react2.default.createElement(
        _box2.default,
        { className: _recordModal2.default.meterContainer },
        _react2.default.createElement(_meter2.default, {
          height: 172,
          level: 0,
          width: 20
        })
      ),
      _react2.default.createElement(
        _box2.default,
        { className: _recordModal2.default.waveformContainer },
        _react2.default.createElement(_waveform2.default, {
          data: props.levels,
          height: 150,
          level: 0,
          width: 480
        }),
        _react2.default.createElement(_audioTrimmer2.default, {
          playhead: props.playhead,
          trimEnd: props.trimEnd,
          trimStart: props.trimStart,
          onSetTrimEnd: props.onSetTrimEnd,
          onSetTrimStart: props.onSetTrimStart
        })
      )
    ),
    _react2.default.createElement(
      _box2.default,
      { className: _recordModal2.default.mainButtonRow },
      _react2.default.createElement(
        "button",
        {
          className: _recordModal2.default.mainButton,
          onClick: props.playing ? props.onStopPlaying : props.onPlay
        },
        _react2.default.createElement("img", {
          src: props.playing ? _iconStopPlayback2.default : _iconPlay2.default
        }),
        _react2.default.createElement(
          "div",
          { className: _recordModal2.default.helpText },
          _react2.default.createElement(
            "span",
            { className: _recordModal2.default.playingText },
            props.playing ? "Stop" : "Play"
          )
        )
      )
    ),
    _react2.default.createElement(
      _box2.default,
      { className: _recordModal2.default.buttonRow },
      _react2.default.createElement(
        "button",
        {
          className: _recordModal2.default.cancelButton,
          onClick: props.onBack
        },
        _react2.default.createElement("img", { src: _iconBack2.default }),
        " Re-record"
      ),
      _react2.default.createElement(
        "button",
        {
          className: _recordModal2.default.okButton,
          disabled: props.encoding,
          onClick: props.onSubmit
        },
        props.encoding ? "Loading..." : "Save"
      )
    )
  );
};

PlaybackStep.propTypes = {
  encoding: _propTypes2.default.bool.isRequired,
  levels: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  onBack: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onSetTrimEnd: _propTypes2.default.func.isRequired,
  onSetTrimStart: _propTypes2.default.func.isRequired,
  onStopPlaying: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  playhead: _propTypes2.default.number,
  playing: _propTypes2.default.bool.isRequired,
  trimEnd: _propTypes2.default.number.isRequired,
  trimStart: _propTypes2.default.number.isRequired
};

exports.default = PlaybackStep;