const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function () {
  it('should be a function', function () {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?'
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('turn', function () {
  beforeEach(function () {
    const card = createCard(
      2,
      'What is the capitol of Washington State?',
      ['Toronto', 'Seattle', 'Olympia'],
      'Olympia'
    );
    const wrongGuess = card.answers[1];
    const rightGuess = card.answers[2];
    const correctGuess = card.correctAnswer;
  });  

  it('should return correct! if guess is correct', function () {

    expect(evaluateGuess(rightGuess, correctGuess)).to.equal('correct!');
  });
  it('should return incorrect! if guess is incorrect', function () {

    expect(evaluateGuess(wrongGuess, correctGuess)).to.equal('incorrect!');
  });
});
