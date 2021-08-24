const expect = require('chai').expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should take in a guess', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("pug", card);
    expect(turn.guess).to.equal("pug");
  });

  it('should instantiate a card for the current guess', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("pug", card);
    expect(turn.card).to.equal(card);
  });

  it('should return the users guess', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("pug", card);
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('pug')
  });

  it('should return the users card', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("pug", card);
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should return a boolean if the guess matches the correct answer', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("pug", card);
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return correct or incorrect depending on the guess', function() {
    const card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("pug", card);
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});