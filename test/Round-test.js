const expect = require('chai').expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  const card1 = new Card(1, "What is a cat?", ['flower', 'animal', 'food'], 'animal');
  const card2 = new Card(2, "What is a sandwich?", ['flower', 'animal', 'food'], 'food');
  const card3 = new Card(3, 'What is a daisy?', ['flower', 'animal', 'food'], 'flower');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  it(' should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it(' should be an object instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it(' should store the deck of cards in play', function() {
    expect(round.deck).to.deep.equal(deck);
  });

  it(' should be able to keep track of turns and incorrect guesses', function() {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it(' should be able to return the current card', function() {
    expect(round.returnCurrentCard).to.be.a('function');
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  });

  it(' should be able to take a turn', function() {
    expect(round.takeTurn).to.be.a('function');

    // how to check that new turn instance is instanceof Turn? change const to this.turn = ?
    round.takeTurn('flower');

    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[1]);
    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.takeTurn('Food');

    expect(round.turns).to.equal(2);
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[2]);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it(' should be able to calculate percentage of correct guesses', function() {
    expect(round.calculatePercentCorrect).to.be.a('function');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it(' should be able to end the round', function() {
    expect(round.endRound).to.be.a('function');
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });

});