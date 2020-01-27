const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a user guess and the current card', function() {
    const card = new Card(1, 'what is my favorite color?', ['red', 'blue', 'yellow'], 'yellow');
    const turn = new Turn('yellow', card);
    expect(turn.userGuess).to.equal('yellow');
    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the inputted guess', function() {
    const card = new Card(1, 'what is my favorite color?', ['red', 'blue', 'yellow'], 'yellow');
    const turn = new Turn('yellow', card);
    expect(turn.returnGuess()).to.equal('yellow');
  });

  it('should be able to return the inputted card', function() {
    const card = new Card(1, 'what is my favorite color?', ['red', 'blue', 'yellow'], 'yellow');
    const turn = new Turn('yellow', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate whether the guess is correct or incorrect', function() {
    const card = new Card(1, 'what is my favorite color?', ['red', 'blue', 'yellow'], 'yellow');
    const turn = new Turn('yellow', card);
    const turnTwo = new Turn('red', card);
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turnTwo.evaluateGuess()).to.equal(false);
  });

  it('should be able to provide feedback on whether a guess is correct or incorrect', function() {
    const card = new Card(1, 'what is my favorite color?', ['red', 'blue', 'yellow'], 'yellow');
    const turn = new Turn('yellow', card);
    const turnTwo = new Turn('red', card);
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turnTwo.giveFeedback()).to.equal('incorrect!');
  });
});
