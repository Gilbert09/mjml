'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _MJMLElementsCollection = require('../../MJMLElementsCollection');

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mjAttribute = require('../../helpers/mjAttribute');

var _Error = require('../../Error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getElementWidth = function getElementWidth(_ref) {
  var element = _ref.element;
  var siblings = _ref.siblings;
  var parentWidth = _ref.parentWidth;
  var elem = element.props.elem;
  var width = element.props.width;


  if (!width && elem && elem.attributes && elem.attributes.width) {
    width = elem.attributes.width;
  }

  if (width == undefined) {
    return parentWidth / siblings;
  }

  var _widthParser = (0, _mjAttribute.widthParser)(width);

  var parsedWidth = _widthParser.width;
  var unit = _widthParser.unit;


  switch (unit) {
    case '%':
      return parsedWidth * parentWidth / 100;

    case 'px':
    default:
      return parsedWidth;
  }
};

function createComponent(ComposedComponent, defaultAttributes) {
  var MJMLElement = function (_Component) {
    _inherits(MJMLElement, _Component);

    function MJMLElement(props) {
      _classCallCheck(this, MJMLElement);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MJMLElement).call(this, props));

      _this.state = _immutable2.default.fromJS({
        elem: _lodash2.default.merge({
          children: [],
          attributes: {},
          inheritedAttributes: []
        }, defaultAttributes)
      });

      _this.state = _this.state.mergeDeep(props);
      return _this;
    }

    _createClass(MJMLElement, [{
      key: 'mjAttribute',
      value: function mjAttribute(name) {
        if (this.props[name] != undefined) {
          return this.props[name];
        }

        return this.state.getIn(['elem', 'attributes']).get(name);
      }
    }, {
      key: 'mjContent',
      value: function mjContent() {
        return _lodash2.default.trim(this.state.getIn(['elem', 'content'])) || _react2.default.renderToStaticMarkup(this.props.children);
      }
    }, {
      key: 'mjElementName',
      value: function mjElementName() {
        return this.state.getIn(['elem', 'tagName']).substr(3);
      }
    }, {
      key: 'inheritedAttributes',
      value: function inheritedAttributes() {
        var _this2 = this;

        return _lodash2.default.reduce(this.state.getIn(['elem', 'inheritedAttributes']).toJS(), function (result, value) {
          result[value] = _this2.mjAttribute(value);
          return result;
        }, {});
      }
    }, {
      key: 'isInheritedAttributes',
      value: function isInheritedAttributes(name) {
        return _lodash2.default.indexOf(this.state.getIn(['elem', 'inheritedAttributes']).toJS(), name) != -1;
      }
    }, {
      key: 'siblingsCount',
      value: function siblingsCount() {
        var children = this.state.getIn(['elem', 'children']);

        return this.hasReactChildren() ? _react2.default.Children.count(children) : this.state.getIn(['elem', 'children']).size;
      }
    }, {
      key: 'getWidth',
      value: function getWidth() {
        return this.mjAttribute('rawPxWidth') || this.mjAttribute('width');
      }
    }, {
      key: 'childDefaultProps',
      value: function childDefaultProps(id) {
        return {
          id: id,
          key: id,
          color: this.mjAttribute('color'),
          parentWidth: this.getWidth(),
          verticalAlign: this.mjAttribute('vertical-align'),
          sibling: this.siblingsCount()
        };
      }
    }, {
      key: 'renderWrappedOutlookChildren',
      value: function renderWrappedOutlookChildren() {
        var _this3 = this;

        var elements = this.renderChildren();

        if (elements && elements.get) {
          // had to break immutable here :(
          elements = elements.toArray();
        }

        var wrappedElements = [];
        var prefix = 'mj-' + this.mjElementName() + '-outlook';
        var parentWidth = this.getWidth();
        var siblings = elements.length;
        var elementsWidth = elements.map(function (element) {
          if (_this3.isInheritedAttributes('width')) {
            return parentWidth;
          }

          return getElementWidth({ element: element, siblings: siblings, parentWidth: parentWidth });
        });

        if (siblings == 0) {
          return [];
        }

        elements.forEach(function (element, n) {
          var width = elementsWidth[n];

          wrappedElements.push(_react2.default.cloneElement(element, _lodash2.default.merge({ rawPxWidth: width }, _this3.inheritedAttributes())));

          if (n < elements.length - 1) {
            wrappedElements.push(_react2.default.createElement('div', { key: 'outlook-' + n, className: prefix + '-line', 'data-width': elementsWidth[n + 1] }));
          }
        });

        var outlookOpenTag = _react2.default.createElement('div', { key: 'outlook-open', className: prefix + '-open', 'data-width': elementsWidth[0] });
        var outlookCloseTag = _react2.default.createElement('div', { key: 'outlook-close', className: prefix + '-close' });

        return [outlookOpenTag].concat(wrappedElements, [outlookCloseTag]);
      }
    }, {
      key: 'upgradeReactChildren',
      value: function upgradeReactChildren(children) {
        var _this4 = this;

        return children.map(function (child, i) {
          return _react2.default.cloneElement(child, _this4.childDefaultProps(i));
        });
      }
    }, {
      key: 'hasReactChildren',
      value: function hasReactChildren() {
        var children = this.state.getIn(['elem', 'children']);

        return !children || children.count() === 0 && _react2.default.Children.count(this.props.children) >= 1;
      }
    }, {
      key: 'renderChildren',
      value: function renderChildren() {
        var _this5 = this;

        if (this.hasReactChildren()) {
          return this.upgradeReactChildren(_react2.default.Children.toArray(this.props.children));
        }

        var children = this.state.getIn(['elem', 'children']);
        var i = 0;

        return children.map(function (elem) {
          if (elem.get('tagName') && elem.get('tagName').indexOf('mj-') != -1) {
            i++;

            var Element = _MJMLElementsCollection2.default[elem.get('tagName').substr(3)];

            if (!Element) {
              throw new _Error.UnknownMJMLElement('Could not find element for : ' + elem.get('tagName'));
            }

            var props = _lodash2.default.merge(_this5.childDefaultProps(i), {
              elem: elem.toJS()
            });

            return _react2.default.createElement(Element, props);
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
          mjAttribute: this.mjAttribute.bind(this),
          mjContent: this.mjContent.bind(this),
          mjElementName: this.mjElementName.bind(this),
          renderChildren: this.renderChildren.bind(this),
          renderWrappedOutlookChildren: this.renderWrappedOutlookChildren.bind(this) }));
      }
    }]);

    return MJMLElement;
  }(_react.Component);

  return MJMLElement;
}

exports.default = function (defaultAttributes) {
  if (typeof defaultAttributes == 'function') {
    return createComponent(defaultAttributes);
  }

  return function (ComposedComponent) {
    return createComponent(ComposedComponent, defaultAttributes);
  };
};
//# sourceMappingURL=MJMLElement.js.map