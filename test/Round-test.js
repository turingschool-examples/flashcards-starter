const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', function() {
  let card1, card2, card3
  let deck
  let turn
  let round

  beforeEach(function() {
    card1 = new Card(1, 'Question 1', ['no', 'nope', 'yes'], 'yes');
    card2 = new Card(2, 'Question 2', ['no', 'nope', 'yes'], 'no');
    card2 = new Card(3, 'Question 3', ['no', 'nope', 'yes'], 'nope');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round)
  });

  it('should take a deck as an argument', function() {
    expect(round.deck).to.be.an('object');
    expect(round.deck.cards).to.be.an('array');
  });

  it('should have the default card be the first card in the deck', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should start off with 0 turns', function() {
    expect(round.turns).to.equal(0)
  });

  it('should start off with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should be able to take a turn', function() {
    round.takeTurn('no');
    expect(round.turns).to.equal(1);
  });

  it('should record incorrect guesses', function() {
    round.takeTurn('no');
    expect(round.incorrectGuesses[0]).to.equal(1)
  });
});
