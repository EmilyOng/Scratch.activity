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

var _recordingStep = require("../../containers/recording-step.jsx");

var _recordingStep2 = _interopRequireDefault(_recordingStep);

var _playbackStep = require("../../containers/playback-step.jsx");

var _playbackStep2 = _interopRequireDefault(_playbackStep);

var _modal = require("../modal/modal.jsx");

var _modal2 = _interopRequireDefault(_modal);

var _recordModal = require("./record-modal.css");

var _recordModal2 = _interopRequireDefault(_recordModal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RecordModal = function RecordModal(props) {
  return _react2.default.createElement(
    _modal2.default,
    {
      className: _recordModal2.default.modalContent,
      contentLabel: "Record Sound",
      onRequestClose: props.onCancel
    },
    _react2.default.createElement(
      _box2.default,
      { className: _recordModal2.default.body },
      props.samples
        ? _react2.default.createElement(_playbackStep2.default, {
            encoding: props.encoding,
            levels: props.levels,
            playhead: props.playhead,
            playing: props.playing,
            sampleRate: props.sampleRate,
            samples: props.samples,
            trimEnd: props.trimEnd,
            trimStart: props.trimStart,
            onBack: props.onBack,
            onPlay: props.onPlay,
            onSetPlayhead: props.onSetPlayhead,
            onSetTrimEnd: props.onSetTrimEnd,
            onSetTrimStart: props.onSetTrimStart,
            onStopPlaying: props.onStopPlaying,
            onSubmit: props.onSubmit
          })
        : _react2.default.createElement(_recordingStep2.default, {
            recording: props.recording,
            onRecord: props.onRecord,
            onStopRecording: props.onStopRecording
          })
    )
  );
};

RecordModal.propTypes = {
  encoding: _propTypes2.default.bool.isRequired,
  levels: _propTypes2.default.arrayOf(_propTypes2.default.number),
  onBack: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onRecord: _propTypes2.default.func.isRequired,
  onSetPlayhead: _propTypes2.default.func.isRequired,
  onSetTrimEnd: _propTypes2.default.func.isRequired,
  onSetTrimStart: _propTypes2.default.func.isRequired,
  onStopPlaying: _propTypes2.default.func.isRequired,
  onStopRecording: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  playhead: _propTypes2.default.number,
  playing: _propTypes2.default.bool,
  recording: _propTypes2.default.bool,
  sampleRate: _propTypes2.default.number,
  samples: _propTypes2.default.instanceOf(Float32Array),
  trimEnd: _propTypes2.default.number.isRequired,
  trimStart: _propTypes2.default.number.isRequired
};

exports.default = RecordModal;