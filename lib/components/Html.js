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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Displays raw html
 */
var Html = (_dec = (0, _MJMLElement2.default)({
  tagName: 'mj-html',
  content: ' ',
  attributes: {
    'html': true,
    'padding-bottom': '10px',
    'padding-left': '0',
    'padding-right': '0',
    'padding-top': '10px'
  }
}), _dec(_class = function (_Component) {
  _inherits(Html, _Component);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Html).apply(this, arguments));
  }

  _createClass(Html, [{
    key: 'render',
    value: function render() {
      var mjContent = this.props.mjContent;


      return _react2.default.createElement('div', {
        className: 'mj-content',
        dangerouslySetInnerHTML: { __html: mjContent() } });
    }
  }]);

  return Html;
}(_react.Component)) || _class);
exports.default = Html;
//# sourceMappingURL=Html.js.map