const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });
  it('should evaluate whether a guess is correct', function() {
    const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = evaluateGuess('sea otter', card);

    expect(turn).to.equal('correct!');
  });
  it('should evaluate whether a guess is incorrect', function() {
    const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = evaluateGuess('capybara', card);

    expect(turn).to.equal('incorrect!');
  });
});