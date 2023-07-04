const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', () => {
  let card, correctGuess, incorrectGuess;

  beforeEach('init card', () => {
    card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object',
    );

    correctGuess = evaluateGuess('object', card.correctAnswer);
    incorrectGuess = evaluateGuess('array', card.correctAnswer);
  });

  it('should be a function', () => {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', () => {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?',
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  it.skip('should create a card and its properties', function () {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?',
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  it.skip('should return Correct! if the guess is correct', () => {
    expect(correctGuess).to.equal('Correct');
  });

  it.skip('should return Incorrect! if the guess is incorrect', () => {
    expect(incorrectGuess).to.equal('Incorrect');
  });
});
