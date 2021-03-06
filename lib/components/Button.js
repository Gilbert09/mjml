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
 * Displays a customizable button
 */
var Button = (_dec = (0, _MJMLColumnElement2.default)({
  tagName: 'mj-button',
  content: ' ',
  attributes: {
    'align': 'center',
    'background-color': '#414141',
    'border-radius': '3px',
    'border': 'none',
    'color': '#ffffff',
    'font-size': '13px',
    'font-weight': 'bold',
    'href': '',
    'padding': '15px 30px',
    'text-decoration': 'none',
    'vertical-align': 'middle'
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        td: {
          background: mjAttribute('background-color'),
          borderRadius: mjAttribute('border-radius'),
          color: mjAttribute('color'),
          fontStyle: mjAttribute('font-style'),
          cursor: "auto"
        },
        table: {
          backgroundColor: mjAttribute('container-background-color'),
          border: mjAttribute('border'),
          borderRadius: mjAttribute('border-radius'),
          width: mjAttribute('width')
        },
        a: {
          background: mjAttribute('background-color'),
          border: '1px solid ' + mjAttribute('background-color'),
          borderRadius: mjAttribute('border-radius'),
          color: mjAttribute('color'),
          fontFamily: mjAttribute('font-family'),
          fontSize: mjAttribute('font-size'),
          fontStyle: mjAttribute('font-style'),
          fontWeight: mjAttribute('font-weight'),
          padding: mjAttribute('padding'),
          textDecoration: mjAttribute('text-decoration'),
          textTransform: mjAttribute('text-transform'),
          lineHeight: mjAttribute('line-height'),
          letterSpacing: mjAttribute('letter-spacing')
        }
      });
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      var _props = this.props;
      var mjContent = _props.mjContent;
      var mjAttribute = _props.mjAttribute;


      var innerHtml = mjContent();

      if (mjAttribute('icon')) {
        innerHtml = "<i style=\"padding-right: 6px;\" class=\"fa fa-" + mjAttribute('icon') + "\"></i>" + innerHtml;
      }

      return _react2.default.createElement('a', {
        className: 'mj-content',
        dangerouslySetInnerHTML: { __html: innerHtml },
        href: mjAttribute('href'),
        style: this.styles.a,
        target: '_blank' });
    }
  }, {
    key: 'render',
    value: function render() {
      var mjAttribute = this.props.mjAttribute;


      this.styles = this.getStyles();

      var mcEdit = mjAttribute('mc-edit');

      return _react2.default.createElement(
        'table',
        {
          'data-mc-edit': mcEdit,
          border: '0',
          cellPadding: '0',
          cellSpacing: '0',
          'data-legacy-align': mjAttribute('align'),
          style: this.styles.table },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              {
                'data-legacy-align': 'center',
                'data-legacy-bgcolor': mjAttribute('background-color'),
                'data-legacy-valign': mjAttribute('vertical-align'),
                style: this.styles.td },
              this.renderButton()
            )
          )
        )
      );
    }
  }]);

  return Button;
}(_react.Component), _class2.baseStyles = {
  a: {
    display: 'block',
    textDecoration: 'none'
  }
}, _temp)) || _class);
exports.default = Button;
//# sourceMappingURL=Button.js.map