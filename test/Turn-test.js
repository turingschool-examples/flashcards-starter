const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  let newTurn;

  this.beforeEach(() => {
    newTurn = new Turn('guess', card);
  });

  it('should instantiate a new Turn', function() {
    expect(newTurn).to.be.an.instanceOf(Turn);
  });

  it('should be instantiated with a guess as its first argument', function() {
    expect(newTurn.guess).to.equal('guess');
  });

  it('should be instantiated with the current Card as its second argument', function() {
    expect(newTurn.card).to.equal(card);
  });

  it('should have a method returnGuess that returns the guess', function() {
    expect(newTurn.returnGuess()).to.equal('guess');
  });

  it('should have a method returnCard that returns the current Card', function () {
    expect(newTurn.returnCard()).to.equal(card);
  });

  it('should have a method evaluateGuess that compares the user guess to the correct answer on the current Card', function() {
    // Going to need to think about how to test this. I am going to leave this as an assumed false.
    expect(newTurn.evaluateGuess()).to.equal(false);
  });

  it('should have a method giveFeedback that returns a string based on whether or not the user guess is correct', function() {
    // Same as above test, assuming a false answer.
    expect(newTurn.giveFeedback()).to.equal('incorrect!');
  });

});