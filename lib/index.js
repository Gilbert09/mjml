'use strict';

var _MJMLElementsCollection = require('./MJMLElementsCollection');

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  elements: _MJMLElementsCollection2.default,
  documentParser: require('./documentParser'),
  MJMLElement: require('./components/decorators/MJMLElement'),
  MJMLColumnElement: require('./components/decorators/MJMLColumnElement'),
  mjml2html: require('./mjml2html').default,
  registerElement: _MJMLElementsCollection.registerElement,
  version: require('../package.json').version
};
//# sourceMappingURL=index.js.map