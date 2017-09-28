'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowAWhile = function (_React$Component) {
  _inherits(ShowAWhile, _React$Component);

  function ShowAWhile(props) {
    _classCallCheck(this, ShowAWhile);

    var _this = _possibleConstructorReturn(this, (ShowAWhile.__proto__ || Object.getPrototypeOf(ShowAWhile)).call(this, props));

    _this.state = {
      timeout: false
    };
    return _this;
  }

  _createClass(ShowAWhile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var duration = this.props.duration;
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
        this.timeoutID = null;
      }
    })
  }, {
    key: 'setTimeoutDisappear',
    value: function setTimeoutDisappear(duration) {
      var _this2 = this;

      this.timeoutID = setTimeout(function () {
        _this2.timeoutID = null;
        _this2.setState({
          timeout: true
        });
      }, duration);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var duration = _ref.duration;

      if (duration === this.props.duration) return;

      if (duration) {
        this.clearTimeout();
        this.setTimeoutDisappear(duration);
      } else {
        this.clearTimeout();
        this.setState({
          timeout: false
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timeoutID && clearTimeout(this.timeoutID);
    }
  }, {
    key: 'render',
    value: function render() {
      var component = this.props.component;

      if (!component) return null;
      console.log(this.state.timeout);
      return !this.state.timeout ? component : null;
    }
  }]);

  return ShowAWhile;
}(_react2.default.Component);

exports.default = ShowAWhile;