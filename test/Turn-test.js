const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  //it should be a function
  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  //it should be an instance of Turn
  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  //it should be instantiated with 2 arguments (userGuess, Card)
  it('should take in the user\'s guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn).to.have.property('userGuess');
  });

  it('should take in an instance of Card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn).to.have.property('card');
  });

  //it should return the user's guess
  it('should return the user\'s guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  //it should return the Card
  it('should return the Card instance', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

    //it should evaluate the guess to true if correct or false if incorrect
    //create multiple instances 
  it('should return a value of true if the user\'s guess is correct', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  })

  //it should state whether the answer is correct or incorrect
});
