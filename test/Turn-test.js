const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

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

  it('should take in two arguments', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should have a method that returns the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
    const turn2 = new Turn('otter', card);
    expect(turn2.returnGuess()).to.equal('otter');
  });  

  it('should have a method that returns the Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(card);
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn2 = new Turn('object', card2);
    expect(turn2.returnCard()).to.equal(card2);
  });  

  it('should have a method that returns a boolean indicating if the guess matches the correct answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.evaluateGuess()).to.equal(false);
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn2 = new Turn('array', card2);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that gives feedback based on the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn2 = new Turn('array', card2);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});