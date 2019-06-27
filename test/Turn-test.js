const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

var turn, card, turn1, turn2;

describe('Turn', function() {

  beforeEach(function() {
turn = new Turn('guess that is a string', card);
card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
turn1 = new Turn('guess that is a string', card);
turn2 = new Turn('object', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user/s guess to the question', function() {
    expect(turn.guess).to.equal('guess that is a string');
  });

  it('should store a Card Object for the current card in play', function() {
    expect(turn.card).to.eql(card);
  });

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('guess that is a string');
  });

it('should return the card / Card Object', function() {
    expect(turn.returnCard()).to.eql(card);
  });

it('it should evaluate if the user/s guess matches the correct answer on the card and return a boolean', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

it('it should return a message to the user giving feedback on guess', function() {
    expect(turn1.giveFeedBack()).to.equal('incorrect!');
    expect(turn2.giveFeedBack()).to.equal('correct!');
  });

  });