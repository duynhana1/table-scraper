var htmlparser = require("htmlparser2");

module.exports = function(html_string) {
  let tables = []
  let table = []
  let row = []
  let data = ""
  let parser = new htmlparser.Parser({
    onopentag: function (tagname, attributes) {
      // console.log("Open tag")
      switch (tagname) {
        case "table":
          table = []
          break;
        case "tr":
          row = []
          break;
        case "th":
        case "td":
        default:
          data = "";
      }
    },
    ontext: function (text) {
      data += text.trim()
    },
    onclosetag: function (tagname) {
      switch (tagname) {
        case "table":
          tables.push(table)
          break;
        case "tr":
          table.push(row)
          break;
        case "th":
        case "td":
          row.push(data);
      }
    }
  }, {
    decodeEntities: true
  });

  parser.write(html_string);
  parser.end();
  return tables
}
