'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _MJMLElement = require('./decorators/MJMLElement');

var _MJMLElement2 = _interopRequireDefault(_MJMLElement);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mjAttribute = require('../helpers/mjAttribute');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the starting point of your email. It is a unique and mandatory component. It corresponds to the HTML <body> tag.
 */
var Body = (_dec = (0, _MJMLElement2.default)({
  tagName: 'mj-body',
  attributes: {
    'width': '600'
  },
  inheritedAttributes: ['width']
}), _dec(_class = function (_Component) {
  _inherits(Body, _Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return {
        div: {
          backgroundColor: mjAttribute('background-color'),
          fontSize: mjAttribute('font-size')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var renderWrappedOutlookChildren = _props.renderWrappedOutlookChildren;
      var mjAttribute = _props.mjAttribute;

      var _widthParser = (0, _mjAttribute.widthParser)(mjAttribute('width'));

      var width = _widthParser.width;


      this.styles = this.getStyles();

      return _react2.default.createElement(
        'div',
        { className: 'mj-body',
          style: this.styles.div,
          'data-background-color': mjAttribute('background-color'),
          'data-width': width },
        renderWrappedOutlookChildren()
      );
    }
  }]);

  return Body;
}(_react.Component)) || _class);
exports.default = Body;
//# sourceMappingURL=Body.js.map