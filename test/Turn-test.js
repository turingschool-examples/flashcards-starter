const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
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

  it('should be able to guess an answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn("pug");
    expect(turn.guess).to.equal("pug");
  });

  it('should be able to give you a card', function() {
    const card = new Card(2, 'What is Baron\'s favorite food', ['spaghetti', 'filet', 'lobster'], 'filet');
    const turn = new Turn("lobster", card);
    expect(turn.card).to.equal(card);
  });

  it('should store a guess', function() {
    const card = new Card(3, 'What is Jomah\'s favorite hobby', ['climbing', 'snowboarding', 'hiking'], 'climbing');
    const turn = new Turn("climbing", card);
    expect(turn.returnGuess()).to.equal("climbing");
  });

  it('should store a guess', function() {
    const card = new Card(4, 'What is Karen\'s favorite color', ['baby blue', 'rose gold', 'white marble'], 'rose gold');
    const turn = new Turn("white marble", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to tell you if your guess is right', function() {
    const card = new Card(4, 'What is Cody\'s favorite band', ['Blink-182', 'Coldplay', 'Nickleback'], 'Blink-182');
    const turn = new Turn("Nickleback", card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to return incorrect if your guess is wrong', function() {
    const card = new Card(4, 'What is Baron\'s favorite rapper', ['Drake', 'Abhi the Nomad', 'The Weeknd'], 'The Weeknd');
    const turn = new Turn("The Weeknd", card);
    expect(turn.giveFeedback()).to.equal("Correct!");
  });
});
