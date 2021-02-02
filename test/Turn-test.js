const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('it should store a userGuess', function() {
    const turn = new Turn('test guess');
    expect(turn.userGuess).to.equal('test guess');
  });

// how do I check if its a object and not just a string.
  it.skip('it should store a instance of Card', function() {
    const card = new Card(1, 'Question', ['One', 'Two', 'Answer'], 'Answer');
    const turn = new Turn('test guess', card);
    expect(turn.currentCard).to.deep.equal(card);
    expect(turn.currentCard).to.be.an.instanceof(Card);
  });

  it.skip('it should be able to return a card', function() {
    const card = new Card(1, 'Question', ['One', 'Two', 'Answer'], 'Answer');
    const turn = new Turn('test guess', card);
    expect(turn.returnCard).to.equal(card);
    expect(turn.returnCard).to.be.an.instanceof(Card);
  });

  it.skip('it should be able to return a user guess', function() {
    const card = new Card(1, 'Question', ['One', 'Two', 'Answer'], 'Answer');
    const turn = new Turn('Answer', card);
    expect(turn.returnGuess).to.equal('Answer');
  });

  it.skip('it should be able to check user guess to the card answer', function() {
    const card = new Card(1, 'Question', ['One', 'Two', 'Answer'], 'Answer');
    const turn = new Turn('Answer', card);
    const turnTwo = new Turn('One', card);
    expect(turn.evaluateGuess).to.equal(true);
    expect(turnTwo.evaluateGuess).to.equal(false);
  });

  it.skip('it should give feedback based on guess results', function() {
    const card = new Card(1, 'Question', ['One', 'Two', 'Answer'], 'Answer');
    const turn = new Turn('Answer', card);
    const turnTwo = new Turn('One', card);
    expect(turn.giveFeedback).to.equal('correct!');
    expect(turnTwo.giveFeedback).to.equal('incorrect!');
  });

});
