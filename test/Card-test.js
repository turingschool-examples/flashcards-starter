const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound } = require('../src/card');

describe('createCard', () => {
  it('should be a function', () => {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluateGuess', () => {
  it("should return 'correct!' if the guess is correct", () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const userGuess = 'object';
    const turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('correct!');
  });
  it("should return 'incorrect!' if the guess is incorrect", () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const userGuess = 'array';
    const turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('incorrect!');
  })
});

describe('deck', () => {
  it('should create a deck of cards', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const deckNum = countCards(deck);
    expect(deckNum).to.equal(3);
  });
  it('should work with different size decks', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = createDeck([card1]);
    const deckNum = countCards(deck);
    expect(deckNum).to.equal(1);
  });
});

describe('round', () => {
  it('should return an object with a deck property', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });
  
  it('should return a currentCard property that is the first card in the deck', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
    expect(round.currentCard).to.equal(card1);
  });
  
  it('should return a turn property that starts as 0', () => {
    round = createRound();
    expect(round.turns).to.equal(0);
  });
});