// parse a string following the format,
// - if the string is between [ and ] save it in var named title
parseTile = function (str) {
    var title = null;
    const start = str.indexOf("[");
    const end = str.indexOf("]");
    if (start !== -1 && end !== -1) {
      title = str.substring(start + 1, end);
    }
    return title;
  };
  
  // parse a string and if the string is between ( and ) save it in var named url
  parseUrl = function (str) {
    var url = null;
    const start = str.indexOf("(");
    const end = str.indexOf(")");
    if (start !== -1 && end !== -1) {
      url = str.substring(start + 1, end);
    }
    return url;
  };
  
  // parse a string using a reg exp
  parseChap = function (str) {
    const reg = /-> chap \d+/gm;
    const res = reg.exec(str);
  
    return res === null ? null : parseInt(res[0].split(" ")[2]);
  };
  
  // parse lang
  parseLang = function (str) {
    const reg = / v. /gm;
    const res = reg.exec(str);
  
    return res === null ? null : res[0].split(" ")[1];
  };
  
  parseStatus = function (str) {
    let status = null;
    const start = str.lastIndexOf("(");
    const end = str.lastIndexOf(")");
    if (start !== -1 && end !== -1) {
      status = str.substring(start + 1, end);
    }
    return status;
  };
  
  module.exports = {
    parseTile,
    parseUrl,
    parseChap,
    parseLang,
    parseStatus
  };