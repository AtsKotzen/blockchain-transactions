const polygonNetwork = process.env.INFURA_POLYGON_URL
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(polygonNetwork))

const getBlockNumber = function () {
  web3.eth.getBlockNumber(function (error, result) {
    try {
      console.log('Polygon Block Number: ' + result)
    } catch (error) {
      console.log(error)
    }
  });
}

const getBalanceFromAddress = function (address) {
  web3.eth.getBalance(address, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      let ethAmount = (web3.utils.fromWei(result, "ether"))
      console.log("Address: " + address)
      console.log("Ballance: " + ethAmount + " MATIC")
    }
  })
}
module.exports = { getBlockNumber, getBalanceFromAddress }
