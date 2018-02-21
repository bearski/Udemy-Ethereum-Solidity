const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')  // constructor to create instances of the web3 library
const provider = ganache.provider()
const web3 = new Web3(provider)

const { interface, bytecode } = require('../compile')

let accounts
let inbox
const INITIAL_STRING = 'Hi there!'

beforeEach(async () => {
  //  get a list of all accounts
  accounts = await web3.eth.getAccounts()

  // use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))  //defines contract interface for web3
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] })     //tells web3 we want to deploy new contract to the network.  arguments are for Constructor function
    .send({ from: accounts[0], gas: '1000000' })              //instructs web3 to send out a transaction to create a contract
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address)                          //  true if 'truthy' value returned
  })

  it('has a default message', async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message, INITIAL_STRING)
  })

  it('can change the message', async () => {
    await inbox.methods.setMessage('bearski').send({ from: accounts[0] })
    const message = await inbox.methods.message().call()
    assert.equal(message, 'bearski')    
  })
})
