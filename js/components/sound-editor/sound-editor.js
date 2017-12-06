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

var _reactIntl = require("react-intl");

var _waveform = require("../waveform/waveform.jsx");

var _waveform2 = _interopRequireDefault(_waveform);

var _label = require("../forms/label.jsx");

var _label2 = _interopRequireDefault(_label);

var _input = require("../forms/input.jsx");

var _input2 = _interopRequireDefault(_input);

var _bufferedInputHoc = require("../forms/buffered-input-hoc.jsx");

var _bufferedInputHoc2 = _interopRequireDefault(_bufferedInputHoc);

var _audioTrimmer = require("../../containers/audio-trimmer.jsx");

var _audioTrimmer2 = _interopRequireDefault(_audioTrimmer);

var _iconButton = require("../icon-button/icon-button.jsx");

var _iconButton2 = _interopRequireDefault(_iconButton);

var _soundEditor = require("./sound-editor.css");

var _soundEditor2 = _interopRequireDefault(_soundEditor);

var _iconPlay = require("../record-modal/icon--play.svg");

var _iconPlay2 = _interopRequireDefault(_iconPlay);

var _iconStopPlayback = require("../record-modal/icon--stop-playback.svg");

var _iconStopPlayback2 = _interopRequireDefault(_iconStopPlayback);

var _iconTrim = require("./icon--trim.svg");

var _iconTrim2 = _interopRequireDefault(_iconTrim);

var _iconRedo = require("./icon--redo.svg");

var _iconRedo2 = _interopRequireDefault(_iconRedo);

var _iconUndo = require("./icon--undo.svg");

var _iconUndo2 = _interopRequireDefault(_iconUndo);

var _iconEcho = require("./icon--echo.svg");

var _iconEcho2 = _interopRequireDefault(_iconEcho);

var _iconHigher = require("./icon--higher.svg");

var _iconHigher2 = _interopRequireDefault(_iconHigher);

var _iconLower = require("./icon--lower.svg");

var _iconLower2 = _interopRequireDefault(_iconLower);

var _iconLouder = require("./icon--louder.svg");

var _iconLouder2 = _interopRequireDefault(_iconLouder);

var _iconSofter = require("./icon--softer.svg");

var _iconSofter2 = _interopRequireDefault(_iconSofter);

var _iconRobot = require("./icon--robot.svg");

var _iconRobot2 = _interopRequireDefault(_iconRobot);

var _iconReverse = require("./icon--reverse.svg");

var _iconReverse2 = _interopRequireDefault(_iconReverse);

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

var BufferedInput = (0, _bufferedInputHoc2.default)(_input2.default);

var messages = (0, _reactIntl.defineMessages)({
  sound: {
    id: "gui.soundEditor.sound",
    description: "Label for the name of the sound",
    defaultMessage: "Sound"
  },
  play: {
    id: "gui.soundEditor.play",
    description: "Title of the button to start playing the sound",
    defaultMessage: "Play"
  },
  stop: {
    id: "gui.soundEditor.stop",
    description: "Title of the button to stop the sound",
    defaultMessage: "Stop"
  },
  trim: {
    id: "gui.soundEditor.trim",
    description: "Title of the button to start trimminging the sound",
    defaultMessage: "Trim"
  },
  save: {
    id: "gui.soundEditor.save",
    description: "Title of the button to save trimmed sound",
    defaultMessage: "Save"
  },
  undo: {
    id: "gui.soundEditor.undo",
    description: "Title of the button to undo",
    defaultMessage: "Undo"
  },
  redo: {
    id: "gui.soundEditor.redo",
    description: "Title of the button to redo",
    defaultMessage: "Redo"
  },
  faster: {
    id: "gui.soundEditor.faster",
    description: "Title of the button to apply the faster effect",
    defaultMessage: "Faster"
  },
  slower: {
    id: "gui.soundEditor.slower",
    description: "Title of the button to apply the slower effect",
    defaultMessage: "Slower"
  },
  echo: {
    id: "gui.soundEditor.echo",
    description: "Title of the button to apply the echo effect",
    defaultMessage: "Echo"
  },
  robot: {
    id: "gui.soundEditor.robot",
    description: "Title of the button to apply the robot effect",
    defaultMessage: "Robot"
  },
  louder: {
    id: "gui.soundEditor.louder",
    description: "Title of the button to apply the louder effect",
    defaultMessage: "Louder"
  },
  softer: {
    id: "gui.soundEditor.softer",
    description: "Title of the button to apply thr.softer effect",
    defaultMessage: "Softer"
  },
  reverse: {
    id: "gui.soundEditor.reverse",
    description: "Title of the button to apply the reverse effect",
    defaultMessage: "Reverse"
  }
});

