const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data");
const prototypeQuestions = data.prototypeData;

const Game = require("../src/Game");
const Card = require("../src/Card");

describe("Game", () => {
  it("should be a function", () => {
    var game = new Game();
    expect(Game).to.be.a("function");
  });
  it("should have a storage for cards", () => {
    var game = new Game();
    expect(game.storedCards).to.deep.equal([]);
  });
  it("should have a function load that will instantiate and object on class Card", () => {
    var game = new Game();
    game.load();
    expect(game.load).to.be.a("function");
    expect(game.storedCards[0]).to.be.instanceOf(Card);
    expect(game.storedCards.length).to.equal(prototypeQuestions.length);
    expect(game.storedCards[1].id).to.equal(2);
  });
});
