const chai = require('chai');
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
} = require('../src/card');

const {
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('../src/round')

const { card1, card2, card3, deck } = require('../test/subdata');

describe('createCard', function () {
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

describe('evaluateGuess', function () {
  it('should return correct! if guess is correct', function () {
    expect(evaluateGuess(card1.answers[2], card1.correctAnswer)).to.equal('correct!');
  });
  it('should return incorrect! if guess is incorrect', function () {
    expect(evaluateGuess(card1.answers[0], card1.correctAnswer)).to.equal('incorrect!');
  });
});

describe('createDeck', function () {
  it('should create a deck of cards given as parameters', function () {
    expect(createDeck([card1, card2, card3])).to.deep.equal(deck);
  });
});

describe('countCards', function () {
  it('should be able to count the cards in a deck', function () {
    expect(countCards(deck)).to.equal(3);
  });
});

describe('createRound', function () {
  const round = createRound(deck);

  it('should create a round object', function () {
    expect(createRound(deck)).to.be.a('object');
  });
  it('should have a deck property that holds the deck object', function () {
    expect(round.deck).to.deep.equal(deck);
  });
  it('should have a currentCard property that should start as the first card in the deck', function () {
    expect(round.currentCard).to.deep.equal(card1);
  });
  it('should have a turns property that starts at 0', function () {
    expect(round.turns).to.equal(0);
  });
  it('should have an incorrectGuesses property that starts as an empty array', function () {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe('takeTurn', function () {
  const round = createRound(deck);

  it('should return incorrect! when the answer is wrong', function () {
    expect(takeTurn('Seattle', round)).to.deep.equal('incorrect!');
  });
  it('should update round.turns to increment by 1 from the previous number', function () {
    expect(round.turns).to.equal(1);
  });
  it('should change round.currentCard to the next card in the deck', function () {
    expect(round.currentCard).to.equal(deck[1]);
  });
  it('should push an ID of a card into round.incorrectGuesses if the guess is wrong', function () {
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
  it('should return correct! when answer is right', function () {
    expect(takeTurn('Salem', round)).to.deep.equal('correct!');
  });
});



describe('calculatePercent', function () {
  const round = createRound(deck);
  takeTurn('Seattle', round);
  takeTurn('Salem', round);
  takeTurn('Boise', round);
  const percent = calculatePercentCorrect(round);

  it('should calculate a percentage of correct guesses', function () {
    expect(percent).to.equal('67%');
  });
});

describe('endRound', function () {
  const round = createRound(deck);
  takeTurn('Seattle', round);
  takeTurn('Salem', round);
  takeTurn('Boise', round);
  const endMessage = endRound(round);

  it('should print the end-game message', function () {
    expect(endMessage).to.equal('** Round over! ** You answered 67% of the questions correctly!');
  });
});
