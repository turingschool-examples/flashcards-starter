const chai = require('chai');
const data = require('../src/data');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');
const { createCard, evaluateGuess } = require('../src/card');
const { createDeck } = require('../src/deck');


describe('round', function() {
  const deck = createDeck(data.prototypeData);
  const round = createRound(deck);
  const card = createCard(
    1,
    'What allows you to define a set of related information using key-value pairs?',
    ['object', 'array', 'function'],
    'object'
  );

  it('should hold deck of cards', function() {
  expect(deck).to.equal(deck);
  });

  it('should start turn at 0', function() {
  expect(round.turns).to.equal(0);
  });

  it('should start with an empty list of incorrect guesses', function() {
  expect(round.incorrectGuess).to.deep.equal([]);
  });

  it('should start with first card in the deck', function() {
  expect(round.currentCard).to.equal(deck[0]);
  });

  it('should update turns regardless if correct or incorrect', function() {
    var turn = takeTurn('true', round);
    expect(round.turns).to.equal(1);
  });

  it('should make next card current card', function() {
    expect(round.currentCard).to.equal(deck[1]);
  });

  it('should store incorrect guess in array', function() {
    expect(round.incorrectGuess).to.deep.equal([1]);
  });

  it('should calculate percentage of correct answers', function() {
    const rounds = {
      turns: 2,
      incorrectGuess: ['WrongGuess1']
    }

    const percent = calculatePercentCorrect(rounds);

    expect(percent).to.equal(50);
  });

  it('should print round over', function () {
    const rounds = {
      turns: 2,
      incorrectGuess: ['WrongGuess1']
    }
    const message = endRound(rounds);

    expect(message).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});