const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

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
    const card = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, dickhead!'], 'fuck yeah!');
    const turn = new Turn('yeah!', card);
    expect(turn.userGuess).to.equal('yeah!');
    expect(turn.currentCard).to.equal(card);
  });   

  it('should have a method that returns the guess', function() {
    const card = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, dickhead!'], 'fuck yeah!');
    const turn = new Turn('yeah!', card);
    expect(turn.returnGuess()).to.equal('yeah!');
  });  

  it('should have a method that returns the Card', function() {
    const card = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, dickhead!'], 'fuck yeah!');
    const turn = new Turn('yeah!', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method that returns a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, dickhead!'], 'fuck yeah!');
    const turn = new Turn('yeah!', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const card = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, dickhead!'], 'fuck yeah!');
    const turn = new Turn('yeah!', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});