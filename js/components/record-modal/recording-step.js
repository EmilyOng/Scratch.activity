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

var _meter = require("../meter/meter.jsx");

var _meter2 = _interopRequireDefault(_meter);

var _waveform = require("../waveform/waveform.jsx");

var _waveform2 = _interopRequireDefault(_waveform);

var _recordModal = require("./record-modal.css");

var _recordModal2 = _interopRequireDefault(_recordModal);

var _iconStopRecording = require("./icon--stop-recording.svg");

var _iconStopRecording2 = _interopRequireDefault(_iconStopRecording);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RecordingStep = function RecordingStep(props) {
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
          level: props.level,
          width: 20
        })
      ),
      _react2.default.createElement(
        _box2.default,
        { className: _recordModal2.default.waveformContainer },
        props.levels
          ? _react2.default.createElement(_waveform2.default, {
              data: props.levels,
              height: 150,
              level: 0,
              width: 440
            })
          : _react2.default.createElement(
              "span",
              { className: _recordModal2.default.helpText },
              props.listening
                ? "Begin recording by clicking the button below"
                : "\u2196\uFE0F \xA0We need your permission to use your microphone"
            )
      )
    ),
    _react2.default.createElement(
      _box2.default,
      { className: _recordModal2.default.mainButtonRow },
      _react2.default.createElement(
        "button",
        {
          className: _recordModal2.default.mainButton,
          disabled: !props.listening,
          onClick: props.recording ? props.onStopRecording : props.onRecord
        },
        props.recording
          ? _react2.default.createElement("img", {
              src: _iconStopRecording2.default
            })
          : _react2.default.createElement(
              "svg",
              {
                className: _recordModal2.default.recordButton,
                height: "52",
                width: "52"
              },
              _react2.default.createElement("circle", {
                className: _recordModal2.default.recordButtonCircle,
                cx: "26",
                cy: "26",
                r: "25"
              }),
              _react2.default.createElement("circle", {
                className: _recordModal2.default.recordButtonCircleOutline,
                cx: "26",
                cy: "26",
                r: 27 + props.level * 5
              })
            ),
        _react2.default.createElement(
          "div",
          { className: _recordModal2.default.helpText },
          _react2.default.createElement(
            "span",
            { className: _recordModal2.default.recordingText },
            props.recording ? "Stop recording" : "Record"
          )
        )
      )
    )
  );
};

RecordingStep.propTypes = {
  level: _propTypes2.default.number,
  levels: _propTypes2.default.arrayOf(_propTypes2.default.number),
  listening: _propTypes2.default.bool,
  onRecord: _propTypes2.default.func.isRequired,
  onStopRecording: _propTypes2.default.func.isRequired,
  recording: _propTypes2.default.bool
};

exports.default = RecordingStep;