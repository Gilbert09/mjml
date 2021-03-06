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
 * Displays an image to your email. It is mostly similar to the HTML img tag
 */
var Image = (_dec = (0, _MJMLColumnElement2.default)({
  tagName: 'mj-image',
  attributes: {
    'height': 'auto',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px',
    'align': 'center',
    'alt': '',
    'border': 'none',
    'href': '',
    'src': ''
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'getContentWidth',
    value: function getContentWidth() {
      var mjAttribute = this.props.mjAttribute;

      var width = _lodash2.default.min([parseInt(mjAttribute('width')), parseInt(mjAttribute('parentWidth'))]);
      var paddingRight = parseInt(mjAttribute('padding-left')) || 0;
      var paddingLeft = parseInt(mjAttribute('padding-right')) || 0;
      var widthOverflow = paddingLeft + paddingRight + width - parseInt(mjAttribute('parentWidth'));

      return widthOverflow > 0 ? width - widthOverflow : width;
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        img: {
          border: mjAttribute('border'),
          maxWidth: this.getContentWidth(),
          height: mjAttribute('height')
        }
      });
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var mjAttribute = this.props.mjAttribute;


      var mcEdit = mjAttribute('mc-edit');

      var img = _react2.default.createElement('img', {
        alt: mjAttribute('alt'),
        border: '0',
        src: mjAttribute('src'),
        style: this.styles.img,
        width: this.styles.img.maxWidth,
        height: this.styles.img.height,
        'data-mc-edit': mcEdit });

      if (mjAttribute('href') != '') {
        return _react2.default.createElement(
          'a',
          { href: mjAttribute('href') },
          img
        );
      } else {
        return img;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var mjAttribute = this.props.mjAttribute;


      this.styles = this.getStyles();

      var customClassName = mjAttribute('class') || "";

      return _react2.default.createElement(
        'table',
        {
          className: customClassName,
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
              null,
              this.renderImage()
            )
          )
        )
      );
    }
  }]);

  return Image;
}(_react.Component), _class2.baseStyles = {
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0'
  },
  img: {
    border: 'none',
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    width: "100%"
  }
}, _temp)) || _class);
exports.default = Image;
//# sourceMappingURL=Image.js.map