"use strict";

module.exports = {
  widthParser: function widthParser(width) {
    var widthUnit = /[0-9]+([^ ,\)`]*)/.exec(width.toString())[1];

    return { unit: widthUnit || "px", width: parseInt(width) };
  }
};
//# sourceMappingURL=mjAttribute.js.map