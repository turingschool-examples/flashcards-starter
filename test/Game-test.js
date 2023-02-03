const chai = require("chai")
const expect = chai.expect

const Card = require("../src/Card")
const Deck = require("../src/Deck");
const Turn = require("../src/Turn")
const Round = require("../src/Round");
const Game = require("../src/Game");

describe("Game", () => {
    let card, deck, round, game 

     beforeEach(() => {
        card = new Card( 1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object");
        deck = new Deck(card)
        round = new Round(deck)
        game = new Game()
  })

  it("should be a function", () => {
      expect(Game).to.be.a("function");
  });

  it ("should be an instantiation of game",() => {
      expect(game).to.be.an.instanceOf(Game)
  })
  
  it ("should create cards from the prototypes",() => {
      const createCards = game.createCards()
      expect(createCards[0]).to.deep.equal(card)
  })

  it("should create a new instance of deck with the cards", () => {
      const createDeck = game.makeDeck()
      expect(createDeck.cards[0]).to.deep.equal(deck.cards);
  });

  it("should be a new instance of Round", ()=> {
      expect(game.createRound()).to.be.an.instanceOf(Round);
  });
})