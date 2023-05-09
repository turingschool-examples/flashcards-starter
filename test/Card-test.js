const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countDeck } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function')
  });

  it('should return correct if the guess is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = 'object'
    let evaluate = evaluateGuess(guess,card)
    expect(evaluate).to.deep.equal('correct!')
  });

  it('should return incorrect if the guess is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = 'array'
    let evaluate = evaluateGuess(guess,card)
    expect(evaluate).to.deep.equal('incorrect!')
  });

});

describe('deck', function() {
  it('should create an array of card objects', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-seperated list of related values?', ['array','object','function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let cards = [card1,card2,card3];
    let deck = createDeck(cards)
  expect(createDeck([card1,card2,card3])).to.deep.equal({cards:[card1,card2,card3]})
  });
});

describe('countDeck', function() {
  it('should count the number of cards in the deck object', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-seperated list of related values?', ['array','object','function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let cards = [card1,card2,card3];
    let deck = createDeck(cards)
    countDeck(deck)
    expect(countDeck(deck)).to.deep.equal(3)
  });
});