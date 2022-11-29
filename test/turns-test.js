const chai = require("chai");
const expect = chai.expect;
const Turn = require("../src/turns");
const Card = require("../src/Card");

describe("Turn", function () {
  let turn;
  let card = new Card();
  beforeEach(() => {
    turn = new Turn("guess", card);
  });
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });
  it("should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  });
  it("should have a player guess", () => {
    expect(turn.guess).to.equal("guess");
  });
  it("should hold the current card", () => {
    expect(turn.card).to.equal(card);
  });
  
});
