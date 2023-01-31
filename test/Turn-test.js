const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of turn', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.guess).to.equal('sea otter');
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the current guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.returnGuess()).to.equal('sea otter');
  });

  it('should return the current card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should check if the guess is correct', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.evaluateGuess(card)).to.equal(true);
  });
  
  it('should give feedback for the asnwer', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card1);
    
    turn1.evaluateGuess(card1);
    
    expect(turn1.giveFeedback()).to.equal('Incorrect!');

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    turn2.evaluateGuess(card2);
    
    expect(turn2.giveFeedback()).to.equal('Correct!');
  });

});