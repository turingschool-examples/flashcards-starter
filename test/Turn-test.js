const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let newTurn = new Object();
  let card = new Object();

  this.beforeEach(() => {
    card = new Card(8, "What is the best coding language?", undefined, "JavaScript")
    newTurn = new Turn('Python', card);
  });

  it('should instantiate a new Turn', function() {
    expect(newTurn).to.be.an.instanceOf(Turn);
  });

  it('should be instantiated with a guess as its first argument', function() {
    expect(newTurn.guess).to.equal('Python');
  });

  it('should be instantiated with the current Card as its second argument', function() {
    expect(newTurn.card).to.equal(card);
  });

  it('should have a method returnGuess that returns the guess', function() {
    expect(newTurn.returnGuess()).to.equal('Python');
  });

  it('should have a method returnCard that returns the current Card', function () {
    expect(newTurn.returnCard()).to.equal(card);
  });

  it('should have a method evaluateGuess that compares the user guess to the correct answer on the current Card', function() {
    expect(newTurn.evaluateGuess()).to.equal(false);
  });

  it('should have a method giveFeedback that returns a string based on whether or not the user guess is correct', function() {
    expect(newTurn.giveFeedback()).to.equal('incorrect!');
  });

});