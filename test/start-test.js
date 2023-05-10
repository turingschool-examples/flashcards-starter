const chai = require('chai');
const expect = chai.expect;

const { startMock } = require('../src/start');
const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')
const { dataSub } = require('../src/dataSub');



describe('startMock', () => {
  it('should create cards and put them in a deck', () => {
    const deck = startMock(dataSub);
    expect(deck.length).to.equal(8);
    expect(deck[0].id).to.equal(1);
  });

  it('should create a new round using the deck', () => {

  })
});