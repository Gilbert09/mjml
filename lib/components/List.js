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
 * mj-list enable you to create an unordered or ordered list
 */
var List = (_dec = (0, _MJMLColumnElement2.default)({
  tagName: 'mj-list',
  content: '',
  attributes: {
    'align': 'left',
    'color': '#000000',
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px'
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        ul: {
          color: mjAttribute('color'),
          fontFamily: mjAttribute('font-family'),
          fontSize: mjAttribute('font-size'),
          lineHeight: mjAttribute('line-height')
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var mjContent = this.props.mjContent;


      this.styles = this.getStyles();

      return _react2.default.createElement('ul', {
        className: 'mj-content',
        dangerouslySetInnerHTML: { __html: mjContent() },
        style: this.styles.ul });
    }
  }]);

  return List;
}(_react.Component), _class2.baseStyles = {
  ul: {
    display: 'inline-block',
    paddingLeft: '20px',
    textAlign: 'left'
  }
}, _temp)) || _class);
exports.default = List;
//# sourceMappingURL=List.js.map