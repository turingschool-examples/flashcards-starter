const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  
  let card;
  let turn; 

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  })

  it('should be an instance of turn', () => {
    expect(turn.guess).to.equal('sea otter');
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the current guess', () => {
    expect(turn.returnGuess()).to.equal('sea otter');
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should check if the guess is correct', () => {
    expect(turn.evaluateGuess(card)).to.equal(true);
  });

  it('should check if the guess is inncorrect', () => {
    turn = new Turn('pug', card);
    expect(turn.evaluateGuess(card)).to.equal(false);
  })
  
  it('should give feedback for correct answer', () => {
    turn.evaluateGuess(card);
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should give feedback for the incorrect asnwer', () => {
    turn = new Turn('pug', card);
    
    turn.evaluateGuess(card);
    expect(turn.giveFeedback()).to.equal('Incorrect! The correct answer is sea otter.');
  });
});