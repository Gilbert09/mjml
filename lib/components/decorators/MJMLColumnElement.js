'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MJMLElement = require('./MJMLElement');

var _MJMLElement2 = _interopRequireDefault(_MJMLElement);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createComponent(ComposedComponent, defaultAttributes) {
  var _dec, _class;

  var MJMLColumnElement = (_dec = (0, _MJMLElement2.default)(defaultAttributes), _dec(_class = function (_Component) {
    _inherits(MJMLColumnElement, _Component);

    function MJMLColumnElement() {
      _classCallCheck(this, MJMLColumnElement);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(MJMLColumnElement).apply(this, arguments));
    }

    _createClass(MJMLColumnElement, [{
      key: 'getStyles',
      value: function getStyles() {
        var mjAttribute = this.props.mjAttribute;


        return {
          td: {
            fontSize: 0,
            paddingTop: mjAttribute('padding-top'),
            paddingBottom: mjAttribute('padding-bottom'),
            paddingRight: mjAttribute('padding-right'),
            paddingLeft: mjAttribute('padding-left'),
            padding: mjAttribute('padding')
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var mjAttribute = this.props.mjAttribute;


        this.styles = this.getStyles();

        return _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { style: this.styles.td, 'data-legacy-align': mjAttribute('align'), className: mjAttribute('class') + '-column' },
            _react2.default.createElement(ComposedComponent, this.props)
          )
        );
      }
    }]);

    return MJMLColumnElement;
  }(_react.Component)) || _class);


  return MJMLColumnElement;
}

exports.default = function (defaultAttributes) {
  if (typeof defaultAttributes == 'function') {
    return createComponent(defaultAttributes);
  }

  return function (ComposedComponent) {
    return createComponent(ComposedComponent, defaultAttributes);
  };
};
//# sourceMappingURL=MJMLColumnElement.js.map