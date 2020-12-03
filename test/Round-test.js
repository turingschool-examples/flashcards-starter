const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Round', () => {
  let card1, card2, card3, cards, deck, round;

  beforeEach(() => {
    card1 = new Card();
    card2 = new Card();
    card3 = new Card();
    cards = [card1, card2, card3];

    deck = new Deck(cards);

    round = new Round(deck);
  });

  it.skip('should be a function', () => expect(Round).to.be.a('function'));

  it.skip('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should have the first card of the deck saved', () => {
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  });

  it.skip('should have a deck property which is a list of cards', () => {
    expect(round.deck).to.be.deep.equal(cards);
  });

  describe('takeTurn', () => {
    let newTurn, guess, correctAnswer;

    it.skip('should know what turn it\'s on', () => {
      round.takeTurn();
      expect(round.turns).to.equal(1);

      round.takeTurn();
      expect(round.turns).to.equal(2);
    });

    it.skip('should make a new Turn instance', () => {
      const newTurn = round.takeTurn();

      expect(newTurn).to.be.an.instanceof(Round);
    });

    beforeEach(() => {
      newTurn = round.takeTurn();
      guess = turn.answer;
      correctAnswer = cards[0].correctAnswer;
    });

    it.skip('should update turn count upon correct answer', () => {      
      expect(guess).to.be.equal(correctAnswer);
      expect(round.turns).to.equal(1);
    });
    
    it.skip('should update turn count upon incorrect answer', () => {
      expect(guess).to.not.be.equal(correctAnswer);
      expect(round.turns).to.equal(1);
    });
  });
});