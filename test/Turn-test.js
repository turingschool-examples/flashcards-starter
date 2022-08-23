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
    const userGuess = turn.returnGuess();

    expect(userGuess).to.equal('mutator method');
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should return the current card', () => {
    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
    expect(turn.returnCard).to.be.a('function');
  });

  it('should check if guess is the correct answer and return a boolean', () => {
    const isCorrect = turn.evaluateGuess();

    expect(isCorrect).to.be.a('boolean');
    expect(turn.evaluateGuess).to.be.a('function');

    turn.guess = 'accessor method';
    const isIncorrect = turn.evaluateGuess();

    expect(isIncorrect).to.equal(false);
  });

  it('should tell user if their guess is the correct or incorrect answer', () => {
    const positiveFeedback = turn.giveFeedback();

    expect(positiveFeedback).to.equal('Correct!');
    expect(turn.giveFeedback).to.be.a('function');

    turn.guess = 'accessor method';
    const negativeFeedback = turn.giveFeedback();

    expect(negativeFeedback).to.equal('Incorrect!');
  });
})