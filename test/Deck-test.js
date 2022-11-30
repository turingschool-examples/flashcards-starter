const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Deck', function() {
  
  let card1, card2, card3, deck
  
  beforeEach('assign values to global variables', function() {
    card1 = new Card (2, 'What is a comma-separated list of related values?', ["array", "object", "function"],
       'array')
    card2 = new Card (5,
          'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ["mutator method", "accessor method", "iteration method"],
         'iteration method')  
    card3 = new Card (4,
        'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"],
       'accessor method')
    deck = new Deck([card1, card2, card3]) 
    console.log('here', deck)//defines variables
    }) 
  // const deck = new Deck()
  
  it('should be a function', function() {
   
    expect(Deck).to.be.a('function')
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