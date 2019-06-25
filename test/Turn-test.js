const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user/s guess to the question', function() {
    const turn = new Turn('guess that is a string');
    expect(turn.guess).to.equal('guess that is a string');
  });

  it('should store a Card Object for the current card in play', function() {
     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
   
    const turn = new Turn('guess that is a string', Card);
    expect(turn.card).to.equal(Card);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess that is a string', card);
    expect(turn.returnGuess()).to.equal('guess that is a string');
  });

it('should return the card / Card Object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess that is a string', card);
    expect(turn.returnCard()).to.equal(card);
  });

it('it should evaluate if the user/s guess matches the correct answer on the card and return a boolean', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('guess that is a string', card);
    const turn2 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

it('it should return a message to the user giving feedback on guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('guess that is a string', card);
    const turn2 = new Turn('object', card);
    expect(turn1.giveFeedBack()).to.equal('incorrect!');
    expect(turn2.giveFeedBack()).to.equal('correct!');
  });

  });