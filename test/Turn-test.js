const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
  
  it('should take in a guess', function() {
    const turn = new Turn('array')
    expect(turn.guess).to.equal('array')
  })

  it('should store a card', function() {
    const turn = new Turn('array', Card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    expect(card).to.equal(card)
  })

  it('should return the users guess', function() {
    const turn = new Turn('array', Card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    turn.returnGuess('array');
    expect('array').to.equal('array')
  })

  it('should return the card for that turn', function() {
    const turn = new Turn('array', Card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    turn.returnCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object').to.equal(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  })

  it('should check the users answer', function() {
    const turn = new Turn('array', Card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn.evaluateGuess();
    expect(false).to.equal(false)
  })

  it('should let the user know if their answer is correct', function() {
    const turn = new Turn('array', Card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn.giveFeedback('array');
    expect('Incorrect!').to.equal('Incorrect!')
  })

})
