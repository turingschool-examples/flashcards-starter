const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  
  let card;
  let turn; 

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

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
  
  it('should give feedback for the asnwer', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
    
    turn.evaluateGuess(card);
    
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});