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
    const turn  = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should be able to accept a guess', function() {
    const turn = new Turn('This is a guess');
    expect(turn.guess).to.equal('This is a guess')
  });

  it('should be able to accept a card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('Guess', Card);
    expect(turn.card).to.equal(Card)
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('Guess', Card);

    expect(turn.returnGuess()).to.equal('Guess')
  })

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('Guess', Card);

    expect(turn.returnCard()).to.equal(Card)
  })

  it('should be able to evaluate a guess', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('Guess', card);
    const turn2 = new Turn('object', card);

    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    turn2.evaluateGuess();
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('should be able to give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('Guess', card);
    const turn2 = new Turn('object', card);

    turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('Read a book..');
    turn2.giveFeedback();
    expect(turn2.giveFeedback()).to.equal('Great Job!')
  })
});

