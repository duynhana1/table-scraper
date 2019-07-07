let tableScraper = require('./index')
let url = "https://tradingeconomics.com/currencies"
tableScraper(url, (tables) => {
  console.log(tables)
})
