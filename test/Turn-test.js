const expect = require('chai').expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn, card;

  beforeEach(function() {
    card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    turn = new Turn('array', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess and a card', function() {
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    })
  });

  it('should be able to return the guess', function() {
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should be able to return the card', function() {
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    })
  });

  it('should be able to evaluate the guess', function() {
    const turn1 = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback', function() {
    const turn1 = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn1.giveFeedback()).to.equal('correct!');
  });
});
