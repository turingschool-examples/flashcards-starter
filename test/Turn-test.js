const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a players guess', function() {
    const turn = new Turn();
    turn.returnGuess('answer')
    expect(turn.playerGuess).to.equal('answer');
  });  

  it('should store a card', function() {
    const turn = new Turn();
    turn.returnCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.card).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
  }); 

  it('should evalute is guess is correct', function() {
    const turn = new Turn();
    turn.returnCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn.returnGuess('object')
    turn.evaluateGuess()
    expect(turn.evaluateGuess()).to.deep.equal(turn.giveFeedback(true));
    turn.returnGuess('wrong')
    expect(turn.evaluateGuess()).to.deep.equal(turn.giveFeedback(false));
  }); 

  it('should return feedback based on if answer is correct', function() {
    const turn = new Turn();
    expect(turn.giveFeedback(true)).to.equal('Correct!');
    expect(turn.giveFeedback(false)).to.equal('Incorrect!');
  }); 
});