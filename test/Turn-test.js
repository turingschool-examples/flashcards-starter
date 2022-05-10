const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

  describe("Turn", () => {
    it("should be a function", () => {
      const card = new Turn();
      expect(Turn).to.be.a("function");
    });
  
    it("should be an instance of Turn", () => {
      const turn = new Turn();
      expect(turn).to.be.an.instanceOf(Turn);
    });
  
    it("should be able to store a user's guess", () => {
      const turn = new Turn("filter method");
      expect(turn.userGuess).to.equal("filter method");
    });
  
    it("should be able to reference the flashcard in play", () => {
      const card = new Card(
        3,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
      const turn = new Turn("filter method", card);
      expect(turn.card).to.equal(card);
    });
  
    it("should be able to return the player's guess", () => {
      const card = new Card(
        3,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
      const janesTurn = new Turn("array", card);
      const janesGuess = janesTurn.returnGuess();
      expect(janesGuess).to.equal("array");
    });
  
    it("should be able return the stored flashcard's information", () => {
      const card = new Card(
        3,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
      const turn = new Turn("paper", card);
      const currentCard = turn.returnCard();
      expect(currentCard).to.equal(card);
    });
  
    it("should be able to determine if player's guess is correct or not", () => {
      const card = new Card(
        3,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
      const turn = new Turn("mutator method", card);
      expect(turn.userGuess).to.equal("mutator method");
      expect(turn.giveFeedback()).to.equal("You are Correct! 🌟 ");
    });
  });