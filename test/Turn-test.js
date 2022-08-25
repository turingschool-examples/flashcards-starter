const chai = require('chai');
const expect = chai.expect;

const flashcards = require('../src/data');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card;
  let turn; 

  beforeEach(() => {
    card = new Card(flashcards.prototypeData[2]);
    turn = new Turn('mutator method', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store user guess', () => {
    expect(turn.guess).to.equal('mutator method');
  });

  it('should have the current card', () => {
    expect(turn.currentCard).to.be.equal(card);
  });

  it('should return the user\'s guess', () => {
    const guess = turn.getGuess();

    expect(guess).to.equal('mutator method');
  });

  it('should return the current card', () => {
    const currentCard = turn.getCard();

    expect(currentCard).to.equal(card);
  });

  it('should check if guess is the correct answer and return a boolean', () => {
    const isCorrect = turn.isCorrectlyAnswered();

    expect(isCorrect).to.be.a('boolean');

    turn.guess = 'accessor method';
    const isIncorrect = turn.isCorrectlyAnswered();

    expect(isIncorrect).to.equal(false);
  });

  it('should tell user if their guess is the correct or incorrect answer', () => {
    const positiveFeedback = turn.getFeedback();

    expect(positiveFeedback).to.equal('Correct!');

    turn.guess = 'accessor method';
    const negativeFeedback = turn.getFeedback();

    expect(negativeFeedback).to.equal('Incorrect!');
  });
})