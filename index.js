let rp = require('request-promise');
let importHTML = require('./importHTML')

module.exports = (url, cb) => { 
  rp.get(url)
    .then( htmlString => {
      // console.log(htmlString)
      cb( importHTML(htmlString) )
    })
}
