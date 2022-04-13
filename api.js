const ethNetwork = process.env.INFURA_ETH_URL
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork))

const getBlockNumber = function(){
     web3.eth.getBlockNumber(function (error, result) {
       try {
           console.log('Block Number: ' + result)
       } catch (error) {
           console.log(error)
       } 
    });    
}

const getBalanceFromAddress =  function(address){
    web3.eth.getBalance(address, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          let ethAmount = (web3.utils.fromWei(result, "ether"))
          console.log("Address: " + address)
          console.log(ethAmount + " ETH")  
        }
      })
}
module.exports = { getBlockNumber, getBalanceFromAddress }