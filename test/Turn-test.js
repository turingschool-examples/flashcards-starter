const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    let turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess to a question', function() {
    let turn = new Turn('this guess is a string');
    expect(turn.userGuess).to.equal('this guess is a string');
  });

  it('should store a Card object for the current card in play', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('object', card);
    expect(turn.currentCard).to.deep.equal(card);
  });


  it('should be able to return the guess of the user', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('array', card);
    let result = turn.returnGuess();
    expect(result).to.equal('array');
  });

  it('should be able to return the current card', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('array', card);
    let result = turn.returnCard();
    expect(result).to.deep.equal(card);
  });

  it('should be able to return true or false depending if the user guess matches the correct answer', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('array', card);
    let turn2 = new Turn('object', card);
    let result1 = turn1.evaluateGuess();
    let result2 = turn2.evaluateGuess();
    expect(result1).to.equal(false);
    expect(result2).to.equal(true);
  });

  it('should be able to return strings, incorrent! or correct!, depending if the user guess matches the correct answer', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn1 = new Turn('array', card);
    let turn2 = new Turn('object', card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    let feedback1 = turn1.giveFeedback();
    let feedback2 = turn2.giveFeedback();
    expect(feedback1).to.equal('incorrect!');
    expect(feedback2).to.equal('correct!');
  });

});
