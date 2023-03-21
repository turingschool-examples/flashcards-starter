const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.guess).to.equal('object');
    // expect(card.answers).to.include(turn.guess);
  });  

  it('should store a card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.card).to.equal(card);
  });

  it('should be able to evaluate guesses as true or false', function()  {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    // console.log(turn);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to return true guesses as correct and false guesses as incorrect', function()  {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal("correct!");
  });
});