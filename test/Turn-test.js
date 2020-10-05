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

  it('should take the user guess as the first argument', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug');

    expect(turn.guess).to.equal('pug');
  });

  it('guess argument should be a string', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug');

    expect(turn.guess).to.be.a('string');
  });

  it('should take a Card object as the second argument', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.card).to.deep.equal(card);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the current card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate an incorrect guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to evaluate a correct guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to give incorrect answer feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should be able to give correct answer feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('correct!');
  })

})
