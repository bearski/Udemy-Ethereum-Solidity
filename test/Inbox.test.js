const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')  // constructor to create instances of the web3 library
const web3 = new Web3(ganache.provider())

let accounts

beforeEach(async () => {
  //  get a list of all accounts
  accounts = await web3.eth.getAccounts()

  // use one of those account to deploy the contract
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts)
  })
})
