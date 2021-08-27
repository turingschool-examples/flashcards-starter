const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    currentDeck = [card1, card2, card3];
    deck = new Deck(currentDeck);
    round = new Round(deck);
    turn = new Turn('sea otter', card1);
});

  it('should be a function', () => {
    expect(Round).to.be.a('function');
    });

    it('should have a deck of cards', () => {
      expect(round.deck).to.equal(deck);
  });

    it('should be able to keep track of turns and start with 0 turns', () => {
      expect(round.turn).to.equal(0);
    });

    it('should return the current card on each turn', () => {
      expect(round.returnCurrentCard()).to.equal(round.deck.currentDeck[0]);
    });

    it('should evaluate the guess', () => {
      expect(turn.evaluateGuess(card1)).to.equal(true);
    });

      it('it should let the user know if guess was correct or incorrect', () => {
        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal('Correct!');
      });

      it('should keep track of all incorrect guesses', () => {
        round.takeTurn('sea otter', card1)
        expect(round.incorrectGuesses).to.deep.equal([]);
      });

      it('should calculate the percent of total correct guesses', () => {
        round.takeTurn('sea otter', card1);
        round.calculatePercentCorrect();
        expect(round.calculatePercentCorrect()).to.equal(`100%`);
      });
});
