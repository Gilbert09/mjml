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

var Social = (_dec = (0, _MJMLColumnElement2.default)({
  tagName: 'mj-social',
  attributes: {
    'facebook-content': 'Share',
    'facebook-href': '[[SHORT_PERMALINK]]',
    'facebook-icon-color': '#3b5998',
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'google-content': '+1',
    'google-href': '[[SHORT_PERMALINK]]',
    'google-icon-color': '#dc4e41',
    'icon-size': '20px',
    'instagram-content': 'Share',
    'instagram-href': '[[SHORT_PERMALINK]]',
    'instagram-icon-color': '#3f729b',
    'line-height': '22px',
    'linkedin-content': 'Share',
    'linkedin-href': '[[SHORT_PERMALINK]]',
    'linkedin-icon-color': '#0077b5',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px',
    'mode': 'horizontal',
    'pinterest-content': 'Pin it',
    'pinterest-href': '[[SHORT_PERMALINK]]',
    'pinterest-icon-color': '#bd081c',
    'text-decoration': 'none',
    'text-mode': true,
    'twitter-content': 'Tweet',
    'twitter-href': '[[SHORT_PERMALINK]]',
    'twitter-icon-color': '#55acee',
    'align': 'center',
    'color': '#333333',
    'facebook': true,
    'google': true,
    'instagram': true,
    'linkedin': true,
    'pinterest': true,
    'twitter': true
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Social, _Component);

  function Social() {
    _classCallCheck(this, Social);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Social).apply(this, arguments));
  }

  _createClass(Social, [{
    key: 'getStyles',
    value: function getStyles() {
      var mjAttribute = this.props.mjAttribute;


      return _lodash2.default.merge({}, this.constructor.baseStyles, {
        a: {
          color: mjAttribute('color'),
          fontFamily: mjAttribute('font-family'),
          fontSize: mjAttribute('font-size'),
          fontStyle: mjAttribute('font-style'),
          fontWeight: mjAttribute('font-weight'),
          lineHeight: mjAttribute('line-height'),
          textDecoration: mjAttribute('text-decoration')
        },
        td1: {
          paddingRight: !this.isInTextMode() ? '8px' : null
        }
      });
    }
  }, {
    key: 'isButtonVisible',
    value: function isButtonVisible(platform) {
      var mjAttribute = this.props.mjAttribute;


      return mjAttribute(platform) == true || mjAttribute(platform) == 'true';
    }
  }, {
    key: 'isInTextMode',
    value: function isInTextMode() {
      var mjAttribute = this.props.mjAttribute;


      return mjAttribute('text-mode') == true || mjAttribute('text-mode') == 'true';
    }
  }, {
    key: 'renderSocialButtons',
    value: function renderSocialButtons() {
      var mjAttribute = this.props.mjAttribute;


      var renderedButtons = [];

      for (var platform in this.constructor.buttonDefinitions) {
        if (!this.isButtonVisible(platform)) {
          continue;
        }

        var definition = this.constructor.buttonDefinitions[platform];
        var iconStyle = {
          backgroundColor: mjAttribute(platform + '-icon-color'),
          width: mjAttribute('icon-size'),
          borderRadius: 3
        };

        var renderedButton = _react2.default.createElement(
          'table',
          {
            border: '0',
            cellPadding: '0',
            cellSpacing: '0',
            'data-legacy-align': 'left',
            key: platform },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { style: this.styles.td1 },
                _react2.default.createElement(
                  'table',
                  {
                    border: '0',
                    cellPadding: '0',
                    cellSpacing: '0' },
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { 'data-legacy-valign': 'middle' },
                        _react2.default.createElement(
                          'a',
                          {
                            href: definition.linkAttribute.replace('[[URL]]', mjAttribute(platform + '-href')),
                            style: this.styles.a },
                          _react2.default.createElement('img', {
                            alt: mjAttribute(platform + '-content'),
                            src: definition.icon,
                            style: iconStyle })
                        )
                      ),
                      this.isInTextMode() && _react2.default.createElement(
                        'td',
                        {
                          'data-legacy-valign': 'middle',
                          style: this.styles.td2 },
                        _react2.default.createElement('a', {
                          dangerouslySetInnerHTML: { __html: mjAttribute(platform + '-content') },
                          href: definition.linkAttribute.replace('[[URL]]', mjAttribute(platform + '-href')),
                          style: this.styles.a })
                      )
                    )
                  )
                )
              )
            )
          )
        );

        if (mjAttribute('mode') == 'vertical') {
          renderedButtons.push(_react2.default.createElement(
            'div',
            { key: platform + '-container' },
            renderedButton
          ));
        } else {
          renderedButtons.push(renderedButton);
        }
      }

      return renderedButtons;
    }
  }, {
    key: 'render',
    value: function render() {
      var mjAttribute = this.props.mjAttribute;


      this.styles = this.getStyles();

      return _react2.default.createElement(
        'table',
        {
          border: '0',
          cellPadding: '0',
          cellSpacing: '0',
          'data-legacy-align': mjAttribute('align') },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              {
                'data-legacy-align': mjAttribute('align'),
                'data-legacy-valign': 'middle' },
              this.renderSocialButtons()
            )
          )
        )
      );
    }
  }]);

  return Social;
}(_react.Component), _class2.baseStyles = {
  a: {
    textDecoration: 'none'
  },
  td1: {
    paddingRight: '16px',
    paddingBottom: '16px'
  },
  td2: {
    paddingLeft: '8px'
  }
}, _class2.buttonDefinitions = {
  facebook: {
    linkAttribute: 'https://www.facebook.com/sharer/sharer.php?u=[[URL]]',
    icon: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png',
    textModeContent: 'Share'
  },
  twitter: {
    linkAttribute: 'https://twitter.com/home?status=[[URL]]',
    icon: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png',
    textModeContent: 'Tweet'
  },
  google: {
    linkAttribute: 'https://plus.google.com/share?url=[[URL]]',
    icon: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/google-plus.png',
    textModeContent: '+1'
  },
  pinterest: {
    linkAttribute: 'https://pinterest.com/pin/create/button/?url=[[URL]]&ampmedia=&ampdescription=',
    icon: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/pinterest.png',
    textModeContent: 'Pin it'
  },
  linkedin: {
    linkAttribute: 'https://www.linkedin.com/shareArticle?mini=true&ampurl=[[URL]]&amptitle=&ampsummary=&ampsource=',
    icon: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png',
    textModeContent: 'Share'
  },
  instagram: {
    linkAttribute: '[[URL]]',
    icon: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png',
    textModeContent: 'Share'
  }
}, _temp)) || _class);
exports.default = Social;
//# sourceMappingURL=Social.js.map