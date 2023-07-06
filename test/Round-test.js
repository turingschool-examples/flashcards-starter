const chai = require('chai');
const expect = chai.expect;

const { sampleData } = require('./sample-data');
const { createCard, createDeck } = require('../src/card');
const { initRoundController } = require('../src/round');

describe('round controller', () => {
  let card1, card2, card3, deck, round;

  beforeEach('init round controller', () => {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter',
    );

    card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder',
    );

    card3 = createCard(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald',
    );

    deck = createDeck([card1, card2, card3]);

    round = initRoundController(deck);
  });

  it('should contain the deck array', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should hold state of current card', () => {
    expect(round.currentCard).to.deep.equal(deck[0]);
  });

  it('should initialize turns to 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should contain an incorrectGuesses array', () => {
    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses).to.be.empty;
  });
});