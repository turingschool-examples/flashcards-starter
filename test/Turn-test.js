const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should contain the user guess and the current card', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    //Execution
    const turn = new Turn('object', card)
    //Assertion
    expect(turn.userGuess).to.equal('object');
    expect(turn.card).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
  })

  it('should return the player guess', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn("object", card)
    //Execution
    turn.returnGuess();
    //Assertion
    expect(turn.returnGuess()).to.equal('object')
  })

  it('should return the current card in play', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn("object", card)
    //Execution
    turn.returnCard();
    //Assertion
    expect(turn.returnCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
  })

  it('should evaluate if the player guess was correct', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn("object", card);
    //Execution
    turn.evaluateGuess();
    //Assertion
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should give positive feedback if player guess is correct', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn("object", card);
    //Execution
    turn.giveFeedback();
    //Assertion
    expect(turn.giveFeedback()).to.equal('Correct!')
  })

  it('should give negative feedback if player answer is wrong', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn("array", card);
    //Execution
    turn.giveFeedback();
    //Assertion
    expect(turn.giveFeedback()).to.equal('Incorrect')
  })
});
