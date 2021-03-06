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
 * Displays a customizable divider
 */
var Divider = (_dec = (0, _MJMLColumnElement2.default)({
  tagName: 'mj-divider',
  attributes: {
    'border-color': '#000000',
    'border-style': 'solid',
    'border-width': '4px',
    'horizontal-spacing': '10px',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px',
    'vertical-spacing': '30px',
    'width': '150px'
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Divider, _Component);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Divider).apply(this, arguments));
  }

  _createClass(Divider, [{
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        p: {
          borderTop: mjAttribute('border-width') + ' ' + mjAttribute('border-style') + ' ' + mjAttribute('border-color'),
          width: "100%"
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.styles = this.getStyles();

      return _react2.default.createElement('p', { className: 'outlook-divider-fix', style: this.styles.p });
    }
  }]);

  return Divider;
}(_react.Component), _class2.baseStyles = {
  p: {
    fontSize: '1px',
    margin: '0'
  }
}, _temp)) || _class);
exports.default = Divider;
//# sourceMappingURL=Divider.js.map