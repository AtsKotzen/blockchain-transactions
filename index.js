const walletAddress = process.env.WALLET_ADDRESS
const api = require('./api')

api.getBlockNumber()
api.getBalanceFromAddress(walletAddress)


