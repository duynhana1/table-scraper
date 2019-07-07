let rp = require('request-promise');
let importHTML = require('./importHTML')

module.exports = (url, cb) => { 
  rp.get(url)
    .then( htmlString => {
      // console.log(htmlString)
      cb( importHTML(htmlString) )
    })
}

// let url = "https://tradingeconomics.com/currencies"
// export_tables(url, (tables) => {
//   console.log(tables)
// })
