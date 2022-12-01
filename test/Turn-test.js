const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const testData = require('../src/testData');

describe('Turn', function() {
  
  let newTurn = Object.prototype;
  let card = Object.prototype;

  this.beforeEach(() => {
    card = testData.cards[0];
    newTurn = new Turn('array', card);
  });

  it('should instantiate a new Turn', function() {
    expect(newTurn).to.be.an.instanceOf(Turn);
  });

  it('should be instantiated with a guess as its first argument', function() {
    expect(newTurn.guess).to.equal('array');
  });

  it('should be instantiated with the current Card as its second argument', function() {
    expect(newTurn.card).to.equal(card);
  });

  it('should have a method returnGuess that returns the guess', function() {
    expect(newTurn.returnGuess()).to.equal('array');
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