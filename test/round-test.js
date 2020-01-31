const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/deck');
const Round = require('../src/round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    card3 = new Card(3, 'Which of these is NOT a reserved word in Javascript?', ['if', 'same', 'false'], 'same');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantite a new round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the first card in the deck as the current card', function() {
    expect(round.returnCurrentCard(deck)).to.equal(card1);
  });

  it('should start of with 0 turns taken', function() {
    expect(round.turns).to.equal(0);
    round.takeTurns('object', deck);
    expect(round.turns).to.equal(1);
    round.takeTurns('mocha', deck);
    round.takeTurns('same', deck);
    expect(round.turns).to.equal(3);
  });

  it('should have the next card become the new current card', function() {
    expect(round.currentCard).to.equal(card1);
    round.takeTurns('array', deck.cardsInDeck);
    expect(round.currentCard).to.equal(card2);
    round.takeTurns('this', deck.cardsInDeck);
    expect(round.currentCard).to.equal(card3);
  });

  describe('should record/evaluate a user\'s guess', function() {
    it('should push the card\'s id of the incorrect guesses in the array storing incorrect guesses', function() {
      round.returnCurrentCard(deck);
      expect(round.currentCard).to.equal(card1);
      round.takeTurns('array', deck);
      expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('should be able to give feedback regarding whether a guess is correct or incorrect', function() {
      round.returnCurrentCard(deck);
      expect(round.currentCard).to.equal(card1);
      round.takeTurns('array', deck);
      expect(round.takeTurns('array', deck)).to.equal('incorrect');
    });
  });

  it('should be able to calculate the percentage of correct guesses', function() {
    round.returnCurrentCard(deck);
    expect(round.currentCard).to.equal(card1);
    round.takeTurns('array', deck);
    expect(round.currentCard).to.equal(card2);
    round.takeTurns('this', deck);
    expect(round.currentCard).to.equal(card3);
    round.takeTurns('same', deck);
    expect(round.calculatePercentCorrect(deck)).to.equal('66%');
  });

  it('should be able to let a user know that the round is over', function() {
    round.returnCurrentCard(deck);
    expect(round.currentCard).to.equal(card1);
    round.takeTurns('array', deck);
    expect(round.currentCard).to.equal(card2);
    round.takeTurns('this', deck);
    expect(round.currentCard).to.equal(card3);
    round.takeTurns('same', deck);
    expect(round.calculatePercentCorrect(deck)).to.equal('66%');
    expect(round.endRound(deck)).to.equal(console.log('**Round over!** You answered 66% of the questions correctly!Press <ctrl + c> to exit'));
  });
});
