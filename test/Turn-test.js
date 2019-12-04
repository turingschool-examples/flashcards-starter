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
    const card = new Card(1, "What is Robbie\'s favorite animal", ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn("pug", card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn("pug", card);
    expect(turn.returnGuess()).to.equal("pug");
  });

  it('should return card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn("pug", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true or false depending on users guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn("sea otter", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return feedback based on users guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn("pug", card);
    expect(turn.giveFeedback()).to.equal("Incorrect!");
  });
});
