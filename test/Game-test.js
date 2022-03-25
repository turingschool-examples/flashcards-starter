const chai = require("chai");
const expect = chai.expect;
const data = require('../src/data');
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Game = require("../src/Game");

describe("Game", () => {
//  let card1, card2, card3, deck, round, game;

  // beforeEach(() => {
  // //   card1 = new Card(
  // //     1,
  // //     "What is Robbie's favorite animal",
  // //     ["sea otter", "pug", "capybara"],
  // //     "sea otter"
  // //   );
  // //   card2 = new Card(
  // //     14,
  // //     "What organ is Khalid missing?",
  // //     ["spleen", "appendix", "gallbladder"],
  // //     "gallbladder"
  // //   );
  // //   card3 = new Card(
  // //     12,
  // //     "What is Travis's middle name?",
  // //     ["Lex", "William", "Fitzgerald"],
  // //     "Fitzgerald"
  // //   );
  // //   deck = new Deck([card1, card2, card3]);
  // //   round = new Round(deck.cards);
  // //   game = new Game()
  // // });

  it.skip("should be an instance of Game", () => {
    game.start()
    console.log
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should keep track of the current Round', () => {
    expect(game.currentRound).to.deep.equal(round)
  })

  it.skip('should create cards', () => {
    game.start()
    expect(game.currentRound.deck.cards).to.equal(deck.cards)

  })



})
