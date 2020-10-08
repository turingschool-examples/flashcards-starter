const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1, card2, card3, flashcards, deck;

  beforeEach (function() {
    card1 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(9, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card3 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    flashcards = [card1, card2, card3];
    deck = new Deck(flashcards);
  });

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the top card of the Deck object', function() {
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should update turn count when user takes a turn', function() {
    const round = new Round(deck);

    round.takeTurn('1')
    round.takeTurn('object')

    expect(round.turns).to.equal(2);
  });

  it('should set current card to the next card in the deck after user takes a turn', function() {
    const round = new Round(deck);

    round.takeTurn('1')

    expect(round.deck.cards[0]).to.equal(card2);
    expect(round.turns).to.equal(1);
  });

  it('should evaluate guess and return feedback', function() {
    const round = new Round(deck);

    let result1 = round.takeTurn('object')

    let result2 = round.takeTurn('capybara')

    expect(result1).to.equal('Correct!');
    expect(result2).to.equal('Incorrect...');
    expect(round.deck.cards[0]).to.equal(card3);
    expect(round.turns).to.equal(2);
  });

  it('should store incorrect guesses by card id', function() {
    const round = new Round(deck);

    round.takeTurn('bananas')
    round.takeTurn('capybara')

    expect(round.deck.cards[0]).to.equal(card3);
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([3, 9]);
  });

  it('should calculate percentage of correct guesses', function() {
    const round = new Round(deck);

    round.takeTurn('bananas')
    round.takeTurn('capybara')
    round.takeTurn('gallbladder')

    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should return a message ending round and percentage of correct guesses', function() {
    const round = new Round(deck);

    round.takeTurn('bananas')
    round.takeTurn('capybara')
    round.takeTurn('gallbladder')

    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });
});
