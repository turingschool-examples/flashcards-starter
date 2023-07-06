const chai = require('chai');
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
} = require('../src/card');

describe('card', () => {
  let card, correctGuess, incorrectGuess;

  beforeEach('init card', () => {
    card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object',
    );

    correctGuess = evaluateGuess('object', card.correctAnswer);
    incorrectGuess = evaluateGuess('array', card.correctAnswer);
  });

  it('should be a function', () => {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', () => {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?',
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  it('should create a card and its properties', () => {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?',
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  it('should return Correct! if the guess is correct', () => {
    expect(correctGuess).to.equal('Correct!');
  });

  it('should return Incorrect! if the guess is incorrect', () => {
    expect(incorrectGuess).to.equal('Incorrect!');
  });
});

describe('deck', () => {
  let card1, card2, card3, deck, deckCount;

  beforeEach('init cards', () => {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter',
    );

    card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder',
    );

    card3 = createCard(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald',
    );

    deck = createDeck([card1, card2, card3]);

    deckCount = countCards(deck);
  });

  it('should be created as an array of card objects', () => {
    expect(deck).to.be.an('array');
  });

  it('should know how many cards are in the deck', () => {
    expect(deckCount).to.equal(3);
  });
});
