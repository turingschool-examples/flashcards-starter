const chai = require('chai');
const deck = require('../src/data');
const expect = chai.expect;

const { countsCards, createDeck} = require('../src/deck');

describe('deck', function() {
  it('should know how many cards are in the deck', function() {
    const decks = createDeck(deck.prototypeData);

    expect(countsCards(decks)).to.equal(30);
  });
});
