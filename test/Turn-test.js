const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

  describe("Turn", () => {
let turn, card, card3;

    beforeEach(() => {
      const card3 = new Card(
        3,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
      const turn = new Turn();
      const card = new Card();
    });

    it("should be a function", () => {
      const turn = new Turn();
      expect(Turn).to.be.a("function");
    });
  
    it("should be an instance of Turn", () => {
      const turn = new Turn();
      expect(turn).to.be.an.instanceOf(Turn);
    });
  
    it("should be able to store a user's guess", () => {
      const turn2 = new Turn("filter method");
      expect(turn2.userGuess).to.equal("filter method");
    });
  
    it("should be able to reference the flashcard in play", () => {
      const turn3 = new Turn("filter method", card3);
      expect(turn3.card).to.equal(card3);
    });
  
    it("should be able to return the player's guess", () => {
      const erinsTurn = new Turn("array", card);
      const erinsGuess = erinsTurn.returnGuess();
      expect(erinsGuess).to.equal("array");
    });
  
    it("should be able return the stored flashcard's information", () => {
      const turn = new Turn("paper", card3);
      const currentCard = turn.returnCard();
      expect(currentCard).to.equal(card3);
    });
  
    it("should be able to determine if player's guess is correct", () => {
      const turn = new Turn("mutator method", card3);
      expect(turn.userGuess).to.equal("mutator method");
     // expect(turn.giveFeedback()).to.equal("You are Correct! 🌟 ");
    });

  });

