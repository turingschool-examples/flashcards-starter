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
  it("should have a method that creates instance of Round with all 30 cards from data.js file", ()=> {
    const round = game.createRound();
    expect(round.deck.cards).to.have.lengthOf(30);
    expect(round.deck.cards).to.deep.include({"id": 3, "question": "What type of prototype method directly modifies the existing array?", "answers": ["mutator method", "accessor method", "iteration method"], "correctAnswer": "mutator method"});
  });
  it("should have a method to start the game", () => {
    expect(game.start).to.be.a("function");
  });
});