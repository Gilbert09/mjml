'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _MJMLElement = require('./decorators/MJMLElement');

var _MJMLElement2 = _interopRequireDefault(_MJMLElement);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mjAttribute = require('../helpers/mjAttribute');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Columns are the basic containers for your content. They must be located under mj-section tags in order to be considered by the engine
 */
var Column = (_dec = (0, _MJMLElement2.default)({
  tagName: 'mj-column'
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Column).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        div: {
          display: "inline-block",
          verticalAlign: mjAttribute('vertical-align'),
          fontSize: "13",
          textAlign: "left",
          width: "100%",
          minWidth: mjAttribute('width'),
          border: mjAttribute('border'),
          borderTop: mjAttribute('border-top'),
          borderLeft: mjAttribute('border-left'),
          borderBottom: mjAttribute('border-bottom'),
          borderRight: mjAttribute('border-right')
        },
        table: {
          background: mjAttribute('background-color')
        }
      });
    }
  }, {
    key: 'getColumnClass',
    value: function getColumnClass() {
      var _props = this.props;
      var mjAttribute = _props.mjAttribute;
      var sibling = _props.sibling;

      var width = mjAttribute('width');

      if (width == undefined) {
        return 'mj-column-per-' + parseInt(100 / sibling);
      }

      var _widthParser = (0, _mjAttribute.widthParser)(width);

      var parsedWidth = _widthParser.width;
      var unit = _widthParser.unit;


      switch (unit) {
        case '%':
          return 'mj-column-per-' + parsedWidth;

        case 'px':
        default:
          return 'mj-column-px-' + parsedWidth;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var mjAttribute = _props2.mjAttribute;
      var renderChildren = _props2.renderChildren;
      var sibling = _props2.sibling;

      var width = mjAttribute('width') || 100 / sibling;
      var mjColumnClass = this.getColumnClass();

      this.styles = this.getStyles();

      if (mjAttribute('width')) {
        this.styles.div.width = width + "px";
      } else {
        this.styles.div.width = width + "%";
      }

      return _react2.default.createElement(
        'div',
        { style: this.styles.div, className: mjColumnClass, 'aria-labelledby': mjColumnClass, 'data-column-width': parseInt(width) },
        _react2.default.createElement(
          'table',
          { style: this.styles.table, 'data-legacy-background': mjAttribute('background'), width: '100%' },
          _react2.default.createElement(
            'tbody',
            null,
            renderChildren()
          )
        )
      );
    }
  }]);

  return Column;
}(_react.Component), _class2.baseStyles = {
  td: {
    border: 'none',
    borderSpacing: '0'
  },
  div: {
    verticalAlign: "top"
  }
}, _temp)) || _class);
exports.default = Column;
//# sourceMappingURL=Column.js.map