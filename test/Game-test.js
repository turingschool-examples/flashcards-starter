const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");

describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it("should be an instance of Game", () => {
    expect(game).to.be.an.instanceof(Game);
  });
  it("should have a method that creates an instance of Round with 30 cards", ()=> {
    const round = game.createRound();
    expect(round).to.have.lengthOf(30);
    expect(round).to.include({"id": 3, "question": "What type of prototype method directly modifies the existing array?", "answers": ["mutator method", "accessor method", "iteration method"], "correctAnswer": "mutator method"});
  });
});