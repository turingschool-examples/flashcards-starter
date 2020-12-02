const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess to the question', function() {
    const turn = new Turn('a');

    expect(turn.userGuess).to.equal('a');
  })

  it('should take a Card object as an argument', function() {
    const card = new Card(
      1, 
      'What is the largest animal in the world?', 
      ['elephant', 'blue whale', 'hippopotamus'], 
      'blue whale');
    const turn = new Turn('elephant', card);

    expect(turn.currentCard).to.deep.equal(card);
  })

  it('should return the user\'s guess', function() {
    const turn = new Turn('b')

    expect(turn.returnGuess()).to.equal('b');
  })

  it('should return the user\'s guess', function() {
    const turn = new Turn('b')

    expect(turn.returnGuess()).to.equal('b');
  })

  it('should return the Card instance', function() {
    const card = new Card(
      1, 
      'What is the largest animal in the world?', 
      ['elephant', 'blue whale', 'hippopotamus'], 
      'blue whale');
    const turn = new Turn('elephant', card);

    expect(turn.returnCard()).to.deep.equal(card);
  })

  it('should return a boolean based on correct answer', function() {
    const card = new Card(
      1, 
      'What is the largest animal in the world?', 
      ['elephant', 'blue whale', 'hippopotamus'], 
      'blue whale');
    const turn = new Turn('blue whale', card);

    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should return either "incorrect!" or "correct!"', function() {
    const card = new Card(
      1, 
      'What is the largest animal in the world?', 
      ['elephant', 'blue whale', 'hippopotamus'], 
      'blue whale');
    const turn = new Turn('hippopotamus', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
});

