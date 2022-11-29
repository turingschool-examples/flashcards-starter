const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Deck', function() {
  // let card1, card2, card3, // --> can i go through an array of objects that is not limited to a certain number
  // beforeEach() //defines variables
  // const deck = new Deck()
  
  it.skip('should be a function', function() {
    //setup
    //*execute
    // expect(Deck).to.be.a('function')
  })

  it.skip('should be an instance of Deck', function() {
    //const deck = new Deck()

    //expect(deck).to.be.an.instanceof(Deck)
  })

  it.skip('should start with new set of Cards', function() {
    //const deck = new Deck ([cards])

    //expect(deck).to.be.deeply.equal.to('[{}]')
  })

  it.skip('should show how many cards are in the Deck', function() {
    //const deck = new Deck([])

    //expect.deck
      //array.length == 'specify integer value *HERE*'
  })
})