const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card, turn, turn2;

beforeEach(() => {
  card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  turn = new Turn('object', card);
  turn2 = new Turn('array', card);
})

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should accept a guess', function() {
    expect(turn.guess).to.equal('object');
  });  

  it('should accept a card object', function() {
    expect(card).to.equal(turn.card);
  });  

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the guess to true', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  }); 

  it('should evaluate the guess to false', function() {
    expect(turn2.evaluateGuess()).to.equal(false);
  }); 

  it('should give positive feedback', function() {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should give negative feedback', function() {
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });  
});