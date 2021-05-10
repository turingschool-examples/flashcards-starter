const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Turn', () => {

  let defaultCard;
  let defaultTurn;

  beforeEach(() => {
    defaultCard = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    defaultTurn = new Turn('pug', defaultCard);
  });

  it('should be an instance of Turn', () => {
    expect(defaultTurn).to.be.an.instanceOf(Turn);
  });

  it('should have a user/s guess', () => {
    expect(defaultTurn.guess).to.equal('pug');
  });
  
  it('should have a current card', () => {
    expect(defaultTurn.card).to.equal(defaultCard);
  });

  it('should return a guess', () => {
    const newGuess = defaultTurn.returnGuess();

    expect(newGuess).to.equal('pug');
  });

  it('should return a card', () => {
    const returnedCard = defaultTurn.returnCard();

    expect(returnedCard).to.equal(defaultCard);
  });

  describe('when guess is correct', () => {
    beforeEach(() => {
      defaultCard = new Card(1, 'What is Robbie\'s favorite animal', 
        ['sea otter', 'pug', 'capybara'], 'sea otter');
      defaultTurn = new Turn('sea otter', defaultCard);
    }); 

    it('should evaluate a guess as true', () => {
      const trueEvaluation = defaultTurn.evaluateGuess();

      expect(trueEvaluation).to.equal(true);  
    });

    it('should give feedback after evaluating guess', () => {
      const correctFeedback = defaultTurn.giveFeedback();

      expect(correctFeedback).to.equal('Correct!');
    });
  });

  describe('when guess is incorrect', () => {
    beforeEach(() => {
      defaultCard = new Card(1, 'What is Robbie\'s favorite animal', 
        ['sea otter', 'pug', 'capybara'], 'sea otter');
      defaultTurn = new Turn('pug', defaultCard);
    }); 

    it('should evaluate a guess as false', () => {
      const falseEvaluation = defaultTurn.evaluateGuess();

      expect(falseEvaluation).to.equal(false);  
    });

    it('should give feedback after evaluating guess', () => {
      const incorrectFeedback = defaultTurn.giveFeedback();

      expect(incorrectFeedback).to.equal('Incorrect!');
    });
  });
});