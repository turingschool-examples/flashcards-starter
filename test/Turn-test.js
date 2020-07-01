const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with a user\'s guess and a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should be a function that returns the player\'s guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should be a function that returns the selected card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
    expect(turn.returnCard).to.be.a('function');
  });

  it('should return false if answer is incorrect', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return true if answer is correct', function() {
    const card = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
    const turn = new Turn('capybara', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  describe('returnFeedback', function() {
    it('should return "correct!" if answer is correct', function() {
      const card = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
      const turn = new Turn('capybara', card);

      expect(turn.returnFeedback()).to.equal('correct!');
    });

    it('should return "incorrect!" if answer is false', function() {
      const card = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
      const turn = new Turn('pug', card);

      expect(turn.returnFeedback()).to.equal('incorrect!');
    });
  });
});
