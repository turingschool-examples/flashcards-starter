const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');

describe('round functions', function () {
  let card1, card2, card3, deck, round;


  // this isn't working ?????? @$^#%^$@%^
    beforeEach(function () {
        card1 = createCard(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        card2 = createCard(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
        card3 = createCard(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
        deck = [card1, card2, card3]
        round = createRound(deck)
    }); 

  describe('createRound', function () {
    it('should create a round', function () {


      expect(round.deck).to.equal(deck);
      expect(round.currentCard).to.equal(deck[0]);
      expect(round.turns).to.equal(0);
      expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
    });
  });

  describe('takeTurn', function () {
    it('should update turns and store incorrect guesses', function () {

        expect(round.turns).to.equal(0);
        expect(round.currentCard).to.equal(card1);

        const feedback = round.takeTurn();

        expect(round.turns).to.equal(1);
        expect(round.currentCard).to.equal(card2);
        expect(round.incorrectGuesses).to.not.be.empty;
        expect(feedback).to.be.a('string');
    });
  });

  describe('calculatePercentCorrect', function () {
    it('should calculate the percentage of correct guesses', function () {
      round.takeTurn();
      round.takeTurn();

      const percentCorrect = round.calculatePercentCorrect();

      expect(percentCorrect).to.be.a('number');
    });
  });

});
