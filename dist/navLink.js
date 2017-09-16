'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var label = _ref.label,
      to = _ref.to,
      isExact = _ref.isExact,
      props = _objectWithoutProperties(_ref, ['label', 'to', 'isExact']);

  return _react2.default.createElement(_reactRouterDom.Route, {
    path: to,
    exact: isExact,
    children: function children(_ref2) {
      var match = _ref2.match;
      return match ? _react2.default.createElement(
        'li',
        { className: 'active' },
        _react2.default.createElement(
          'span',
          null,
          label
        )
      ) : _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          _extends({ to: to }, props),
          label
        )
      );
    }
  });
};