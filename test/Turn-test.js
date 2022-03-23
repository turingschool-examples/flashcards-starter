const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", () => {
  let card;
  let turn;
  beforeEach(() => {
    card = new Card("What is Robbie's favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    turn = new Turn("pug", card);
  });
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });
  it("should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  });
  it("should pass in user's guess to the question", () => {
    expect(turn.guess).to.equal("pug");
  });
});