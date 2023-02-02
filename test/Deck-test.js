const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')

describe('Deck', function() {
  var firstCard
  var secondCard
  var thirdCard
  var deck

  beforeEach(function () {
  firstCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  secondCard = new Card(8, 'Which array prototype is not an accessor method?', ["join()", "slice()", "splice()"], "splice()" )
  thirdCard = new Card(11,'Which iteration method returns a new array with all elements that match a given condition?', ["filter()", "find()", "map()"], "filter()") 
  deck = new Deck([firstCard, secondCard, thirdCard])
})
  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should hold an array', function() {
    expect(deck.cards).to.be.a('array')
  })

  it('should be able to count how many cards in the deck', function() {
    var cardLength = deck.countCards()
    expect(cardLength).to.equal(3)
  })

})