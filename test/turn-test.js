const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  it('should start with two arguments one that is a string and on that is a card', function() {
    const guess = 'pug';
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn(guess, card);
    expect(turn.guess).to.equal(guess);
    expect(turn.card).to.equal(card);
  });
  it('should return a guess' , function(){
    const guess = 'pug';
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn(guess, card)
    turn.returnGuess();
    expect(turn.guess).to.deep.equal('pug');
  });
  it('should return a card' , function(){
    const guess = 'pug';
    const card = new Card()
    const turn = new Turn(guess, card);
    turn.returnCard();
    expect(turn.card).to.equal(card);
  });
  it('should evaluate true if the guess is correct', function(){
    const guess = 'pug'
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug')
    const turn = new Turn(guess, card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });
  it('should evaluate false if guess doesnt match correct answer' , function(){
    const guess = 'pug';
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn(guess, card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.deep.equal(false);
  });
  it('should return Correct! if evaluateGuess is true', function(){
    const guess = 'pug'
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug')
    const turn = new Turn(guess, card);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(turn.evaluateGuess()).to.deep.equal(true);
    expect(turn.giveFeedback()).to.deep.equal('Correct!');
  });
  it('should return Incorrect! if evaluateGuess is false' , function(){
    const guess = 'pug';
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn(guess, card);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(turn.evaluateGuess()).to.deep.equal(false);
    expect(turn.giveFeedback()).to.deep.equal('Incorrect!');
  });
});
