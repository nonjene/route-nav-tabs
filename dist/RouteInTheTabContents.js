'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteInTheTabContents = exports.Content = exports.Tab = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

var _navLink = require('./navLink');

var _navLink2 = _interopRequireDefault(_navLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @<RouteInTheTabContents/>
                                                                                                                                                                                                                              */

//import { matchPath } from 'react-router';


var getIndex = function getIndex(aoPath, page) {
  return aoPath.reduce(function (rtn, item, i) {
    if (item.pathname === page) return i;else return rtn;
  }, 0);
};

var RouteInTheBox = function RouteInTheBox(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(_reactRouterDom.Route, props)
  );
};
var getPage = function getPage(aoPath, index) {
  return (aoPath[index] || {}).pathname || aoPath[0].pathname;
};

var getChildrenData = function getChildrenData(children) {
  var data = {};

  _react2.default.Children.forEach(children, function (_ref2) {
    var props = _ref2.props,
        type = _ref2.type;

    if (!props.pathname) return;

    if (type.name === 'Tab') {
      data[props.pathname] = _extends({}, data[props.pathname], {
        pathname: props.pathname,
        tabName: props.desc
      });
    } else if (type.name === 'Content') {
      data[props.pathname] = _extends({}, data[props.pathname], props);
    }
  });
  return Object.keys(data).map(function (pathname) {
    return data[pathname];
  });
};

var Tab = exports.Tab = function Tab() {};
var Content = exports.Content = function Content() {};

var RouteInTheTabContents = exports.RouteInTheTabContents = function RouteInTheTabContents(_ref3) {
  var _ref3$basePath = _ref3.basePath,
      basePath = _ref3$basePath === undefined ? '' : _ref3$basePath,
      _ref3$className = _ref3.className,
      className = _ref3$className === undefined ? {
    wrap: 'tab-contents',
    contentWrap: 'contents',
    content: 'content'
  } : _ref3$className,
      children = _ref3.children;

  var aoPath = getChildrenData(children);
  return _react2.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: basePath + '/:page',
    render: function render(_ref4) {
      var history = _ref4.history,
          page = _ref4.match.params.page;
      return _react2.default.createElement(
        'div',
        { className: className.wrap },
        _react2.default.createElement(
          'ul',
          null,
          aoPath.map(function (item, key) {
            return _react2.default.createElement(_navLink2.default, {
              to: basePath + '/' + item.pathname,
              label: item.tabName,
              isExact: true,
              replace: true,
              key: key
            });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: className.contentWrap },
          _react2.default.createElement(
            _reactSwipeableViews2.default,
            {
              style: { height: '100%' },
              index: getIndex(aoPath, page) || 0,
              onChangeIndex: function onChangeIndex(index) {
                return history.replace('/' + getPage(aoPath, index));
              }
            },
            aoPath.map(function (item, key) {
              return _react2.default.createElement(RouteInTheBox, {
                path: basePath + '/' + item.pathname
                /* maybe children is better */
                , component: item.component,
                className: (className.content || '') + ' ' + (item.className || ''),
                exact: true,
                key: key
              });
            })
          )
        )
      );
    }
  });
};