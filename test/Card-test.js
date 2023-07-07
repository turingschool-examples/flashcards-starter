const chai = require('chai');
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards
} = require('../src/card');

describe('card', function () {
  it('should be a function', function () {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const robbieCard = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?'
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');

    expect(robbieCard.id).to.equal(1);
    expect(robbieCard.question).to.equal("What is Robbie's favorite animal");
    expect(robbieCard.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
    expect(robbieCard.correctAnswer).to.equal('sea otter');
  });

  it('should create another card and its properties', function () {
    const cardTwo = createCard(
      2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array'
    );

    expect(cardTwo.id).to.equal(2);
    expect(cardTwo.question).to.equal(
      'What is a comma-separated list of related values?'
    );
    expect(cardTwo.answers).to.deep.equal(['array', 'object', 'function']);
    expect(cardTwo.correctAnswer).to.equal('array');
  });
});

describe('turn', function () {
  it('should return correct! when the guess is correct', function () {
    const randomCard = createCard(
      3,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const guess = 'sea otter';
    const correctAnswer = randomCard.correctAnswer;
    const turn = evaluateGuess(guess, correctAnswer);

    expect(turn).to.equal('correct!');
  });

  it('should return incorrect! when the guess is incorrect', function () {
    const guess = 'pug';
    const correctAnswer = 'sea otter';
    const turn = evaluateGuess(guess, correctAnswer);

    expect(turn).to.equal('incorrect!');
  });
});

describe('deck', function () {
  let card1, card2, card3, deck;

  beforeEach(function () {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = createCard(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );

    deck = createDeck([card1, card2, card3]);
  });

  it('should create an array of card objects', function () {
    expect(deck[0].id).to.equal(1);
  });

  it('should know how many cards are in the deck', function () {
    const cardsLength = countCards(deck);

    expect(cardsLength).to.equal(3);
  });
});
