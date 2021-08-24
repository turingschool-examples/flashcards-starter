const expect = require('chai').expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should take two arguments, a string (question) and a Card object', function() {
    const turn = new Turn('user\'s guess to the question', new Card());
    expect(turn.userGuess).to.be.a('string');
    expect(turn.card).to.be.an.instanceof(Card);
  })
  
  it('should return the user\'s guess', function() {
    const turn = new Turn('user\'s guess', new Card());
    expect(turn.returnGuess).to.be.a('function');
    expect(turn.returnGuess()).to.be.equal(turn.userGuess);
  })

  it('should evaluate the user\'s guess', function() {
    const turn = new Turn('object', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess()).to.be.equal(true);

    const newTurn = new Turn('string', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    expect(newTurn.evaluateGuess()).to.be.equal(false);
  })

  it('should give feed back', function() {
    const turn = new Turn('object', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.be.equal('correct!');

    const newTurn = new Turn('string', new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    newTurn.evaluateGuess();
    expect(newTurn.giveFeedback()).to.be.equal('incorrect!')
  })
})