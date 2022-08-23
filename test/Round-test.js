const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  it ('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  let card;
  let card2;
  let card3;
  let deck;
  let deck2;
  let round;
  let round2;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    deck = new Deck([card, card2, card3]);
    deck2 = new Deck([card3, card2, card]);
    round = new Round(deck);
    round2 = new Round(deck2);
  });

  it ('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it ('should store a deck of cards', () => {
    expect(round.deck).to.deep.equal([card, card2, card3]);
  });

  it ('should store current card as first card in the deck at the start of the round', () => {
    expect(round.currentCard).to.equal(card);
    expect(round2.currentCard).to.equal(card3);
  });

  it ('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
    expect(round2.returnCurrentCard()).to.equal(round2.currentCard);
  });

  it ('should start with 0 turns recorded', () => {
    expect(round.turns).to.equal(0);
  });

  it ('should start with no incorrect guesses recorded', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it ('should be update turn count when a turn is taken', () => {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);

    round.takeTurn('hooks');
    expect(round.turns).to.equal(2);
  });

  it('should reassign the current card to the next card in the deck after a turn', () => {
    expect(round.currentCard).to.equal(card);
    expect(round2.currentCard).to.equal(card3);

    round.takeTurn('object');
    round2.takeTurn('array');
    round2.takeTurn('hooks');

    expect(round.currentCard).to.equal(card2);
    expect(round2.currentCard).to.equal(card);
  });

  it ('should evaluate a user guess and store incorrect guesses via id', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round2.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('object');
    round2.takeTurn('object');
    round2.takeTurn('Mocha');

    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round2.incorrectGuesses).to.deep.equal([3, 2])
  });

  it ('should return feedback regarding whether or not guess is correct', () => {
    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.takeTurn('hooks')).to.equal('correct!');
    expect(round2.takeTurn('object')).to.equal('incorrect!');
    expect(round2.takeTurn('Mocha')).to.equal('incorrect!');
  });

  it ('should calculate and return the percentage of correct guesses', () => {
    expect(round.calculatePercentCorrect()).to.equal(0);

    round.takeTurn('object');
    round.takeTurn('hooks');
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(67);

    round2.takeTurn('object');
    round2.takeTurn('hooks');
    expect(round2.calculatePercentCorrect()).to.equal(50);
  });

  it ('should alert a user when the round is over and of their percentage correct', () => {
    // not sure how to test console output with Chai syntax without requiring
    // something called, 'mocha-sinon'? used variable return for testing solution for now
    round.takeTurn('object');
    round.takeTurn('hooks');
    round.takeTurn('object');
    round2.takeTurn('object');
    round2.takeTurn('hooks');

    expect(round.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!`)
    expect(round2.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  })
});
