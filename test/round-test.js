const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/guess');
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurn } = require('../src/round');

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
    takeTurn(guess, gameRound, evaluateGuess);

    expect(gameRound.turns).to.equal(1);
    expect(gameRound.incorrectGuesses).to.deep.equal([]);
    expect(gameRound.currentCard.id).to.equal(1);
  });

  it('should take a turn and update the round when answer is incorrect ', () => {
    const gameRound = createRound(deck, 0, 0, []);
    const guess = 'pug' || 'capybara';
    takeTurn(guess, gameRound, evaluateGuess);

    expect(gameRound.turns).to.equal(1);
    expect(gameRound.incorrectGuesses).to.deep.equal([1]);
    expect(gameRound.currentCard.id).to.equal(1);
  });
});
