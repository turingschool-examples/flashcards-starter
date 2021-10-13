const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");

describe("Round", function() {

  it("should be a function", function() {
    let round = new Round();
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function() {
    let round = new Round();
    expect(round).to.be.a.instanceof(Round);
  });

  it("should have a deck", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it("should have a current card", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
  });

  it.skip("should have a turn counter with default value 0", function() {
    let round = new Round();
    expect(round.turns).to.equal(0);
  });

  it.skip("should store incorrect guesses", function() {
    let round = new Round();
    expect(round.incorrectGuesses).to.equal([]);
  });

  it.skip("should return the current card", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    let round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
    expect(round.returnCurrentCard).to.equal(card1);
  })


})

// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
//
// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//
// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
