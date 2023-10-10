const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluateGuess', function(){
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function')
  })
});

describe('evaluateGuess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return correct! for a correct guess', function() {
    const guess = 'object';
    const correctAnswer = 'object';
    expect(evaluateGuess(guess, correctAnswer)).to.equal('correct!');
  });

  it('should return incorrect! for an incorrect guess', function() {
    const guess = 'array';
    const correctAnswer = 'object';
    expect(evaluateGuess(guess, correctAnswer)).to.equal('incorrect!');
  });
});
});


describe('createDeck', function() {
  it('should return the same array passed into it', function() {
    const cards = [{id: 1}, {id: 2}];
    const result = createDeck(cards);
    expect(result).to.equal(cards);  // Checking if they reference the same array
  });
});

describe('countCards', function() {
  it('should return the number of cards in the deck', function() {
    const cards = [{id: 1}, {id: 2}];
    const result = countCards(cards);
    expect(result).to.equal(2);
  });
});

describe('createRound', function() {
  it('should initialize a round with the first card as currentCard', function() {
    const cards = [{id: 1}, {id: 2}];
    const round = createRound(cards);
    expect(round.currentCard).to.equal(cards[0]);
  });
  
  // You can add more 'it' blocks here to test other aspects of the createRound function
});

describe('takeTurn', function() {
  it('should increase the turn count by one', function() {
    const cards = [{id: 1, correctAnswer: 'Chris rules'}, {id: 2, correctAnswer: 'Wally rules'}];
    const round = createRound(cards);
    const initialTurns = round.turns;
    takeTurn(round, 'Chris rules');
    expect(round.turns).to.equal(initialTurns + 1);
  });
  
  // Similarly, you can add more 'it' blocks here to test other aspects of the takeTurn function
});
