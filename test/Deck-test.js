const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const testData = require('../src/testData');


describe('Deck', function(){

  let newDeck = Object.prototype;

  this.beforeEach(() => {
    newDeck = new Deck(testData);
  });

  it('should be initialized with an array of Card objects', function() {
    expect(newDeck.cards).to.deep.equal(testData);
  });

  it('should know how many cards are in the deck', function() {
    expect(newDeck.countCards()).to.equal(5);
  });
});