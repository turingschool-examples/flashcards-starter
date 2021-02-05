
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  beforeEach(function() {
    this.card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    this.turn = new Turn('blue crane', this.card);
  })

  it('should be instantiated with two arguments', function() {
    
    expect(this.turn.guess).to.equal('blue crane');
    expect(this.turn.card).to.be.an.instanceof(Card);
  });

  it('should return the guess', function() {
    expect(this.turn.returnGuess()).to.equal('blue crane');
  });

  it('should return the card', function() {
    expect(this.turn.returnCard()).to.equal(this.turn.card)
    expect(this.turn.returnCard()).to.be.an.instanceof(Card);
  });

  it('should return a boolean indicating if the users guess is CORRECT', function() {
    expect(this.turn.evaluateGuess()).to.equal(true);
  });

  it('should return a boolean indicating if the users guess is INCORRECT', function() {
    this.turn = new Turn('secretary bird', this.card);
    expect(this.turn.evaluateGuess()).to.equal(false);
  });

  it('should return an appropriate message if the users answer was CORRECT', function() {
    expect(this.turn.giveFeedback()).to.equal('correct!');
  });

  it('should return an appropriate message if the users answer was INCORRECT', function() {
    this.turn = new Turn('secretary bird', this.card);
    expect(this.turn.giveFeedback()).to.equal('incorrect!');
  });
});