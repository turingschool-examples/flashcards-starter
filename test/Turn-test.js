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
  it('should be instantiated with two arguments', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card.answers[0], card);
    expect(turn.guess).to.deep.equal(card.answers[0]);
    expect(turn.card).to.deep.equal(card)
  }); 

  it('returnGuess should return the guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card.answers[0], card);
    expect(turn.returnGuess()).to.deep.equal(card.answers[0])
  });

  it('returnCard should return the card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card.answers[0], card);
    expect(turn.returnCard()).to.deep.equal(card)
  });

  it('evaluateGuess should return boolean indicating if guess matches correct answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card.answers[0], card);
    expect(turn.evaluateGuess()).to.be.a('boolean')
  });

  it('giveFeedback should return‘correct!’', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card.answers[0], card);
    expect(turn.giveFeedback()).to.equal('correct!')
  });

  it('giveFeedback should return ‘incorrect!’', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card.answers[1], card);
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });

});