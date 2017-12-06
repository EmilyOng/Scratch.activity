"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _monitor = require("../../containers/monitor.jsx");

var _monitor2 = _interopRequireDefault(_monitor);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require("immutable");

var _monitorList = require("./monitor-list.css");

var _monitorList2 = _interopRequireDefault(_monitorList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MonitorList = function MonitorList(props) {
  return _react2.default.createElement(
    _box2.default,
    {
      className: _monitorList2.default.monitorList
    },
    props.monitors.valueSeq().map(function(monitorData, index) {
      return _react2.default.createElement(_monitor2.default, {
        id: monitorData.id,
        index: index,
        key: monitorData.id,
        opcode: monitorData.opcode,
        params: monitorData.params,
        spriteName: monitorData.spriteName,
        value: monitorData.value,
        onDragEnd: props.onMonitorChange
      });
    })
  );
};

MonitorList.propTypes = {
  monitors: _propTypes2.default.instanceOf(_immutable.OrderedMap),
  onMonitorChange: _propTypes2.default.func.isRequired
};

exports.default = MonitorList;