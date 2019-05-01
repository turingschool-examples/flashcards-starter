const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of the Turn class', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store the card\'s correct guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');
    expect(turn.guess).to.equal(card.correctAnswer);
  });

  it('should return the player\'s guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'function');
    turn.returnGuess();
    expect(turn.guess).to.equal('function');
  });

  //it should return the whole card instance
  it('should return the current card object to the player', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'function');
    turn.returnCard(card);
    expect(turn.card).to.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
  });

  //it should return a boolean if the guess matches or not
  it.skip('should evaluate a true/false comparison of the player\'s guess and the correct answer', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'function');
    turn.evaluateGuess();
    expect((turn.guess === card.correctAnswer)).to.equal(true);
  });

  //it should give feedback
  it.skip('should give correct! or incorrect! feedback to the player', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'function');
    turn.giveFeedback();
    expect().to.equal();
  });

});