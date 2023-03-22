const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn;
  let card2;
  let turn2;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    turn2 = new Turn('array', card2);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should take in two arguments', function() {
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should have a method that returns the guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
    const turn2 = new Turn('otter', card);
    expect(turn2.returnGuess()).to.equal('otter');
  });  

  it('should have a method that returns the Card', function() {
    expect(turn.returnCard()).to.equal(card);
    expect(turn2.returnCard()).to.equal(card2);
  });  

  it('should have a method that returns a boolean indicating if the guess matches the correct answer', function() {
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that gives feedback based on the guess', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});