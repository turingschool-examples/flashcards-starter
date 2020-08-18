const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let turn;
  let turn2;
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  beforeEach(() => {
    turn = new Turn('object', card);
    turn2 = new Turn('method', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 
  
  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('object');
  });

  it('should store what the current card in play is', function() {
    expect(turn.card).to.equal(card);
  });

  it('should have a method to return a user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should have a method to return the current card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method indicating if a user\'s guess matches the correct answer on a card', function() {
    expect(turn.evaluateGuess()).to.be.true;
  });

  it('should return false if a user\'s guess does not match the correct answer on a card', function() {
    expect(turn2.evaluateGuess()).to.be.false;
  });

  it('should have a method return a message \'correct!\' if a guess is correct', function() {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return the message \'incorrect!\' if a guess is incorrect', function() {
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});