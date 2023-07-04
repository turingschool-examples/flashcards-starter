const chai = require('chai');
const data = require('../src/data');
const expect = chai.expect;

const { createRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');


describe('round', function() {
  const deck = createDeck(data.prototypeData);
  const round = createRound(deck);

  it('should hold deck of cards', function() {
  expect(deck).to.equal(deck);
  });

  it('should start turn at 0', function() {
  expect(round.turns).to.equal(0);
  });

  it('should start with an empty list of incorrect guesses', function() {
  expect(round.incorrectGuess).to.deep.equal([]);
  });

  it('should start with first card in the deck', function(){
  expect(round.currentCard).to.equal(deck[0]);
  });
});