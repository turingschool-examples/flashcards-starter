const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  
  it('should be a function', () => {
    const turn = new Turn();
    
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store user guess', () => {
    const turn = new Turn('guess');
    
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('guess');
  });

  it('should store an instance of Card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card);

    expect(card).to.be.an('object');
    expect(turn.currentCard).to.be.an.instanceOf(Card);
  });

  it('should return guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    const guess = turn.returnGuess();

    expect(guess).to.equal('array');
    expect(guess).to.be.a('string');
    expect(turn.returnGuess).to.be.a('function');
  });

  it('should return the card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
    expect(currentCard).to.be.an('object');
    expect(turn.returnCard).to.be.a('function');
  });

  it('should check if guess is the correct answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);

    const isCorrect = turn1.evaluateGuess(card);
    const isIncorrect = turn2.evaluateGuess(card);

    expect(isCorrect).to.equal(true);
    expect(isIncorrect).to.equal(false);
    expect(isCorrect).to.be.a('boolean');
    expect(turn1.evaluateGuess).to.be.a('function');
  });

  it('should tell user if their guess is the correct or incorrect answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);

    const isCorrect = turn1.giveFeedback(card);
    const isIncorrect = turn2.giveFeedback(card);

    expect(isCorrect).to.equal('Correct!');
    expect(isIncorrect).to.equal('Incorrect!');
    expect(isCorrect).to.be.a('string');
    expect(turn1.giveFeedback).to.be.a('function');
  });
})