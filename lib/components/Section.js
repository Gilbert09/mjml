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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Sections are intended to be used as rows within your email. They will be used to structure the layout.
 */
var Section = (_dec = (0, _MJMLElement2.default)({
  tagName: 'mj-section',
  attributes: {
    'background-repeat': 'repeat',
    'padding-top': '20px',
    'padding-bottom': '20px',
    'background-size': 'auto'
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'isFullWidth',
    value: function isFullWidth() {
      var mjAttribute = this.props.mjAttribute;


      return mjAttribute('full-width') == 'full-width';
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      var background = mjAttribute('background-url') ? {
        background: 'url(' + mjAttribute('background-url') + ') top center / ' + (mjAttribute('background-size') || '') + ' ' + (mjAttribute('background-repeat') || '')
      } : {
        background: mjAttribute('background-color')
      };

      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        td: {
          fontSize: 0,
          verticalAlign: mjAttribute('vertical-align'),
          paddingTop: mjAttribute('padding-top'),
          paddingBottom: mjAttribute('padding-bottom'),
          paddingRight: mjAttribute('padding-right'),
          paddingLeft: mjAttribute('padding-left'),
          padding: mjAttribute('padding'),
          textAlign: mjAttribute('text-align')
        },
        div: {
          maxWidth: mjAttribute('parentWidth'),
          borderLeft: mjAttribute('border-left'),
          borderTop: mjAttribute('border-top'),
          borderRight: mjAttribute('border-right'),
          borderBottom: mjAttribute('border-bottom'),
          border: mjAttribute('border')
        }
      }, {
        div: this.isFullWidth() ? {} : _lodash2.default.cloneDeep(background),
        table: this.isFullWidth() ? {} : _lodash2.default.cloneDeep(background),
        tableFullwidth: this.isFullWidth() ? _lodash2.default.cloneDeep(background) : {}
      });
    }
  }, {
    key: 'renderFullWidthSection',
    value: function renderFullWidthSection() {
      var mjAttribute = this.props.mjAttribute;


      var mcEdit = mjAttribute('mc-edit');
      var mcHide = mjAttribute('mc-hide');

      return _react2.default.createElement(
        'table',
        { 'data-legacy-background': mjAttribute('background-url'),
          'data-mc-edit': mcEdit,
          'data-mc-hide': mcHide,
          border: '0',
          cellPadding: '0',
          cellSpacing: '0',
          'data-width': mjAttribute('parentWidth'),
          className: mjAttribute('class') + '-table' || '',
          style: _lodash2.default.merge({}, this.styles.tableFullwidth, this.styles.table) },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              this.renderSection()
            )
          )
        )
      );
    }
  }, {
    key: 'renderSection',
    value: function renderSection() {
      var _props = this.props;
      var renderWrappedOutlookChildren = _props.renderWrappedOutlookChildren;
      var mjAttribute = _props.mjAttribute;

      var fullWidth = this.isFullWidth();

      var className = '';

      var customClassName = mjAttribute('class');
      var noOutlookFix = mjAttribute('no-outlook-fix');

      if (customClassName) {
        className += customClassName;
      }

      if (!noOutlookFix) {
        className += " outlook-background-fix-open";
      }

      var mcEdit = mjAttribute('mc-edit');
      var mcHide = mjAttribute('mc-hide');

      return _react2.default.createElement(
        'div',
        { style: this.styles.div, 'data-mc-edit': mcEdit, className: mjAttribute('class') + '-div' || '' },
        _react2.default.createElement(
          'table',
          { className: className,
            'data-url': mjAttribute('background-url') || '',
            'data-legacy-background': fullWidth ? undefined : mjAttribute('background-url'),
            'data-mc-edit': mcEdit,
            'data-mc-hide': mcHide,
            border: '0',
            cellPadding: '0',
            cellSpacing: '0',
            'data-legacy-align': 'center',
            'data-width': mjAttribute('parentWidth'),
            style: this.styles.table },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { style: this.styles.td },
                renderWrappedOutlookChildren()
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      this.styles = this.getStyles();

      return this.isFullWidth() ? this.renderFullWidthSection() : this.renderSection();
    }
  }]);

  return Section;
}(_react.Component), _class2.baseStyles = {
  div: {
    margin: "0 auto"
  },
  table: {
    width: "100%",
    fontSize: "0"
  },
  td: {
    textAlign: 'center',
    verticalAlign: 'top'
  }
}, _temp)) || _class);
exports.default = Section;
//# sourceMappingURL=Section.js.map