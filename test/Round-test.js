const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck} = require('../src/card');
const { evaluateGuess, createRound, calculatePercentageCorrect, takeTurn, endRound} = require('../src/round');

describe('round', function() {
  it('should be an function', function() {
    expect(createRound).to.be.an('function');
  })

  it('should return a round and its properties', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck([card1, card2]);

    const round = createRound(deck);

    expect(round).to.be.an('object');
    expect(round.deck).to.deep.equal(deck);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  })
})

describe('turn', function() {
  it('should update the turn count regardless of the result of the guess', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck([card1, card2]);
    const round = createRound(deck);
    const correctGuess = 'object';
    const incorrectGuess = 'array';

    takeTurn(correctGuess, round);
    takeTurn(incorrectGuess, round);

    expect(round.turns).to.equal(2);
  })
  
  it('should update the currentCard to the next card', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck([card1, card2]);
    const round = createRound(deck);

    takeTurn('object', round);

    expect(round.currentCard).to.deep.equal(card2);
  })

  it('should should add the cards id to incorrectGuesses if the guess is incorrect', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck([card1, card2]);
    const round = createRound(deck);

    const incorrectGuess = 'function';
    const correctGuess = 'array';

    takeTurn(incorrectGuess, round);
    takeTurn(correctGuess, round);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it('should determine whether the guess is correct or not', function() {
    const correctResult = evaluateGuess('object', 'object');
    const incorrectResult = evaluateGuess('object', 'array');

    expect(correctResult).to.equal('correct!');
    expect(incorrectResult).to.equal('incorrect!');
  })

  it('should return feedback regardless of whether the guess is incorrect or not', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck([card1, card2]);
    const round = createRound(deck);

    const incorrectGuess = 'function';
    const correctGuess = 'array';

    incorrectFeedback = takeTurn(incorrectGuess, round);
    correctFeedback = takeTurn(correctGuess, round);

    expect(incorrectFeedback).to.equal('incorrect!');
    expect(correctFeedback).to.equal('correct!');
  })

  it('should be able to calculate the percentage of correct guesses', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    const incorrectGuess = 'function';
    const correctGuess = 'array';
    const anotherCorrectGuess = 'mutator method';

    takeTurn(incorrectGuess, round);
    takeTurn(correctGuess, round);
    takeTurn(anotherCorrectGuess, round);

    const percentage = calculatePercentageCorrect(round);

    expect(percentage).to.equal(67);
  })

  it('should be able to end the round and announce the percentage correct', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    const incorrectGuess = 'function';
    const correctGuess = 'array';
    const anotherCorrectGuess = 'mutator method';

    takeTurn(incorrectGuess, round);
    takeTurn(correctGuess, round);
    takeTurn(anotherCorrectGuess, round);

    const endMessage = endRound(round);
    expect(endMessage).to.deep.equal(`** Round over! ** You answered 67% of the questions correctly!`)
  })
})