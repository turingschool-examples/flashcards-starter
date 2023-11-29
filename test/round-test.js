const chai = require("chai");
const expect = chai.expect;

const { createCard, createDeck, createRound } = require("../src/card");

describe('createRound', function () {
    it('should be a function', function() {
        expect(createRound).to.be.a('function');
      });

    it('should create a round with initial properties', function () {
      const card1 = createCard(1, 'Question 1', ['A', 'B', 'C'], 'A');
      const card2 = createCard(2, 'Question 2', ['A', 'B', 'C'], 'C');
      const deck = createDeck([card1, card2]);
  
      const round = createRound(deck);
  
      expect(round.deck).to.deep.equal(deck);
      expect(round.currentCard).to.equal(card1);
      expect(round.turns).to.equal(0);
      expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
      expect(round).to.have.property('takeTurn').to.be.a('function');
      expect(round).to.have.property('calculatePercentCorrect').to.be.a('function');
      expect(round).to.have.property('endRound').to.be.a('function');
    });
  

    it('should handle an empty deck', function () {
      const emptyDeck = createDeck([]);
      const round = createRound(emptyDeck);
  
      expect(round.currentCard).to.be.undefined;
    });
  
    it('should handle a deck with one card', function () {
      const card1 = createCard(1, 'Question 1', ['A', 'B', 'C'], 'A');
      const singleCardDeck = createDeck([card1]);
      const round = createRound(singleCardDeck);
  
      expect(round.currentCard).to.equal(card1);
    });
  
  });