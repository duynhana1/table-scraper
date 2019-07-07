var request = require('request')
var htmlparser = require("htmlparser2");

function export_tables(url) {
  let tables = []
  let table = []
  let row = []
  let data = ""

  request.get(url, function(error, response, body){
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
        data += text
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
          default:
        }
      }
    }, { decodeEntities: true });

    // console.log(body)
    parser.write(body);
    parser.end();
    console.log(tables[2])
    return tables
  })
  return tables
}
export_tables("https://ru.wiktionary.org/wiki/%D0%B8%D0%B4%D1%82%D0%B8")

