"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

var _defaultStyle = require("./defaultStyle");

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

var _documentParser = require("./documentParser");

var _documentParser2 = _interopRequireDefault(_documentParser);

var _MJMLElementsCollection = require("./MJMLElementsCollection");

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _Error = require("./Error");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require("debug")("mjml-engine/mjml2html");

var internals = {
  mjml2html: function mjml2html(content) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var parsedContent = content;

    if (typeof content == "string") {
      debug("Start parsing content");
      parsedContent = (0, _documentParser2.default)(content);
      debug("Content parsed.");
    }

    debug("Start rendering");
    var render = internals.render({ mjml: parsedContent, options: options });
    debug("Done rendering");

    return render;
  },
  render: function render(_ref) {
    var mjml = _ref.mjml;
    var options = _ref.options;

    var elem = mjml;
    var content = "";

    if (elem) {
      var propsElement = {
        key: 0,
        elem: elem
      };

      debug("Create root React element");
      var rootElemComponent = _react2.default.createElement(_MJMLElementsCollection2.default[elem.tagName.substr(3)], propsElement);

      debug("Render to static markup");
      content = _server2.default.renderToStaticMarkup(rootElemComponent);
    } else {
      throw new _Error.EmptyMJMLError('.render: No MJML to render in options ' + options.toString());
    }

    debug("React rendering done. Continue with special overrides.");

    var $ = _cheerio2.default.load(internals.container(options.title), { decodeEntities: false });

    $("#YIELD_MJML").html(content);
    $(".mj-raw").each(function () {
      $(this).replaceWith($(this).html());
    });

    internals.insertColumnMediaQuery($);
    internals.fixLegacyAttrs($);
    internals.fixOutlookLayout($);
    //internals.mcEditAttr($)
    //internals.mcHideAttr($)

    return $.html();
  },


  // mcEditAttr($) {
  //   $('[data-mc-edit]').each(function(i, e) {
  //     let mcEdit = $(e).attr('data-mc-edit');
  //
  //     $(e).attr('mc:edit', mcEdit);
  //     $(e).removeAttr('data-mc-edit')
  //   });
  // },
  //
  // mcHideAttr($) {
  //   $('[data-mc-hide]').each(function(i, e) {
  //     $(e).attr('mc:hideable', true);
  //     $(e).removeAttr('data-mc-hide')
  //   });
  // },

  insertColumnMediaQuery: function insertColumnMediaQuery($) {
    var mediaQuery = $("<style type=\"text/css\">\n    @media only screen and (min-width:480px) {\n    </style>");

    _lodash2.default.each({ "mj-column-per": "%", "mj-column-px": "px" }, function (unit, className) {
      var columnWidths = [];

      $("[class*='" + className + "']").each(function () {
        columnWidths.push($(this).data('column-width'));
        $(this).removeAttr('data-column-width');
      });

      _lodash2.default.uniq(columnWidths).forEach(function (width) {
        var mediaQueryClass = className + "-" + width;

        mediaQuery.append("." + mediaQueryClass + ", * [aria-labelledby=\"" + mediaQueryClass + "\"] { width:" + width + unit + "!important; }\n");
      });
    });

    mediaQuery.append("}");

    $('head').append(mediaQuery);
  },
  fixOutlookLayout: function fixOutlookLayout($) {
    var bodyWidth = $('.mj-body').data('width');
    $('.mj-body').removeAttr('data-width');

    $(".outlook-background-fix-open").each(function () {
      var url = $(this).data('url');
      var width = $(this).data('width');

      $(this).removeClass('outlook-background-fix-open').removeAttr('data-url').removeAttr('data-width');

      if (!url) {
        return;
      }

      $(this).before("\n          <!--[if gte mso 9]>\n          <v:rect xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"true\" stroke=\"false\" style=\"width:" + width + "px;\">\n            <v:fill origin=\"0.5, 0\" position=\"0.5,0\" type=\"tile\" src=\"" + url + "\" />\n            <v:textbox style=\"mso-fit-shape-to-text:true\" inset=\"0,0,0,0\">\n          <![endif]-->");

      $(this).after("\n        <!--[if gte mso 9]>\n          </v:textbox>\n        </v:rect>\n        <![endif]-->\n      ");
    });

    $(".mj-body-outlook-open").each(function () {
      $(this).replaceWith("<!--[if mso]>\n  \t\t<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"" + bodyWidth + "\" align=\"center\" style=\"width:" + bodyWidth + "px;\"><tr><td>\n  \t\t<![endif]-->");
    });

    $(".mj-body-outlook-line").each(function () {
      $(this).replaceWith("<!--[if mso]>\n      </td></tr></table>\n  \t\t<![endif]-->\n  \t\t<!--[if mso]>\n  \t\t<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"" + bodyWidth + "\" align=\"center\" style=\"width:" + bodyWidth + "px;\"><tr><td>\n  \t\t<![endif]-->");
    });

    $(".mj-body-outlook-close").each(function () {
      $(this).replaceWith("<!--[if mso]>\n  \t\t</td></tr></table>\n  \t\t<![endif]-->");
    });

    $(".mj-section-outlook-open").each(function () {
      $(this).replaceWith("<!--[if mso]>\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr>\n      <![endif]-->");
    });

    $(".mj-section-outlook-line").each(function () {
      $(this).replaceWith("<!--[if mso]>\n      </tr><tr style=\"width:" + parseInt($(this).data('width')) + "px;\">\n      <![endif]-->");
    });

    $(".mj-section-outlook-close").each(function () {
      $(this).replaceWith("<!--[if mso]>\n      </tr></table>\n      <![endif]-->");
    });

    $(".outlook-divider-fix").each(function () {
      var $insertNode = $('<table></table>').css($(this).css());

      $(this).removeClass("outlook-divider-fix").after("<!--[if mso]>" + $insertNode + "<![endif]-->");
    });
  },
  fixLegacyAttrs: function fixLegacyAttrs($) {
    var legacyAttrs = ["align", "valign", "bgcolor", "border", "background"];

    $("#YIELD_MJML").css({ background: $(".mj-body").data('background-color') });
    $(".mj-body").removeAttr('data-background-color');

    // https://github.com/facebook/react/issues/140 ...
    // server side workaround to allow custom tags.
    legacyAttrs.forEach(function (attr) {
      var dataAttr = "data-legacy-" + attr;

      $("[" + dataAttr + "]").each(function () {
        $(this).attr(attr, $(this).attr(dataAttr));
        $(this).removeAttr(dataAttr);
      });
    });
  },
  container: function container() {
    var title = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return "<!doctype html>\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n  <title>" + title + "</title>\n  <style type=\"text/css\">\n    " + _defaultStyle2.default + "\n  </style>\n  <!--[if !mso]><!-->\n  <style type=\"text/css\">\n    @media only screen and (max-width:480px) {\n      @-ms-viewport { width:320px; }\n      @viewport { width:320px; }\n    }\n  </style>\n  <link href=\"https://fonts.googleapis.com/css?family=Ubuntu:400,500,700,300\" rel=\"stylesheet\" type=\"text/css\">\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css\" rel=\"stylesheet\" type=\"text/css\">\n  <!--<![endif]-->\n</head>\n<body id=\"YIELD_MJML\">\n</body>\n</html>\n";
  }
};

exports.default = internals.mjml2html;
//# sourceMappingURL=mjml2html.js.map