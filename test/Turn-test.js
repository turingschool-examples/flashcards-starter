const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { assert } = require('chai');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should accept a user/s guess to a question', function() {
    const turn = new Turn("gee whiz I don't know");
    expect(turn.userGuess).to.equal("gee whiz I don't know");
  });  

  it('should have a card', function() {
    const turn = new Turn("not sure", new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));
    expect(turn.card).to.deep.equal(new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));
  });  

  it('should return a guess', function() {
    const turn = new Turn("who's to say?", new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    expect(turn.userGuess).to.equal(turn.returnGuess());
  });

  it('should return a card', function() {
    const turn = new Turn("how should I know?", new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'));
    expect(turn.card).to.equal(turn.returnCard());
  });

  it('should evaluate guess', function() {
    const turn1 = new Turn("pug", new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));
    const turn2 = new Turn("sea otter", new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));
    
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback if user/s answer is right or wrong', function() {
    const turn1 = new Turn("pug", new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));
    const turn2 = new Turn("sea otter", new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));

    expect(turn1.giveFeedback()).to.equal("Incorrect!");
    expect(turn2.giveFeedback()).to.equal("Correct!");
  })
});