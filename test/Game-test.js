const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");

describe("Game", () => {
  it("should be a function", () => {
    var game = new Game();
    expect(Game).to.be.a("function");
  });
  it("should have a storage for cards", () => {
    var game = new Game();
    expect(game.storedCards).to.deep.equal([]);
  });
});
