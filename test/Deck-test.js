const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const dataSet = require('../src/data');


describe('Deck', function(){

  let newDeck = Object.prototype;
  let testCards = Object.prototype;

  this.beforeEach(() => {
    testCards = dataSet.prototypeData.filter(card => {
      return card.id % 4 === 0;
    });
    newDeck = new Deck(testCards);
  })

  it('should be initialized with an array of Card objects', function() {
    expect(newDeck.cards).to.equal(testCards);
  })

  it('should know how many cards are in the deck', function() {
    expect(newDeck.cardCount).to.equal(testCards.length);
  })

})