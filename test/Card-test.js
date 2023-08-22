const chai = require('chai');
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
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

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?'
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('guess', function () {
  // evaluate Guess, see if it matches with answer
  // return incorrect or correct
  it('should check to see if the guess is correct', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const guess = 'object';
    let guessResult = evaluateGuess(guess, card.correctAnswer);

    expect(guessResult).to.equal('Correct');
  });

  it('should check to see if the guess is incorrect', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const guess = 'array' || 'function';
    let guessResult = evaluateGuess(guess, card.correctAnswer);

    expect(guessResult).to.equal('Incorrect');
  });
});

describe(`deck functions`, () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
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
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = createDeck([card1, card2, card3]);
  });
  it('should create an array of card objects', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should get the length of a deck', () => {
    expect(deck.cards.length).to.equal(3);
  });
});

describe('round functions', () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
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
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = createDeck([card1, card2, card3]);
  });

  it('should create a round of the game', () => {
    const gameRound = createRound(deck, 0, 0, []);
    // console.log('gameRound', gameRound);
  });
});
