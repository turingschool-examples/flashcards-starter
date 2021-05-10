const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

let defaultCard;
let defaultTurn;

describe('Turn', () => {
  beforeEach(() => {
    defaultCard = new Card(new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter'));
    defaultTurn = new Turn('pug', defaultCard);
  });

  it('should be an instance of Turn', () => {
    expect(defaultTurn).to.be.an.instanceOf(Turn);
  });

  it('should have a user/s guess', () => {
    expect(defaultTurn.guess).to.equal('pug');
  });
  
  it('should have a current card', () => {
    expect(defaultTurn.currentCard).to.equal(defaultCard);
  });

  it('should return a guess', () => {
    const newGuess = defaultTurn.returnGuess();

    expect(newGuess).to.equal('pug');
  });

  it('should return a card', () => {
    const returnedCard = defaultTurn.returnCard();

    expect(returnedCard).to.equal(defaultCard);
  });

  it('should evaluate a guess', () => {
    const evaluation = defaultTurn.evaluateGuess();

    expect(evaluation).to.equal(false);  
  });

  it('should give feedback after evaluating guess', () => {
    const feedback = defaultTurn.giveFeedback();

    expect(feedback).to.equal('Incorrect!');
  });
});