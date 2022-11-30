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
    }) 
  
  it('should be a function', function() {
   
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function() {

    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should show the set of cards in the deck', function() {
    
    expect(deck.set).to.deep.equal([card1, card2, card3])
  })

  it('should show how many cards are in the Deck', function() {
    
    expect(deck.countCards()).to.equal(3)
  })
})