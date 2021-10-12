const chai = require("chai");
const Card = require("../src/Card.js");
const expect = chai.expect;
const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");

describe("Turn", () => {
  const card = new Card()
  const turn = new Turn("pickles");

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should have a guess", () => {
    expect(turn.guess).to.equal("pickles")
  });
})