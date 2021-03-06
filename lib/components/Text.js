'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _MJMLColumnElement = require('./decorators/MJMLColumnElement');

var _MJMLColumnElement2 = _interopRequireDefault(_MJMLColumnElement);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This tag allows you to display the most basic kind of text in your email
 */
var Text = (_dec = (0, _MJMLColumnElement2.default)({
  tagName: 'mj-text',
  content: '',
  attributes: {
    'align': 'left',
    'color': '#000000',
    'font-family': 'Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px'
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props;
      var mjAttribute = _props.mjAttribute;
      var color = _props.color;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        div: {
          color: mjAttribute('locked') ? color : mjAttribute('color'),
          fontFamily: mjAttribute('font-family'),
          fontSize: mjAttribute('font-size'),
          fontStyle: mjAttribute('font-style'),
          fontWeight: mjAttribute('font-weight'),
          lineHeight: mjAttribute('line-height'),
          letterSpacing: mjAttribute('letter-spacing'),
          textDecoration: mjAttribute('text-decoration'),
          textAlign: mjAttribute('text-align'),
          textTransform: mjAttribute('text-transform'),
          border: mjAttribute('border')
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var mjContent = _props2.mjContent;
      var mjAttribute = _props2.mjAttribute;


      this.styles = this.getStyles();

      var customClassName = mjAttribute('class');

      if (!customClassName) {
        customClassName = "mj-content";
      } else {
        customClassName = customClassName + " mj-content";
      }

      var mcEdit = mjAttribute('mc-edit');

      return _react2.default.createElement('div', {
        'data-mc-edit': mcEdit,
        className: customClassName,
        dangerouslySetInnerHTML: { __html: mjContent() },
        style: this.styles.div });
    }
  }]);

  return Text;
}(_react.Component), _class2.baseStyles = {
  div: {
    cursor: 'auto'
  }
}, _temp)) || _class);
exports.default = Text;
//# sourceMappingURL=Text.js.map