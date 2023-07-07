const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');

const { createDeck, countCards } = require('../src/deck');


describe('deck', function() {
  it('should have a length of 30', function() {
    const gameDeck = createDeck(data.prototypeData)
    const deckLength = countCards(gameDeck)
    expect(deckLength).to.equal(30)  
  
  });

});