var SoundEditor = function SoundEditor(props) {
  return _react2.default.createElement(
    "div",
    { className: _soundEditor2.default.editorContainer },
    _react2.default.createElement(
      "div",
      { className: _soundEditor2.default.row },
      _react2.default.createElement(
        "div",
        { className: _soundEditor2.default.inputGroup },
        props.playhead
          ? _react2.default.createElement(
              "button",
              {
                className: (0, _classnames2.default)(
                  _soundEditor2.default.button,
                  _soundEditor2.default.stopButtonn
                ),
                title: props.intl.formatMessage(messages.stop),
                onClick: props.onStop
              },
              _react2.default.createElement("img", {
                src: _iconStopPlayback2.default
              })
            )
          : _react2.default.createElement(
              "button",
              {
                className: (0, _classnames2.default)(
                  _soundEditor2.default.button,
                  _soundEditor2.default.playButton
                ),
                title: props.intl.formatMessage(messages.play),
                onClick: props.onPlay
              },
              _react2.default.createElement("img", { src: _iconPlay2.default })
            )
      ),
      _react2.default.createElement(
        "div",
        { className: _soundEditor2.default.inputGroup },
        _react2.default.createElement(
          _label2.default,
          { text: props.intl.formatMessage(messages.sound) },
          _react2.default.createElement(BufferedInput, {
            tabIndex: "1",
            type: "text",
            value: props.name,
            onSubmit: props.onChangeName
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: _soundEditor2.default.inputGroupRight },
        _react2.default.createElement(
          "button",
          {
            className: (0, _classnames2.default)(
              _soundEditor2.default.button,
              _soundEditor2.default.trimButton,
              _defineProperty(
                {},
                _soundEditor2.default.trimButtonActive,
                props.trimStart !== null
              )
            ),
            title:
              props.trimStart === null
                ? props.intl.formatMessage(messages.trim)
                : props.intl.formatMessage(messages.save),
            onClick: props.onActivateTrim
          },
          _react2.default.createElement("img", { src: _iconTrim2.default }),
          props.trimStart === null
            ? _react2.default.createElement(
                _reactIntl.FormattedMessage,
                messages.trim
              )
            : _react2.default.createElement(
                _reactIntl.FormattedMessage,
                messages.save
              )
        ),
        _react2.default.createElement(
          "div",
          { className: _soundEditor2.default.buttonGroup },
          _react2.default.createElement(
            "button",
            {
              className: _soundEditor2.default.button,
              disabled: !props.canUndo,
              title: props.intl.formatMessage(messages.undo),
              onClick: props.onUndo
            },
            _react2.default.createElement("img", { src: _iconUndo2.default })
          ),
          _react2.default.createElement(
            "button",
            {
              className: _soundEditor2.default.button,
              disabled: !props.canRedo,
              title: props.intl.formatMessage(messages.redo),
              onClick: props.onRedo
            },
            _react2.default.createElement("img", { src: _iconRedo2.default })
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: _soundEditor2.default.row },
      _react2.default.createElement(
        "div",
        { className: _soundEditor2.default.waveformContainer },
        _react2.default.createElement(_waveform2.default, {
          data: props.chunkLevels,
          height: 180,
          width: 600
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
      "div",
      { className: _soundEditor2.default.row },
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconHigher2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.faster
        ),
        onClick: props.onFaster
      }),
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconLower2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.slower
        ),
        onClick: props.onSlower
      }),
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconEcho2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.echo
        ),
        onClick: props.onEcho
      }),
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconRobot2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.robot
        ),
        onClick: props.onRobot
      }),
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconLouder2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.louder
        ),
        onClick: props.onLouder
      }),
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconSofter2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.softer
        ),
        onClick: props.onSofter
      }),
      _react2.default.createElement(_iconButton2.default, {
        className: _soundEditor2.default.effectButton,
        img: _iconReverse2.default,
        title: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.reverse
        ),
        onClick: props.onReverse
      })
    )
  );
};

SoundEditor.propTypes = {
  canRedo: _propTypes2.default.bool.isRequired,
  canUndo: _propTypes2.default.bool.isRequired,
  chunkLevels: _propTypes2.default.arrayOf(_propTypes2.default.number)
    .isRequired,
  intl: _reactIntl.intlShape,
  name: _propTypes2.default.string.isRequired,
  onActivateTrim: _propTypes2.default.func,
  onChangeName: _propTypes2.default.func.isRequired,
  onEcho: _propTypes2.default.func.isRequired,
  onFaster: _propTypes2.default.func.isRequired,
  onLouder: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onRedo: _propTypes2.default.func.isRequired,
  onReverse: _propTypes2.default.func.isRequired,
  onRobot: _propTypes2.default.func.isRequired,
  onSetTrimEnd: _propTypes2.default.func,
  onSetTrimStart: _propTypes2.default.func,
  onSlower: _propTypes2.default.func.isRequired,
  onSofter: _propTypes2.default.func.isRequired,
  onStop: _propTypes2.default.func.isRequired,
  onUndo: _propTypes2.default.func.isRequired,
  playhead: _propTypes2.default.number,
  trimEnd: _propTypes2.default.number,
  trimStart: _propTypes2.default.number
};

exports.default = (0, _reactIntl.injectIntl)(SoundEditor);