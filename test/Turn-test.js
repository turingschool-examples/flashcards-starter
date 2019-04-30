const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it.skip('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });  

  it.skip('should return the Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnCard()).to.equal(card);
  });  

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should give feedback on guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});