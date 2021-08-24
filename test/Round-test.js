const assert = require('chai').assert;
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let turn;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    assert.isFunction(Round);
  })

  it('should be an instance of Round', function() {
    assert.instanceOf(round, Round);
  })

  it('should hold a deck of cards', function() {
    assert.equal(round.deck.cards, deck.cards);
  })

  it('should show the card being played', function() {
    let cardPlayed = round.returnCurrentCard();

    assert.equal(cardPlayed, card1);
  })

  it('should start at zero turns', function() {
    assert.equal(round.turns, 0);
  })

  it('should be able to take a turn', function() {
    let guess = "pug";

    let myTurn = round.takeTurn(guess);

    assert.equal(round.turns, 1);
    assert.equal(round.currentCard, deck.cards[1]);
    assert.equal(round.incorrectGuesses[0], guess.id);
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
