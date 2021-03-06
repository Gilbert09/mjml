'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _MJMLElementsCollection = require('./MJMLElementsCollection');

var _Error = require('./Error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var internals = {
  /**
   * converts MJML body into a JSON representation
   */

  mjmlElementParser: function mjmlElementParser(elem) {
    if (!elem) {
      throw new _Error.NullElementError('Null element found in mjmlElementParser');
    }

    var that = internals.mjmlElementParser;
    var tagName = elem.tagName;
    var attributes = elem.attribs;
    var content = void 0;

    var children = elem.childNodes ? elem.childNodes.filter(function (child) {
      return child.tagName;
    }).map(that) : [];

    if (_MJMLElementsCollection.endingTags.indexOf(tagName) != -1) {
      var $ = _cheerio2.default.load(elem, { xmlMode: true, decodeEntities: false });
      content = $(tagName).html().trim();
    }

    return { tagName: tagName, attributes: attributes, children: children, content: content };
  },


  /**
   * Import an html document containing some mjml
   * returns JSON
   *   - container: the mjml container
   *   - mjml: a json representation of the mjml
   */
  documentParser: function documentParser(content) {
    var $ = void 0,
        body = void 0;
    try {
      $ = _cheerio2.default.load(content, { xmlMode: true });
      body = $('mj-body');
    } catch (e) {
      throw new _Error.ParseError('Error while parsing the file');
    }

    if (!body) {
      throw new _Error.EmptyMJMLError('No mj-body found in the file');
    }

    return internals.mjmlElementParser(body.get(0));
  }
};

exports.default = internals.documentParser;
//# sourceMappingURL=documentParser.js.map