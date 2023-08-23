const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
// const { evaluateGuess } = require('../src/guess');
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

  it('should take a turn and update the round when answer is correct ', () => {
    const gameRound = createRound(deck, 0, 0, []);
    const guess = 'sea otter';
    takeTurn(guess, gameRound);

    expect(gameRound.turns).to.equal(1);
    expect(gameRound.incorrectGuesses).to.deep.equal([]);
    expect(gameRound.currentCard.id).to.equal(1);
  });

  it('should take a turn and update the round when answer is incorrect ', () => {
    const gameRound = createRound(deck, 0, 0, []);
    const guess = 'pug' || 'capybara';
    takeTurn(guess, gameRound);

    expect(gameRound.turns).to.equal(1);
    expect(gameRound.incorrectGuesses).to.deep.equal([1]);
    expect(gameRound.currentCard.id).to.equal(1);
  });

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

    // Capture the console output
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = output => {
      consoleOutput += output + '\n';
    };

    endRound(gameRound);

    // Restore the original console.log function
    console.log = originalConsoleLog;

    // Compare the captured output with the expected output
    expect(consoleOutput).to.equal(
      `** Round Over! ** You Answered 67% of the questions correctly.\n`
    );
  });
});
