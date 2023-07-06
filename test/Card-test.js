const chai = require('chai');
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  initRoundController,
  takeTurn,
  calculatePercentCorrect,
} = require('../src/card');

/* ----------- CARD ----------- */

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

/* ----------- DECK ----------- */

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

/* ----------- ROUND CONTROLLER ----------- */

describe('round controller', () => {
  let card1, card2, card3, deck, round;

  beforeEach('init round controller', () => {
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

    round = initRoundController(deck);
  });

  it('should contain the deck array', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should hold state of current card', () => {
    expect(round.currentCard).to.deep.equal(deck[0]);
  });

  it('should initialize turns to 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should contain an incorrectGuesses array', () => {
    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses).to.be.empty;
  });
});

/* ----------- TAKING A TURN ----------- */

describe('taking a turn', () => {
  let card1, card2, card3, deck, round;

  beforeEach('init round controller', () => {
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

    round = initRoundController(deck);
  });

  it('should update the turn count', () => {
    takeTurn('sea otter', round);
    takeTurn('appendix', round);

    expect(round.turns).to.equal(2);
  });

  it('should update the turn count even when guess is incorrect', () => {
    takeTurn('capybara', round);

    expect(round.turns).to.equal(1);
  });

  it('should not pass in an id to incorrectGuesses if guess is correct', () => {
    takeTurn('sea otter', round);

    expect(round.incorrectGuesses).to.be.empty;
  });

  it('should pass in an id to incorrectGuesses if guess is incorrect', () => {
    takeTurn('capybara', round);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('updates currentCard after guess', () => {
    takeTurn('sea otter', round);

    expect(round.currentCard).to.equal(deck[1]);
  });

  it('should provide feedback on whether guess was correct or incorrect', () => {
    const correctGuess = takeTurn('sea otter', round);
    const incorrectGuess = takeTurn('appendix', round);

    expect(correctGuess).to.equal('Correct!');
    expect(incorrectGuess).to.equal('Incorrect!');
  });

  it('should calculate the percentage of correct guesses', () => {
    takeTurn('sea otter', round); // correct
    takeTurn('appendix', round); // incorrect

    const correctGuessPercent = calculatePercentCorrect(round);

    expect(correctGuessPercent).to.equal(50);
  })
});
