const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck } = require('../src/card');
const { createCardListFromDataset } = require('../src/game');
const {
  initRoundController,
  takeTurn,
  calculatePercentCorrect,
} = require('../src/round');
const { sampleData } = require('./sample-data');

describe('taking a turn', () => {
  let card1, card2, card3, deck, round;

  beforeEach('init round controller', () => {
    ([ card1, card2, card3 ] = createCardListFromDataset(sampleData));

    deck = createDeck([card1, card2, card3]);

    round = initRoundController(deck);
  });

  it('should update the turn count', () => {
    takeTurn('object', round);
    takeTurn('function', round);

    expect(round.turns).to.equal(2);
  });

  it('should update the turn count even when guess is incorrect', () => {
    takeTurn('array', round);

    expect(round.turns).to.equal(1);
  });

  it('should not pass in an id to incorrectGuesses if guess is correct', () => {
    takeTurn('object', round);

    expect(round.incorrectGuesses).to.be.empty;
  });

  it('should pass in an id to incorrectGuesses if guess is incorrect', () => {
    takeTurn('array', round);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('updates currentCard after guess', () => {
    takeTurn('object', round);

    expect(round.currentCard).to.equal(deck[1]);
  });

  it('should provide feedback on whether guess was correct or incorrect', () => {
    const correctGuess = takeTurn('object', round);
    const incorrectGuess = takeTurn('function', round);

    expect(correctGuess).to.equal('correct!');
    expect(incorrectGuess).to.equal('incorrect!');
  });

  it('should calculate the percentage of correct guesses', () => {
    takeTurn('object', round); // correct
    takeTurn('function', round); // incorrect

    const correctGuessPercent = calculatePercentCorrect(round);

    expect(correctGuessPercent).to.equal(50);
  });
});
