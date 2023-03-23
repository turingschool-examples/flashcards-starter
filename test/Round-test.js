const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')

describe('Round', function() {
  let card1, card2, card3, cards, deck, turn, round;

  beforeEach(function() {
    card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object');
    card2 = new Card(2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    card3 = new Card(3,
      'What type of prototype method directly modifies the existing array?',
      ['mutator method', 'accessor method', 'iteration method'],
      'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    turn = new Turn('object', card1)
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a current card that starts with the first card in the deck', function() {
    expect(round.currentCard).to.equal(deck.cards[0]);
  });

  it('should keep number of turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should keep number of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return the player current card on any given turn', function() {
    round.takeTurn();

    expect(round.currentCard).to.equal(deck.cards[1]);

    round.takeTurn();

    expect(round.currentCard).to.equal(deck.cards[2]);
  });

  it('should add a turn to the number of turns', function() {
    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it('should make a new turn when a player makes a guess', function() {
    round.takeTurn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should add an incorrect guess to the incorrect Guesses', function() {
    round.takeTurn('function');

    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should give feed back for each guess', function() {
    expect(round.takeTurn('object')).to.equal('Correct!');
    expect(round.takeTurn('function')).to.equal('Incorrect!')
  });

  it('should give the percentage of correct guesses', function() {
    round.takeTurn('function');
    round.takeTurn('array');
    round.takeTurn('mutator method');

    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should display a message to end the game and give percentage of correct answers', function() {

    round.takeTurn('function');
    round.takeTurn('array');
    round.takeTurn('mutator method');

    expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`);
  });

});