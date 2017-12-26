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

var _ShowAWhile = require('./ShowAWhile');

var _ShowAWhile2 = _interopRequireDefault(_ShowAWhile);

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
      Component = _ref.component,
      render = _ref.render,
      children = _ref.children,
      duration = _ref.duration,
      _ref$unmountWhenNotMa = _ref.unmountWhenNotMatch,
      unmountWhenNotMatch = _ref$unmountWhenNotMa === undefined ? false : _ref$unmountWhenNotMa,
      props = _objectWithoutProperties(_ref, ['className', 'component', 'render', 'children', 'duration', 'unmountWhenNotMatch']);

  var sub = function sub() {
    return children ? _react2.default.createElement(_reactRouterDom.Route, _extends({ children: children }, props)) : _react2.default.createElement(_reactRouterDom.Route, _extends({
      children: function children(props) {
        if (props.history.action === 'POP' && !props.match) {
          return null;
        }
        if (render) {
          return _react2.default.createElement(_ShowAWhile2.default, { component: render(props), duration: !props.match && duration, unmountWhenNotMatch: unmountWhenNotMatch });
        }
        if (Component) {
          return _react2.default.createElement(_ShowAWhile2.default, { component: _react2.default.createElement(Component, props), duration: !props.match && duration, unmountWhenNotMatch: unmountWhenNotMatch });
        }
        return null;
      }
    }, props));
  };
  return _react2.default.createElement(
    'div',
    { className: className },
    sub()
  );
};
var getPage = function getPage(aoPath, index) {
  return (aoPath[index] || {}).pathname || aoPath[0].pathname;
};

var getChildrenData = function getChildrenData(children) {
  var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  _react2.default.Children.forEach(children, function (_ref2) {
    var props = _ref2.props,
        type = _ref2.type;

    if (props.children) {
      getChildrenData(props.children, host);
    }

    if (!props.pathname) return;

    if (type() === 'Tab') {
      host[props.pathname] = _extends({}, host[props.pathname], {
        pathname: props.pathname,
        tabName: props.desc
      });
    } else if (type() === 'Content') {
      host[props.pathname] = _extends({}, host[props.pathname], props);
    }
  });
  return Object.keys(host).map(function (pathname) {
    return host[pathname];
  });
};

var Tab = exports.Tab = function Tab() {
  return 'Tab';
};
var Content = exports.Content = function Content() {
  return 'Content';
};

var style = {
  slideContainer: {
    height: '100%'
  },
  slideStyle: {
    height: '100%'
  }
};
var RouteInTheTabContents = function RouteInTheTabContents(_ref3) {
  var _ref3$basePath = _ref3.basePath,
      basePath = _ref3$basePath === undefined ? '' : _ref3$basePath,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === undefined ? 350 : _ref3$duration,
      _ref3$easeFunction = _ref3.easeFunction,
      easeFunction = _ref3$easeFunction === undefined ? 'cubic-bezier(0.15, 0.3, 0.25, 1)' : _ref3$easeFunction,
      _ref3$delay = _ref3.delay,
      delay = _ref3$delay === undefined ? 0 : _ref3$delay,
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
              springConfig: {
                duration: duration + 'ms',
                easeFunction: easeFunction,
                delay: delay + 'ms'
              },
              style: style.slideContainer,
              slideStyle: style.slideStyle,
              index: getIndex(aoPath, page) || 0,
              onChangeIndex: function onChangeIndex(index) {
                return history.replace(basePath + '/' + getPage(aoPath, index));
              }
            },
            aoPath.map(function (_ref5, key) {
              var pathname = _ref5.pathname,
                  itemClassName = _ref5.className,
                  itemProps = _objectWithoutProperties(_ref5, ['pathname', 'className']);

              return _react2.default.createElement(RouteInTheBox, _extends({
                path: basePath + '/' + pathname,
                className: (className.content || '') + ' ' + (itemClassName || ''),
                exact: true,
                duration: duration,
                key: key
              }, itemProps));
            })
          )
        )
      );
    }
  });
};
exports.RouteInTheTabContents = RouteInTheTabContents;