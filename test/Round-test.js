const chai = require("chai");
const Card = require("../src/Card.js");
const Turn = require("../src/Turn.js");
const Deck = require("../src/Deck.js");
const Round = require("../src/Round.js");
const expect = chai.expect;

describe("Round", () => {

  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, "What is my fav food?", ["rice", "reeses"], "rice");
    card2 = new Card(2, "What is my name?", ["Blohn", "Grohn", "John"], "John");
    card3 = new Card(3, "What is my fav animal?", ["koala", "panda", "sloth"], "sloth");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should instantiate an instance of Round", () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it("should contain a deck", () => {
    expect(round.deck).to.be.an.instanceOf(Deck);
  });

  it("should return the current card being played and update after a turn", () => {
    let currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);

    round.takeTurn();
    currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card2);
  });
  
  it("should create a new Turn instance when a guess is made", () => {
    round.takeTurn("rice");
    expect(round.currentTurn).to.be.an.instanceOf(Turn);
  });

  it("should update turns", () => {
    expect(round.turns).to.equal(0);
    round.takeTurn("rice");
    expect(round.turns).to.equal(1);
  });

  it("should update the current card to the next card", () => {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn("reeses");
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.equal(1);
  });

  it("should provide feedback depending on if you're right or wrong", () => {
    expect(round.takeTurn("pie")).to.equal("incorrect!");
    expect(round.takeTurn("John")).to.equal("correct!");
  });

  it("should calculate the percent correct", () => {
    round.takeTurn("pie");
    round.takeTurn("John");
    round.takeTurn("koala");
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it("should be able to end round", () => {
    round.takeTurn("pie");
    round.takeTurn("John");
    // expect(round.endRound()).to.equal("** Round over! ** You answered 50% of the questions correctly!");
  });
});