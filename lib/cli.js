'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _htmlMinify = require('html-minify');

var _htmlMinify2 = _interopRequireDefault(_htmlMinify);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var engine = _index2.default.mjml2html;

/*
 * The version number is the NPM
 * version number. It should be the same as the MJML engine
 */
var version = function version() {
  return _package.version;
};

/*
 * Turns a callback style to a Promise style one
 */
var promisify = function promisify(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      return fn.apply(undefined, _toConsumableArray(args.concat(function (err) {
        for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          data[_key2 - 1] = arguments[_key2];
        }

        return err ? reject(err) : resolve.apply(undefined, data);
      })));
    });
  };
};

/*
 * Minimal Error Handling
 */
var error = function error(e) {
  console.log(e.stack ? e.stack : e);
};

/*
 * Utility functions
 * write: write to a file
 * read: read a fileexists: ensure the file exists
 */
var write = promisify(_fs2.default.writeFile);
var read = promisify(_fs2.default.readFile);
var exists = promisify(function (file, cb) {
  return _fs2.default.access(file, _fs2.default.R_OK | _fs2.default.W_OK, cb);
});

/*
 * Turns an MJML input file into a pretty HTML file
 * min: boolean that specify the output format (pretty/minified)
 */
var render = function render(input, _ref) {
  var min = _ref.min;
  var output = _ref.output;

  exists(input).then(function () {
    return read(input);
  }).then(function (mjml) {
    return engine(mjml.toString());
  }).then(function (html) {
    return min ? (0, _htmlMinify2.default)(html) : html;
  }).then(function (result) {
    return write(output, result);
  }).catch(error);
};

/*
 * Watch changes on a specific input file by calling render on each change
 */
var watch = function watch(input, options) {
  return _fs2.default.watch(input, function () {
    return render(input, options);
  });
};

var capitalize = function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().replace(/-/g, '');
};

/*
* Return the code of an MJML component for a given name
*/
var createComponent = function createComponent(name, ending) {
  var lowerName = name.toLowerCase();

  return '\nimport React, { Component } from \'react\'\nimport _ from \'loadash\'\nimport {\n  MJMLColumnElement,\n  elements,\n  registerElement,\n} from \'mjml\'\n\n/*\n * Wrap your dependencies here.\n */\nconst {\n  text: MjText,\n} = elements;\n\nconst NAME = \'' + lowerName + '\'\n\n@MJMLColumnElement({\n  tagName: \'mj-' + lowerName + '\',\n  content: \' \',\n\n  /*\n   * These are your default css attributes\n   */\n  attributes: {\n    \'color\': \'#424242\',\n    \'font-family\': \'Helvetica\',\n    \'margin-top\': \'10px\'\n  }\n})\nclass ' + name + ' extends Component {\n\n  /*\n   * Build your styling here\n   */\n  getStyles() {\n    const { mjAttribute, color } = this.props\n\n    return _.merge({}, this.constructor.baseStyles, {\n      text: {\n      /*\n       * Get the color attribute\n       * Example: <mj-' + lowerName + ' color="blue">content</mj-' + lowerName + '>\n       */\n        color: mjAttribute(\'color\')\n      }\n    })\n  }\n\n  render() {\n\n    const css = this.getStyles(),\n          content = \'Hello World!\'\n\n    return (\n      <MjText style={ css }>\n        { content }\n      </MjText>\n    )\n  }\n}\n\nregisterElement(\'' + lowerName + '\', ' + name + (ending ? ', true' : '') + ')\nexport default ' + name + '\n';
};

/*
 * Create a new component based on the default template
 */
var initComponent = function initComponent(name, ending) {
  return write('./' + capitalize(name) + '.js', createComponent(capitalize(name), ending)).then(function () {
    return console.log('Component created: ' + capitalize(name));
  });
};

module.exports = {
  initComponent: initComponent,
  render: render,
  watch: watch,
  version: version
};
//# sourceMappingURL=cli.js.map