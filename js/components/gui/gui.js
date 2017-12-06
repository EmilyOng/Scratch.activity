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

var _reactTabs = require("react-tabs");

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _reactTabs2 = require("react-tabs/style/react-tabs.css");

var _reactTabs3 = _interopRequireDefault(_reactTabs2);

var _scratchVm = require("scratch-vm");

var _scratchVm2 = _interopRequireDefault(_scratchVm);

var _blocks = require("../../containers/blocks.jsx");

var _blocks2 = _interopRequireDefault(_blocks);

var _costumeTab = require("../../containers/costume-tab.jsx");

var _costumeTab2 = _interopRequireDefault(_costumeTab);

var _controls = require("../../containers/controls.jsx");

var _controls2 = _interopRequireDefault(_controls);

var _targetPane = require("../../containers/target-pane.jsx");

var _targetPane2 = _interopRequireDefault(_targetPane);

var _soundTab = require("../../containers/sound-tab.jsx");

var _soundTab2 = _interopRequireDefault(_soundTab);

var _stage = require("../../containers/stage.jsx");

var _stage2 = _interopRequireDefault(_stage);

var _reactIntl = require("react-intl");

var _box = require("../box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _iconButton = require("../icon-button/icon-button.jsx");

var _iconButton2 = _interopRequireDefault(_iconButton);

var _menuBar = require("../menu-bar/menu-bar.jsx");

var _menuBar2 = _interopRequireDefault(_menuBar);

var _layoutConstants = require("../../lib/layout-constants.js");

var _layoutConstants2 = _interopRequireDefault(_layoutConstants);

var _gui = require("./gui.css");

var _gui2 = _interopRequireDefault(_gui);

var _iconExtensions = require("./icon--extensions.svg");

var _iconExtensions2 = _interopRequireDefault(_iconExtensions);

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

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var addExtensionMessage = _react2.default.createElement(
  _reactIntl.FormattedMessage,
  {
    defaultMessage: "Extensions",
    description: "Button to add an extension in the target pane",
    id: "gui.gui.addExtension"
  }
);

var GUIComponent = function GUIComponent(props) {
  var basePath = props.basePath,
    children = props.children,
    enableExtensions = props.enableExtensions,
    vm = props.vm,
    onExtensionButtonClick = props.onExtensionButtonClick,
    onTabSelect = props.onTabSelect,
    tabIndex = props.tabIndex,
    componentProps = _objectWithoutProperties(props, [
      "basePath",
      "children",
      "enableExtensions",
      "vm",
      "onExtensionButtonClick",
      "onTabSelect",
      "tabIndex"
    ]);

  if (children) {
    return _react2.default.createElement(
      _box2.default,
      componentProps,
      children
    );
  }

  var tabClassNames = {
    tabs: _gui2.default.tabs,
    tab: (0, _classnames2.default)(
      _reactTabs3.default.reactTabsTab,
      _gui2.default.tab
    ),
    tabList: (0, _classnames2.default)(
      _reactTabs3.default.reactTabsTabList,
      _gui2.default.tabList
    ),
    tabPanel: (0, _classnames2.default)(
      _reactTabs3.default.reactTabsTabPanel,
      _gui2.default.tabPanel
    ),
    tabPanelSelected: (0, _classnames2.default)(
      _reactTabs3.default.reactTabsTabPanelSelected,
      _gui2.default.isSelected
    ),
    tabSelected: (0, _classnames2.default)(
      _reactTabs3.default.reactTabsTabSelected,
      _gui2.default.isSelected
    )
  };

  return _react2.default.createElement(
    _box2.default,
    _extends(
      {
        className: _gui2.default.pageWrapper
      },
      componentProps
    ),
    _react2.default.createElement(_menuBar2.default, null),
    _react2.default.createElement(
      _box2.default,
      { className: _gui2.default.bodyWrapper },
      _react2.default.createElement(
        _box2.default,
        { className: _gui2.default.flexWrapper },
        _react2.default.createElement(
          _box2.default,
          { className: _gui2.default.editorWrapper },
          _react2.default.createElement(
            _reactTabs.Tabs,
            {
              className: tabClassNames.tabs,
              forceRenderTabPanel: true, // eslint-disable-line react/jsx-boolean-value
              selectedTabClassName: tabClassNames.tabSelected,
              selectedTabPanelClassName: tabClassNames.tabPanelSelected,
              onSelect: onTabSelect
            },
            _react2.default.createElement(
              _reactTabs.TabList,
              { className: tabClassNames.tabList },
              _react2.default.createElement(
                _reactTabs.Tab,
                { className: tabClassNames.tab },
                "Blocks"
              ),
              _react2.default.createElement(
                _reactTabs.Tab,
                { className: tabClassNames.tab },
                "Costumes"
              ),
              _react2.default.createElement(
                _reactTabs.Tab,
                { className: tabClassNames.tab },
                "Sounds"
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              { className: tabClassNames.tabPanel },
              _react2.default.createElement(
                _box2.default,
                { className: _gui2.default.blocksWrapper },
                _react2.default.createElement(_blocks2.default, {
                  grow: 1,
                  isVisible: tabIndex === 0, // Blocks tab
                  options: {
                    media: basePath + "static/blocks-media/"
                  },
                  vm: vm
                })
              ),
              _react2.default.createElement(
                _box2.default,
                { className: _gui2.default.extensionButtonContainer },
                _react2.default.createElement(_iconButton2.default, {
                  className: (0, _classnames2.default)(
                    _gui2.default.extensionButton,
                    _defineProperty({}, _gui2.default.hidden, !enableExtensions)
                  ),
                  img: _iconExtensions2.default,
                  title: addExtensionMessage,
                  onClick: onExtensionButtonClick
                })
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              { className: tabClassNames.tabPanel },
              tabIndex === 1
                ? _react2.default.createElement(_costumeTab2.default, {
                    vm: vm
                  })
                : null
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              { className: tabClassNames.tabPanel },
              tabIndex === 2
                ? _react2.default.createElement(_soundTab2.default, { vm: vm })
                : null
            )
          )
        ),
        _react2.default.createElement(
          _box2.default,
          { className: _gui2.default.stageAndTargetWrapper },
          _react2.default.createElement(
            _box2.default,
            { className: _gui2.default.stageMenuWrapper },
            _react2.default.createElement(_controls2.default, { vm: vm })
          ),
          _react2.default.createElement(
            _box2.default,
            { className: _gui2.default.stageWrapper },
            _react2.default.createElement(
              _reactResponsive2.default,
              { minWidth: _layoutConstants2.default.fullSizeMinWidth },
              function(isFullSize) {
                return _react2.default.createElement(_stage2.default, {
                  height: isFullSize
                    ? _layoutConstants2.default.fullStageHeight
                    : _layoutConstants2.default.smallerStageHeight,
                  shrink: 0,
                  vm: vm,
                  width: isFullSize
                    ? _layoutConstants2.default.fullStageWidth
                    : _layoutConstants2.default.smallerStageWidth
                });
              }
            )
          ),
          _react2.default.createElement(
            _box2.default,
            { className: _gui2.default.targetWrapper },
            _react2.default.createElement(_targetPane2.default, {
              vm: vm
            })
          )
        )
      )
    )
  );
};
GUIComponent.propTypes = {
  basePath: _propTypes2.default.string,
  children: _propTypes2.default.node,
  enableExtensions: _propTypes2.default.bool,
  onExtensionButtonClick: _propTypes2.default.func,
  onTabSelect: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number,
  vm: _propTypes2.default.instanceOf(_scratchVm2.default).isRequired
};
GUIComponent.defaultProps = {
  basePath: "./"
};
exports.default = GUIComponent;