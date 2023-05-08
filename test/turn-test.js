const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');
const { createCard } = require('../src/card');

describe('evaluateGuess', () => {
  it("should return 'correct!' if the guess is correct", () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const userGuess = 'object';
    const turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('correct!');
  });
  it("should return 'incorrect!' if the guess is incorrect", () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const userGuess = 'array';
    const turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('incorrect!');
  })
});
