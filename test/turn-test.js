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
})
