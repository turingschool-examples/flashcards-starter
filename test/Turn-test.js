const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn('object');
    expect(turn.userGuess).to.equal('object');
  });

  it('should store a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the user guess', function() {
    const turn = new Turn('object');
    turn.returnGuess('object')
    expect(turn.userGuess).to.equal('object');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)
    turn.returnCard(card)
    expect(turn.card).to.deep.equal(card);
  });

  it('should evaluate the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)
    turn.evaluateGuess()
    expect(turn.userIsCorrect).to.deep.equal(true);
  });

  it('should give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)
    turn.evaluateGuess()
    turn.giveFeedback()
    expect(turn.giveFeedback()).to.deep.equal(console.log("correct!"));
  })
});

// const fairy = new Fairy('Honeysuckle');
// fairy.makeDresses(['Daffodil', 'Tulip', 'Poppy']);
// assert.deepEqual(fairy.clothes.dresses, ['Iris', 'Daffodil', 'Tulip', 'Poppy']);

// Class methods
// Anything that updates class properties
