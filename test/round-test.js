const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/guess');
const { createDeck, countCards } = require('../src/deck');
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('../src/round');

describe('round', () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = createCard(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = createDeck([card1, card2, card3]);
  });

  it('should be a function', function () {
    expect(createRound).to.be.a('function');
  });

  it('should create a round object', () => {
    const roundOne = createRound(deck, 0, 0, []);

    expect(roundOne.currentCardIndex).to.equal(0);
    expect(roundOne.turns).to.equal(0);
    expect(roundOne.incorrectGuesses).to.deep.equal([]);
  });

  it('should be a function', () => {
    expect(takeTurn).to.be.a('function');
  });

  it('should take a turn', () => {
    const roundOne = createRound(deck, 0, 0, []);
    const guess = evaluateGuess('pug', 'sea otter');

    expect(guess).to.equal('Incorrect');
    expect(roundOne.incorrectGuesses).to.deep.equal([]);
    expect(roundOne.currentCardIndex).to.equal(0);
  });

  // it('should take a turn and update the round when answer is correct ', () => {
  //   const gameRound = createRound(deck, 0, 0, []);
  //   const guess = 'sea otter';
  //   takeTurn(guess, gameRound);

  //   expect(gameRound.turns).to.equal(1);
  //   expect(gameRound.incorrectGuesses).to.deep.equal([]);
  // });

  // it('should take a turn and update the round when answer is incorrect ', () => {
  //   const gameRound = createRound(deck, 0, 0, []);
  //   const guess = 'pug' || 'capybara';
  //   takeTurn(guess, gameRound);

  //   expect(gameRound.turns).to.equal(1);
  //   expect(gameRound.incorrectGuesses).to.deep.equal([1]);
  // });

  it('should be a function', function () {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate the percent correct', () => {
    const gameRound = createRound(deck, 0, 0, []);
    const guess = 'pug' || 'capybara';
    takeTurn(guess, gameRound);

    const urCorrect = calculatePercentCorrect(gameRound);

    expect(urCorrect).to.equal(67);
  });
  //haven't answered any questions -> 0
  //what happens to percent correct

  it('should be a function', function () {
    expect(endRound).to.be.a('function');
  });

  it('should end the round', () => {
    const gameRound = createRound(deck, 0, 0, []);
    const guess = 'pug' || 'capybara';
    takeTurn(guess, gameRound);
    const percentCorrect = calculatePercentCorrect(gameRound);

    const endingMessage = endRound(gameRound, percentCorrect);

    // Compare the captured output with the expected output
    expect(endingMessage).to.equal(
      `** Round Over! ** You Answered ${percentCorrect}% of the questions correctly.`
    );
  });
});
