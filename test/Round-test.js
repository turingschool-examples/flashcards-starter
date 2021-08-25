const assert = require('chai').assert;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;
  let guess;
  let myTurn;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  })

  it('should be a function', function() {
    assert.isFunction(Round);
  })

  it('should be an instance of Round', function() {
    assert.instanceOf(round, Round);
  })

  it('should hold a deck of cards', function() {
    assert.deepEqual(round.deck.cards, cards);
  })

  it('should show the card being played', function() {
    let cardPlayed = round.returnCurrentCard();

    assert.equal(cardPlayed, card1);
  })

  it('should start at zero turns', function() {
    assert.equal(round.turns, 0);
  })

  it('should be able to take a turn', function() {
    guess = "sea otter";
    myTurn = round.takeTurn(guess);

    assert.equal(round.turns, 1);
    assert.equal(round.currentCard, deck.cards[1]);
    assert.equal(round.incorrectGuesses[0], undefined);
    assert.equal(myTurn, "correct!");
  })

  it('should register an incorrect guess', function() {
    guess = "pug";
    myTurn = round.takeTurn(guess);

    assert.equal(round.turns, 1);
    assert.equal(round.currentCard, deck.cards[1]);
    assert.equal(round.incorrectGuesses[0], card1.id);
    assert.equal(myTurn, "incorrect!");
  })

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn("capybara");
    round.takeTurn("appendix");
    round.takeTurn("playing with bubble wrap");

    let percentCorrect = round.calculatePercentCorrect();

    assert.equal(percentCorrect, 33);
  })

  it('should announce the end of a round', function() {
    round.takeTurn("capybara");
    round.takeTurn("appendix");
    round.takeTurn("playing with bubble wrap");

    let completedRound = round.endRound();

    assert.equal(completedRound, "** Round over! ** You answered 33% of the questions correctly!")
  })
})
