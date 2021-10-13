const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", function() {

    it("should be a function", function() {
      let turn = new Turn();
      expect(Turn).to.be.a("function");
    });

    it.skip("should be an instance of Turn", function() {
      let turn = new Turn();
      expect(turn).to.be.an.instanceof(Turn);
    });

    it.skip("should have a player guess", function() {
      let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
      let turn = new Turn("not much", card);
      expect(Turn.guess).to.equal("not much");
    });

    it.skip("should have a card", function() {
      let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
      let turn = new Turn("not much", card);
      expect(Turn.card).to.equal(card);
    });

    it.skip("should be able to return the guess", function() {
      let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
      let turn = new Turn("not much", card);
      expect(Turn.returnGuess).to.equal("not much");
    });

    it.skip("should be able to return the card", function() {
      let card = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
      let turn = new Turn("not much", card);
      expect(Turn.returnCard).to.equal(id: 1, question: "What's up?", answers: ["the sky", "not much", "chicken butt"], correctAnswer: "chicken butt")
    });

    
})
