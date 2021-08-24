const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should have a guess', function() {
    const card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const turn = new Turn('cocker spaniel', card);

    expect(turn.returnGuess()).to.equal('cocker spaniel');
  });

  it('should store an instance of Card', function() {
    const card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const turn = new Turn('cocker spaniel', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should return false if the guess is not the correct answer', function() {
    const card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const turn = new Turn('cocker spaniel', card);

    expect(turn.evaluateGuess()).to.equal(false)
  });

  it('should return true if the guess is the correct answer', function() {
    const card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const turn = new Turn('golden retriever', card);

    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should return the string `correct!` if the guess is right', function() {
    const card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const turn = new Turn('golden retriever', card);

    expect(turn.returnFeedback()).to.equal('correct!');
  });

  it('should return the string `incorrect!` if the guess is wrong', function() {
    const card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const turn = new Turn('cocker spaniel', card);

    expect(turn.returnFeedback()).to.equal('incorrect!');
  });
})
